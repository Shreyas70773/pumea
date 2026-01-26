"""
Quick script to process ONLY the top 100 most valuable keywords
No rate limit checking - just process them all
"""

import csv
import sys
import os
from pathlib import Path
# Import the collector class directly
import requests
from datetime import datetime
from typing import List, Dict

# Copy the collector class here to avoid import issues
class FastCollector:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.processed_count = 0
        
    def collect_keyword_data(self, keyword: str, location: str = "Dubai, United Arab Emirates") -> Dict:
        """Collect data for a single keyword"""
        try:
            url = "https://serpapi.com/search.json"
            params = {
                'q': keyword,
                'location': location,
                'api_key': self.api_key,
                'num': 10,
                'hl': 'en',
                'gl': 'ae'
            }
            
            response = requests.get(url, params=params, timeout=15)
            
            if response.status_code == 200:
                data = response.json()
                organic_results = data.get('organic_results', [])
                search_info = data.get('search_information', {})
                total_results = search_info.get('total_results', 0)
                
                competition_level = self._analyze_competition(organic_results)
                estimated_volume = self._estimate_volume(total_results, keyword, organic_results)
                intent = self._determine_intent(keyword, organic_results)
                geo_focus = self._extract_geographic_focus(keyword)
                priority_score = self._calculate_priority_score(estimated_volume, competition_level, intent)
                ranking_difficulty = self._estimate_ranking_difficulty(competition_level, estimated_volume)
                
                self.processed_count += 1
                
                return {
                    'keyword': keyword,
                    'estimated_volume': estimated_volume,
                    'competition_level': competition_level,
                    'intent': intent,
                    'geo_focus': geo_focus,
                    'priority_score': priority_score,
                    'ranking_difficulty': ranking_difficulty,
                }
            return None
        except Exception as e:
            print(f"   ✗ Error: {e}")
            return None
    
    def _analyze_competition(self, organic_results: List[Dict]) -> str:
        directory_domains = ['alibaba.com', 'indiamart.com']
        has_directory = any(domain in result.get('link', '') for result in organic_results[:5] for domain in directory_domains)
        has_suppliers = sum(1 for result in organic_results[:5] if any(ind in result.get('title', '').lower() for ind in ['supplier', 'manufacturer']))
        established_domains = ['richemachinery.com', 'amanduskahl.com']
        has_established = any(domain in result.get('link', '') for result in organic_results[:5] for domain in established_domains)
        if has_established: return "High"
        if has_directory and has_suppliers < 2: return "Low"
        if has_suppliers >= 3: return "High"
        return "Medium"
    
    def _estimate_volume(self, total_results: int, keyword: str, organic_results: List[Dict]) -> int:
        if total_results > 10000000: base = 500
        elif total_results > 5000000: base = 200
        elif total_results > 1000000: base = 100
        elif total_results > 500000: base = 75
        elif total_results > 100000: base = 50
        elif total_results > 50000: base = 30
        elif total_results > 10000: base = 20
        elif total_results > 5000: base = 10
        elif total_results > 1000: base = 5
        else: base = 2
        if 'UAE' in keyword or 'Dubai' in keyword: base = int(base * 0.7)
        elif any(loc in keyword for loc in ['Saudi', 'Riyadh']): base = int(base * 0.5)
        return max(1, base)
    
    def _determine_intent(self, keyword: str, organic_results: List[Dict]) -> str:
        keyword_lower = keyword.lower()
        if any(w in keyword_lower for w in ['price', 'cost', 'buy', 'sale']): return "Transactional"
        if any(w in keyword_lower for w in ['supplier', 'manufacturer', 'dealer']): return "Commercial"
        if any(w in keyword_lower for w in ['how', 'what', 'why', 'guide']): return "Informational"
        return "Commercial"
    
    def _extract_geographic_focus(self, keyword: str) -> str:
        if 'UAE' in keyword: return "UAE"
        elif 'Dubai' in keyword: return "Dubai"
        elif 'Saudi' in keyword or 'Riyadh' in keyword: return "Saudi Arabia"
        elif 'Oman' in keyword: return "Oman"
        elif 'Qatar' in keyword: return "Qatar"
        return "Global"
    
    def _calculate_priority_score(self, volume: int, competition: str, intent: str) -> int:
        relevance = 1.0 if intent == "Transactional" else (0.9 if intent == "Commercial" else 0.7)
        comp_mult = {"Very Low": 1, "Low": 1.5, "Medium": 2, "High": 3}.get(competition, 2)
        return max(0, min(200, int((volume * relevance) / comp_mult)))
    
    def _estimate_ranking_difficulty(self, competition: str, volume: int) -> str:
        if competition == "Very Low": return "1-2 months"
        elif competition == "Low": return "2-4 months"
        elif competition == "Medium": return "4-6 months" if volume > 100 else "3-6 months"
        else: return "9-12 months" if volume > 100 else "6-9 months"

