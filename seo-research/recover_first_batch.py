"""
Recovery script to restore the first 45 processed keywords
This merges data from the first batch file with the latest file
"""

import csv
from pathlib import Path

def recover_first_batch():
    script_dir = Path(__file__).parent
    
    # Find files
    first_batch = script_dir / '01_master_keyword_list_UPDATED_20260124_195144.csv'
    latest_file = script_dir / '01_master_keyword_list_UPDATED_20260126_154335.csv'
    original_file = script_dir / '01_master_keyword_list.csv'
    
    if not first_batch.exists():
        print(f"❌ First batch file not found: {first_batch}")
        return
    
    if not latest_file.exists():
        print(f"❌ Latest file not found: {latest_file}")
        return
    
    if not original_file.exists():
        print(f"❌ Original file not found: {original_file}")
        return
    
    # Load original data
    print("Loading original data...")
    original_data = {}
    with open(original_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keyword = row.get('Keyword', '').strip()
            if keyword:
                original_data[keyword] = row
    
    # Load first batch (the 45 processed keywords)
    print(f"Loading first batch from {first_batch.name}...")
    first_batch_data = {}
    with open(first_batch, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keyword = row.get('Keyword', '').strip()
            if keyword:
                # Check if this was actually processed (compare with original)
                if keyword in original_data:
                    orig_vol = original_data[keyword].get('Search Volume (Est.)', '').strip()
                    batch_vol = row.get('Search Volume (Est.)', '').strip()
                    if orig_vol != batch_vol:
                        first_batch_data[keyword] = row
    
    print(f"✓ Found {len(first_batch_data)} processed keywords in first batch")
    
    # Load latest file
    print(f"Loading latest file from {latest_file.name}...")
    latest_data = {}
    with open(latest_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keyword = row.get('Keyword', '').strip()
            if keyword:
                latest_data[keyword] = row
    
    print(f"✓ Loaded {len(latest_data)} keywords from latest file")
    
    # Merge: Use first batch data where available (it has the REAL first 45)
    # Then use latest data for rest
    recovered_count = 0
    for keyword, first_row in first_batch_data.items():
        if keyword in latest_data:
            # Check if latest has different data (meaning it was re-processed incorrectly)
            latest_vol = latest_data[keyword].get('Search Volume (Est.)', '').strip()
            first_vol = first_row.get('Search Volume (Est.)', '').strip()
            
            if latest_vol != first_vol:
                # Latest was overwritten - restore from first batch
                latest_data[keyword] = first_row
                recovered_count += 1
    
    print(f"\n✓ Recovered {recovered_count} keywords from first batch")
    
    # Save recovered file
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = script_dir / f'01_master_keyword_list_RECOVERED_{timestamp}.csv'
    
    fieldnames = [
        'Product Category', 'Product', 'Keyword', 'Search Volume (Est.)',
        'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
        'Ranking Difficulty (Months)'
    ]
    
    # Build final list: recovered data + rest from latest
    final_results = []
    for keyword, original_row in original_data.items():
        if keyword in latest_data:
            final_results.append(latest_data[keyword])
        else:
            final_results.append(original_row)
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_results)
    
    print(f"\n💾 Saved recovered data to {output_file.name}")
    print(f"   - {len(first_batch_data)} keywords from first batch (preserved)")
    print(f"   - {len(latest_data) - len(first_batch_data)} keywords from latest file")
    print(f"   - Total: {len(final_results)} keywords")
    print(f"\n💡 Use this file to replace your current updated file!")

if __name__ == "__main__":
    recover_first_batch()

