"""
Create sorted ranking priority list from all real data
Sorts by Priority Score (highest first) with business logic
"""

import csv
import sys
from pathlib import Path
from datetime import datetime

# Fix Windows encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

def load_all_real_data():
    """Load all real data from updated files"""
    script_dir = Path(__file__).parent
    
    # Load original for comparison
    original_file = script_dir / '01_master_keyword_list.csv'
    original_data = {}
    if original_file.exists():
        with open(original_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                keyword = row.get('Keyword', '').strip()
                if keyword:
                    original_data[keyword] = row
    
    # Find all updated files
    updated_files = sorted(script_dir.glob('*UPDATED*.csv'), reverse=True)
    updated_files.extend(sorted(script_dir.glob('top_100_recovered*.csv'), reverse=True))
    
    real_data = {}
    
    for file in updated_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    keyword = row.get('Keyword', '').strip()
                    if not keyword:
                        continue
                    
                    # Check if this has real data (different from original)
                    if keyword in original_data:
                        orig_vol = original_data[keyword].get('Search Volume (Est.)', '').strip()
                        upd_vol = row.get('Search Volume (Est.)', '').strip()
                        orig_comp = original_data[keyword].get('Competition', '').strip()
                        upd_comp = row.get('Competition', '').strip()
                        
                        # If data changed, it's real
                        if orig_vol != upd_vol or orig_comp != upd_comp:
                            # Use the one with highest priority score
                            try:
                                new_priority = int(row.get('Priority Score', 0))
                                if keyword in real_data:
                                    old_priority = int(real_data[keyword].get('Priority Score', 0))
                                    if new_priority > old_priority:
                                        real_data[keyword] = row
                                else:
                                    real_data[keyword] = row
                            except:
                                real_data[keyword] = row
                    else:
                        # New keyword - assume real
                        real_data[keyword] = row
        except Exception as e:
            print(f"Error loading {file.name}: {e}")
            continue
    
    return real_data, original_data

def calculate_business_value(row):
    """Calculate overall business value score for sorting"""
    try:
        priority = int(row.get('Priority Score', 0))
        volume = int(row.get('Search Volume (Est.)', 0))
        competition = row.get('Competition', 'Medium')
        intent = row.get('Intent', 'Commercial')
        
        # Base score from priority
        score = priority
        
        # Bonus for transactional intent
        if intent == 'Transactional':
            score += 20
        
        # Bonus for low competition
        if competition == 'Low':
            score += 15
        elif competition == 'Very Low':
            score += 25
        
        # Bonus for high volume
        if volume >= 200:
            score += 10
        elif volume >= 100:
            score += 5
        
        # Bonus for Dubai/UAE (primary market)
        geo = row.get('Geographic Focus', '')
        if 'Dubai' in geo or 'UAE' in geo:
            score += 5
        
        return score
    except:
        return 0

def determine_quick_win(row):
    """Determine if this is a quick win"""
    try:
        competition = row.get('Competition', 'Medium')
        difficulty = row.get('Ranking Difficulty (Months)', '')
        volume = int(row.get('Search Volume (Est.)', 0))
        intent = row.get('Intent', 'Commercial')
        
        # Quick win criteria:
        # - Low competition AND
        # - 2-4 months difficulty AND
        # - Volume >= 20 AND
        # - Commercial or Transactional intent
        
        if competition in ['Low', 'Very Low']:
            if '2-4 months' in difficulty:
                if volume >= 20:
                    if intent in ['Commercial', 'Transactional']:
                        return 'Yes'
        
        return 'No'
    except:
        return 'No'

def main():
    print("Creating Ranking Priority List...")
    
    # Load all real data
    real_data, original_data = load_all_real_data()
    
    print(f"Loaded {len(real_data)} keywords with real data")
    
    # Convert to list and calculate business value
    ranked_keywords = []
    for keyword, row in real_data.items():
        business_value = calculate_business_value(row)
        quick_win = determine_quick_win(row)
        
        ranked_keywords.append({
            'keyword': keyword,
            'row': row,
            'business_value': business_value,
            'quick_win': quick_win
        })
    
    # Sort by business value (highest first)
    ranked_keywords.sort(key=lambda x: x['business_value'], reverse=True)
    
    # Create output
    script_dir = Path(__file__).parent
    output_file = script_dir / 'ranking_priority_list.csv'
    
    fieldnames = [
        'Rank', 'Product Category', 'Product', 'Keyword', 'Search Volume',
        'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
        'Ranking Difficulty', 'Business Value Score', 'Quick Win', 'Why Rank This'
    ]
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        
        for rank, item in enumerate(ranked_keywords, 1):
            row = item['row']
            keyword = item['keyword']
            
            # Create why rank this reason
            volume = int(row.get('Search Volume (Est.)', 0))
            competition = row.get('Competition', '')
            intent = row.get('Intent', '')
            geo = row.get('Geographic Focus', '')
            
            reasons = []
            if volume >= 200:
                reasons.append('High volume')
            elif volume >= 100:
                reasons.append('Good volume')
            
            if competition == 'Low':
                reasons.append('Low competition')
            elif competition == 'Very Low':
                reasons.append('Very low competition')
            
            if intent == 'Transactional':
                reasons.append('Transactional intent')
            
            if 'Dubai' in geo or 'UAE' in geo:
                reasons.append('Primary market')
            elif 'Saudi' in geo:
                reasons.append('Geographic expansion')
            
            if 'complete' in keyword.lower() or 'turnkey' in keyword.lower():
                reasons.append('Complete solution')
            
            if 'supplier' in keyword.lower() or 'manufacturer' in keyword.lower():
                reasons.append('Direct supplier search')
            
            why = ' + '.join(reasons) if reasons else 'Good opportunity'
            
            output_row = {
                'Rank': rank,
                'Product Category': row.get('Product Category', ''),
                'Product': row.get('Product', ''),
                'Keyword': keyword,
                'Search Volume': row.get('Search Volume (Est.)', ''),
                'Competition': competition,
                'Intent': intent,
                'Geographic Focus': geo,
                'Priority Score': row.get('Priority Score', ''),
                'Ranking Difficulty': row.get('Ranking Difficulty (Months)', ''),
                'Business Value Score': item['business_value'],
                'Quick Win': item['quick_win'],
                'Why Rank This': why
            }
            
            writer.writerow(output_row)
    
    print(f"\nSUCCESS: Created ranking priority list with {len(ranked_keywords)} keywords")
    print(f"Saved to: {output_file}")
    
    # Show top 20
    print(f"\nTOP 20 KEYWORDS TO RANK FOR:")
    print("=" * 80)
    for i, item in enumerate(ranked_keywords[:20], 1):
        row = item['row']
        print(f"{i:2d}. {row.get('Keyword', '')[:50]:<50} | Vol: {row.get('Search Volume (Est.)', ''):>4} | "
              f"Comp: {row.get('Competition', ''):<6} | Priority: {row.get('Priority Score', ''):>4} | "
              f"Quick Win: {item['quick_win']}")

if __name__ == "__main__":
    main()