# Fix Windows encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

def main():
    print("=" * 70)
    print("TOP 100 KEYWORDS - FAST PROCESSING")
    print("=" * 70)
    print("Processing the 100 most valuable keywords for your business")
    print("No rate limit delays - processing all at once")
    print("=" * 70)
    
    # Get API key
    api_key = os.environ.get('SERPAPI_KEY', '').strip()
    if not api_key:
        api_key = input("\nEnter your SerpAPI key: ").strip()
    
    if not api_key:
        print("\n❌ API key required")
        return
    
    # Load top 100 keywords
    script_dir = Path(__file__).parent
    top100_file = script_dir / 'top_100_keywords.csv'
    
    if not top100_file.exists():
        print(f"❌ Top 100 file not found: {top100_file}")
        return
    
    keywords = []
    with open(top100_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keyword = row.get('Keyword', '').strip()
            if keyword:
                keywords.append(keyword)
    
    print(f"\n✓ Loaded {len(keywords)} top priority keywords")
    
    # Load original data for merging
    original_file = script_dir / '01_master_keyword_list.csv'
    original_data = {}
    if original_file.exists():
        with open(original_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                keyword = row.get('Keyword', '').strip()
                if keyword:
                    original_data[keyword] = row
    
    # Create collector
    collector = FastCollector(api_key)
    
    # Load existing results (simple check)
    existing_results = {}
    updated_files = sorted(script_dir.glob('*UPDATED*.csv'), reverse=True)
    if updated_files and original_data:
        with open(updated_files[0], 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                keyword = row.get('Keyword', '').strip()
                if keyword in original_data:
                    orig_vol = original_data[keyword].get('Search Volume (Est.)', '').strip()
                    upd_vol = row.get('Search Volume (Est.)', '').strip()
                    if orig_vol != upd_vol:
                        existing_results[keyword] = row
    
    # Filter out already processed
    keywords_to_process = [k for k in keywords if k not in existing_results]
    
    print(f"\n📊 Status:")
    print(f"   Total keywords: {len(keywords)}")
    print(f"   Already processed: {len(existing_results)}")
    print(f"   To process: {len(keywords_to_process)}")
    
    if not keywords_to_process:
        print("\n✅ All top 100 keywords already processed!")
        return
    
    # Process all keywords
    print(f"\n🚀 Processing {len(keywords_to_process)} keywords...")
    print("   (No rate limit delays - processing continuously)")
    
    results = []
    for i, keyword in enumerate(keywords_to_process, 1):
        print(f"\n[{i}/{len(keywords_to_process)}] {keyword}")
        result = collector.collect_keyword_data(keyword)
        
        if result:
            # Merge with original data
            if keyword in original_data:
                merged = original_data[keyword].copy()
                merged['Search Volume (Est.)'] = result['estimated_volume']
                merged['Competition'] = result['competition_level']
                merged['Intent'] = result['intent']
                merged['Geographic Focus'] = result['geo_focus']
                merged['Priority Score'] = result['priority_score']
                merged['Ranking Difficulty (Months)'] = result['ranking_difficulty']
                results.append(merged)
            else:
                # New keyword - create row from result
                new_row = {
                    'Product Category': '',
                    'Product': '',
                    'Keyword': keyword,
                    'Search Volume (Est.)': result['estimated_volume'],
                    'Competition': result['competition_level'],
                    'Intent': result['intent'],
                    'Geographic Focus': result['geo_focus'],
                    'Priority Score': result['priority_score'],
                    'Ranking Difficulty (Months)': result['ranking_difficulty']
                }
                results.append(new_row)
            
            print(f"   ✓ Volume: {result['estimated_volume']} | Competition: {result['competition_level']} | Priority: {result['priority_score']}")
        else:
            print(f"   ✗ Failed")
        
        # Small delay to avoid overwhelming API
        if i < len(keywords_to_process):
            time.sleep(1)  # 1 second between requests
    
    # Save results
    if results:
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = script_dir / f'top_100_results_{timestamp}.csv'
        
        fieldnames = [
            'Product Category', 'Product', 'Keyword', 'Search Volume (Est.)',
            'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
            'Ranking Difficulty (Months)'
        ]
        
        # Filter results to only include expected fields
        filtered_results = []
        for row in results:
            filtered_row = {field: row.get(field, '') for field in fieldnames}
            filtered_results.append(filtered_row)
        
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(filtered_results)
        
        print(f"\n💾 Saved {len(results)} results to {filename}")
        print(f"📊 Total processed: {len(results)} keywords")
    
    print("\n✅ Done!")

if __name__ == "__main__":
    import time
    main()

