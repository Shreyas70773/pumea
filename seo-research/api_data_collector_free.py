"""
Pacific Unity MEA - FREE Tier Keyword Data Collector
Optimized for SerpAPI Free Tier: 250 searches/month, 50 per hour
Outputs data in SAME format as original CSV for easy updating
"""

import json
import csv
import time
import os
import sys
from datetime import datetime
from typing import List, Dict, Optional
import requests
from pathlib import Path

# Fix Windows encoding issues
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

class FreeTierCollector:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.results = []
        self.processed_count = 0
        self.monthly_limit = 250
        self.hourly_limit = 50
        self.hourly_count = 0
        self.last_hour_reset = datetime.now()
        self.original_data = {}  # Store original CSV data
        
    def load_original_csv(self, csv_file: Path) -> Dict[str, Dict]:
        """Load original CSV and map keywords to their row data"""
        original = {}
        try:
            with open(csv_file, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    keyword = row.get('Keyword', '').strip()
                    if keyword:
                        original[keyword] = row
            print(f"✓ Loaded {len(original)} keywords from original CSV")
            return original
        except Exception as e:
            print(f"❌ Error loading original CSV: {e}")
            return {}
    
    def load_existing_results(self, script_dir: Path, original_data: Dict[str, Dict]) -> Dict[str, Dict]:
        """Load already processed keywords from previous runs by comparing with original"""
        processed = {}
        
        # Find all UPDATED CSV files
        updated_files = sorted(script_dir.glob('01_master_keyword_list_UPDATED_*.csv'), reverse=True)
        
        if updated_files:
            # Load the most recent one
            latest_file = updated_files[0]
            try:
                with open(latest_file, 'r', encoding='utf-8') as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        keyword = row.get('Keyword', '').strip()
                        if not keyword:
                            continue
                        
                        # Compare with original data to detect if this was actually processed
                        if keyword in original_data:
                            original_row = original_data[keyword]
                            
                            # Check if data changed (means it was processed with real API data)
                            original_vol = original_row.get('Search Volume (Est.)', '').strip()
                            updated_vol = row.get('Search Volume (Est.)', '').strip()
                            
                            original_comp = original_row.get('Competition', '').strip()
                            updated_comp = row.get('Competition', '').strip()
                            
                            # If volume OR competition changed, it was processed
                            if original_vol != updated_vol or original_comp != updated_comp:
                                # This keyword has real API data - keep it
                                processed[keyword] = row
                        else:
                            # New keyword not in original - assume processed
                            processed[keyword] = row
                
                if processed:
                    print(f"✓ Found {len(processed)} already processed keywords from {latest_file.name}")
                    print(f"   These have REAL API data and will be preserved")
                    print(f"   Will skip these and continue from keyword #{len(processed) + 1}")
            except Exception as e:
                print(f"⚠️  Could not load existing results: {e}")
        
        return processed
    
    def check_rate_limits(self):
        """Check and manage rate limits - process in smaller batches"""
        now = datetime.now()
        
        # Reset hourly count if an hour has passed
        if (now - self.last_hour_reset).seconds >= 3600:
            self.hourly_count = 0
            self.last_hour_reset = now
        
        # Check limits
        if self.processed_count >= self.monthly_limit:
            print(f"\n⚠️  Monthly limit reached: {self.processed_count}/{self.monthly_limit}")
            return False
        
        # If we're close to hourly limit, stop this batch (don't wait)
        if self.hourly_count >= self.hourly_limit - 5:  # Stop at 45 to be safe
            print(f"\n⏸️  Approaching hourly limit ({self.hourly_count}/{self.hourly_limit}).")
            print(f"   Processed {self.processed_count} keywords so far.")
            print(f"   Save your progress and run again in 1 hour to continue.")
            return False
        
        return True
    
    def collect_keyword_data(self, keyword: str, location: str = "Dubai, United Arab Emirates") -> Dict:
        """Collect data for a single keyword"""
        if not self.check_rate_limits():
            return None
        
        try:
            url = "https://serpapi.com/search.json"
            params = {
                'q': keyword,
                'location': location,
                'api_key': self.api_key,
                'num': 10,
                'hl': 'en',
                'gl': 'ae'  # UAE
            }
            
            response = requests.get(url, params=params, timeout=15)
            
            if response.status_code == 200:
                data = response.json()
                
                # Extract SERP data
                organic_results = data.get('organic_results', [])
                search_info = data.get('search_information', {})
                total_results = search_info.get('total_results', 0)
                
                # Analyze competition
                competition_level = self._analyze_competition(organic_results)
                
                # Estimate search volume based on total results and keyword characteristics
                estimated_volume = self._estimate_volume(total_results, keyword, organic_results)
                
                # Determine intent
                intent = self._determine_intent(keyword, organic_results)
                
                # Get geographic focus from keyword
                geo_focus = self._extract_geographic_focus(keyword)
                
                # Calculate priority score
                priority_score = self._calculate_priority_score(estimated_volume, competition_level, intent)
                
                # Estimate ranking difficulty
                ranking_difficulty = self._estimate_ranking_difficulty(competition_level, estimated_volume)
                
                result = {
                    'keyword': keyword,
                    'total_results': total_results,
                    'estimated_volume': estimated_volume,
                    'competition_level': competition_level,
                    'intent': intent,
                    'geo_focus': geo_focus,
                    'priority_score': priority_score,
                    'ranking_difficulty': ranking_difficulty,
                    'timestamp': datetime.now().isoformat()
                }
                
                self.processed_count += 1
                self.hourly_count += 1
                
                return result
                
            elif response.status_code == 429:
                print(f"⚠️  Rate limit hit. Waiting 60 seconds...")
                time.sleep(60)
                return self.collect_keyword_data(keyword, location)
            else:
                print(f"❌ Error {response.status_code} for {keyword}")
                return None
                
        except Exception as e:
            print(f"❌ Exception for {keyword}: {e}")
            return None
    
    def _analyze_competition(self, organic_results: List[Dict]) -> str:
        """Analyze competition level based on SERP results"""
        if len(organic_results) == 0:
            return "Very Low"
        
        # Check for directory sites (Alibaba, IndiaMART = Low competition)
        directory_domains = ['alibaba.com', 'indiamart.com', 'tradeindia.com', 'exportersindia.com']
        has_directory = any(domain in result.get('link', '') for result in organic_results[:5] 
                          for domain in directory_domains)
        
        # Check for established suppliers
        supplier_indicators = ['supplier', 'manufacturer', 'company', 'equipment']
        has_suppliers = sum(1 for result in organic_results[:5] 
                          if any(indicator in result.get('title', '').lower() 
                                for indicator in supplier_indicators))
        
        # Check domain authority (established brands)
        established_domains = ['richemachinery.com', 'amanduskahl.com', 'althika.com', 'keyul.com']
        has_established = any(domain in result.get('link', '') for result in organic_results[:5]
                            for domain in established_domains)
        
        if has_established:
            return "High"
        elif has_directory and has_suppliers < 2:
            return "Low"
        elif has_suppliers >= 3:
            return "High"
        else:
            return "Medium"
    
    def _estimate_volume(self, total_results: int, keyword: str, organic_results: List[Dict]) -> int:
        """Estimate search volume based on total results and SERP characteristics"""
        # More sophisticated estimation
        base_volume = 0
        
        # Base volume from total results
        if total_results > 10000000:
            base_volume = 500
        elif total_results > 5000000:
            base_volume = 200
        elif total_results > 1000000:
            base_volume = 100
        elif total_results > 500000:
            base_volume = 75
        elif total_results > 100000:
            base_volume = 50
        elif total_results > 50000:
            base_volume = 30
        elif total_results > 10000:
            base_volume = 20
        elif total_results > 5000:
            base_volume = 10
        elif total_results > 1000:
            base_volume = 5
        else:
            base_volume = 2
        
        # Adjust based on keyword characteristics
        if 'UAE' in keyword or 'Dubai' in keyword:
            # Local searches typically have lower volume
            base_volume = int(base_volume * 0.7)
        elif any(loc in keyword for loc in ['Saudi', 'Riyadh', 'Oman', 'Qatar']):
            base_volume = int(base_volume * 0.5)
        
        # If very few results but has organic listings, might be niche
        if total_results < 1000 and len(organic_results) > 0:
            base_volume = max(5, base_volume)
        
        return max(1, base_volume)  # Minimum 1
    
    def _determine_intent(self, keyword: str, organic_results: List[Dict]) -> str:
        """Determine search intent"""
        keyword_lower = keyword.lower()
        
        # Transactional indicators
        if any(word in keyword_lower for word in ['price', 'cost', 'buy', 'sale', 'for sale', 'purchase']):
            return "Transactional"
        
        # Commercial indicators
        if any(word in keyword_lower for word in ['supplier', 'manufacturer', 'dealer', 'distributor', 'company']):
            return "Commercial"
        
        # Informational indicators
        if any(word in keyword_lower for word in ['how', 'what', 'why', 'guide', 'tutorial', 'vs']):
            return "Informational"
        
        # Default to commercial for B2B industrial keywords
        return "Commercial"
    
    def _extract_geographic_focus(self, keyword: str) -> str:
        """Extract geographic focus from keyword"""
        if 'UAE' in keyword:
            return "UAE"
        elif 'Dubai' in keyword:
            return "Dubai"
        elif 'Abu Dhabi' in keyword:
            return "Abu Dhabi"
        elif 'Sharjah' in keyword:
            return "Sharjah"
        elif 'Saudi Arabia' in keyword or 'Riyadh' in keyword or 'Jeddah' in keyword:
            return "Saudi Arabia"
        elif 'Oman' in keyword or 'Muscat' in keyword:
            return "Oman"
        elif 'Qatar' in keyword or 'Doha' in keyword:
            return "Qatar"
        elif 'Middle East' in keyword or 'MEA' in keyword or 'GCC' in keyword:
            return "Middle East"
        else:
            return "Global"
    
    def _calculate_priority_score(self, volume: int, competition: str, intent: str) -> int:
        """Calculate priority score: (Volume × Relevance) / Competition"""
        # Relevance based on intent
        relevance = 1.0
        if intent == "Transactional":
            relevance = 1.0
        elif intent == "Commercial":
            relevance = 0.9
        else:
            relevance = 0.7
        
        # Competition multiplier
        competition_mult = {
            "Very Low": 1,
            "Low": 1.5,
            "Medium": 2,
            "High": 3
        }
        comp_mult = competition_mult.get(competition, 2)
        
        # Calculate score
        score = int((volume * relevance) / comp_mult)
        return max(0, min(200, score))  # Cap at 200
    
    def _estimate_ranking_difficulty(self, competition: str, volume: int) -> str:
        """Estimate ranking difficulty in months"""
        if competition == "Very Low":
            return "1-2 months"
        elif competition == "Low":
            return "2-4 months"
        elif competition == "Medium":
            if volume > 100:
                return "4-6 months"
            else:
                return "3-6 months"
        else:  # High
            if volume > 100:
                return "9-12 months"
            else:
                return "6-9 months"
    
    def process_keywords_batch(self, keywords: List[str], original_data: Dict, batch_size: int = 45):
        """Process keywords in batches of 45 to stay under 50/hour limit"""
        print("=" * 70)
        print("FREE TIER KEYWORD DATA COLLECTOR")
        print("=" * 70)
        print(f"Monthly Limit: {self.monthly_limit} searches")
        print(f"Hourly Limit: {self.hourly_limit} searches")
        print(f"Keywords to process: {len(keywords)}")
        print(f"Batch size: {batch_size} (stays under hourly limit)")
        print("=" * 70)
        
        # Prioritize keywords
        prioritized = self._prioritize_keywords(keywords)
        
        total_batches = (len(prioritized) + batch_size - 1) // batch_size
        
        for batch_num in range(total_batches):
            start_idx = batch_num * batch_size
            end_idx = min(start_idx + batch_size, len(prioritized))
            batch = prioritized[start_idx:end_idx]
            
            print(f"\n📦 Processing Batch {batch_num + 1}/{total_batches}")
            print(f"   Keywords {start_idx + 1}-{end_idx} of {len(prioritized)}")
            print(f"   Remaining monthly quota: {self.monthly_limit - self.processed_count}")
            print(f"   Remaining hourly quota: {self.hourly_limit - self.hourly_count}")
            
            batch_results = []
            for i, keyword in enumerate(batch, 1):
                if not self.check_rate_limits():
                    print(f"\n⏸️  Stopping batch to respect hourly limit.")
                    print(f"   Processed {self.processed_count} keywords total.")
                    print(f"   Run again in 1 hour to continue from keyword {i + start_idx}.")
                    break
                
                print(f"   [{i}/{len(batch)}] Processing: {keyword}")
                result = self.collect_keyword_data(keyword)
                
                if result:
                    # Merge with original CSV data
                    if keyword in original_data:
                        merged = original_data[keyword].copy()
                        # Update with real data
                        merged['Search Volume (Est.)'] = result['estimated_volume']
                        merged['Competition'] = result['competition_level']
                        merged['Intent'] = result['intent']
                        merged['Geographic Focus'] = result['geo_focus']
                        merged['Priority Score'] = result['priority_score']
                        merged['Ranking Difficulty (Months)'] = result['ranking_difficulty']
                        batch_results.append(merged)
                        self.results.append(merged)
                    else:
                        # New keyword not in original CSV
                        batch_results.append(result)
                        self.results.append(result)
                    
                    print(f"      ✓ Volume: {result['estimated_volume']} | Competition: {result['competition_level']} | Priority: {result['priority_score']}")
                else:
                    print(f"      ✗ Failed")
                
                # Small delay to avoid hitting rate limits
                if i < len(batch):
                    time.sleep(2)  # 2 seconds between requests
            
            # Save batch results immediately
            if batch_results:
                self.save_batch(batch_results, batch_num + 1, original_data)
            
            # If we've hit limits, stop
            if self.processed_count >= self.monthly_limit:
                break
            
            if self.hourly_count >= self.hourly_limit - 5:
                print(f"\n⏸️  Hourly limit approaching. Stopping.")
                print(f"   Processed {self.processed_count} keywords.")
                print(f"   Run again in 1 hour to continue.")
                break
            
            # Small break between batches
            if batch_num < total_batches - 1:
                print(f"\n⏸️  Batch complete. Starting next batch in 5 seconds...")
                time.sleep(5)
        
        return self.results
    
    def _prioritize_keywords(self, keywords: List[str]) -> List[str]:
        """Prioritize keywords - focus on most important first"""
        priority_1 = [k for k in keywords if 'UAE' in k or 'Dubai' in k]
        priority_2 = [k for k in keywords if any(loc in k for loc in ['Saudi', 'Riyadh', 'Oman', 'Qatar'])]
        priority_3 = [k for k in keywords if k not in priority_1 and k not in priority_2]
        
        return priority_1 + priority_2 + priority_3
    
    def save_batch(self, results: List[Dict], batch_num: int, original_data: Dict):
        """Save batch results to CSV in original format"""
        script_dir = Path(__file__).parent
        filename = script_dir / f'real_data_batch_{batch_num}.csv'
        
        if not results:
            return
        
        # Use original CSV columns
        fieldnames = [
            'Product Category', 'Product', 'Keyword', 'Search Volume (Est.)',
            'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
            'Ranking Difficulty (Months)'
        ]
        
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(results)
        
        print(f"\n💾 Saved batch {batch_num} to {filename}")
    
    def save_final_results(self, original_data: Dict, existing_results: Dict = None):
        """Save all results to final CSV in original format, merging with original data"""
        script_dir = Path(__file__).parent
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = script_dir / f'01_master_keyword_list_UPDATED_{timestamp}.csv'
        
        # Merge: Use processed results where available, original data for rest
        # Combine existing results (from previous runs) + new results (this run)
        all_processed = {}
        
        # First, add existing results (from previous runs) - these have REAL data
        if existing_results:
            for keyword, row in existing_results.items():
                all_processed[keyword] = row
        
        # Then, add new results from this run (these also have REAL data)
        for row in self.results:
            if 'Keyword' in row:
                keyword = row['Keyword'].strip()
                all_processed[keyword] = row
        
        # Build final results: processed data where available, original estimates for rest
        final_results = []
        for keyword, original_row in original_data.items():
            if keyword in all_processed:
                # Use REAL processed data (from API)
                final_results.append(all_processed[keyword])
            else:
                # Use original estimates (not yet processed)
                final_results.append(original_row)
        
        # Use original CSV columns
        fieldnames = [
            'Product Category', 'Product', 'Keyword', 'Search Volume (Est.)',
            'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
            'Ranking Difficulty (Months)'
        ]
        
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(final_results)
        
        processed_count = len(all_processed)
        total_count = len(final_results)
        new_this_run = len(self.results)
        
        print(f"\n💾 Saved {total_count} total keywords to {filename}")
        print(f"   - {processed_count} keywords with REAL API data (preserved from previous runs + {new_this_run} new)")
        print(f"   - {total_count - processed_count} keywords with original estimates (not yet processed)")
        print(f"📊 API Credits Used: {self.processed_count}/{self.monthly_limit}")
        print(f"\n💡 This file matches your original CSV format and can replace it!")
        print(f"⚠️  IMPORTANT: All previously processed keywords are preserved!")


def main():
    """Main execution"""
    print("\n" + "=" * 70)
    print("SERPAPI FREE TIER - KEYWORD DATA COLLECTOR")
    print("=" * 70)
    print("\n⚠️  IMPORTANT: Free tier limits:")
    print("   - 250 searches per month")
    print("   - 50 searches per hour")
    print("   - Processing in batches of 45 to stay under hourly limit")
    print("   - Output matches your original CSV format!")
    print("\n" + "=" * 70)
    
    # Get API key - try environment variable first, then prompt
    api_key = os.environ.get('SERPAPI_KEY', '').strip()
    
    if not api_key:
        try:
            api_key = input("\nEnter your SerpAPI key: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n❌ API key required.")
            print("   Set environment variable: set SERPAPI_KEY=your_key")
            print("   Or get one at: https://serpapi.com/users/sign_up")
            return
    
    if not api_key:
        print("\n❌ API key required. Get one at: https://serpapi.com/users/sign_up")
        return
    
    # Load original CSV
    script_dir = Path(__file__).parent
    keyword_file = script_dir / '01_master_keyword_list.csv'
    
    if not keyword_file.exists():
        alt_paths = [
            Path.cwd() / 'seo-research' / '01_master_keyword_list.csv',
            Path.cwd() / '01_master_keyword_list.csv',
        ]
        for alt_path in alt_paths:
            if alt_path.exists():
                keyword_file = alt_path
                break
    
    if not keyword_file.exists():
        print(f"\n❌ Could not find keyword file: {keyword_file}")
        return
    
    # Load original data
    collector = FreeTierCollector(api_key)
    original_data = collector.load_original_csv(keyword_file)
    
    if not original_data:
        print("❌ Could not load original CSV data")
        return
    
    # Check for existing results (resume functionality) - need original_data first
    existing_results = collector.load_existing_results(script_dir, original_data)
    
    # Get keywords from original data, excluding already processed ones
    all_keywords = list(original_data.keys())
    keywords = [k for k in all_keywords if k not in existing_results]
    
    if existing_results:
        print(f"\n📋 Resume Mode:")
        print(f"   Already processed: {len(existing_results)} keywords")
        print(f"   Remaining to process: {len(keywords)} keywords")
        print(f"   Will continue from keyword #{len(existing_results) + 1}")
        
        # Load existing results into collector
        collector.results = list(existing_results.values())
        collector.processed_count = len(existing_results)
        
        resume = input(f"\nContinue from where you left off? (y/n): ").strip().lower()
        if resume != 'y':
            keywords = all_keywords  # Start from beginning
            collector.results = []
            collector.processed_count = 0
            print("   Starting from beginning...")
    else:
        print(f"\n📋 Starting fresh - no previous results found")
    
    # Ask user how many to process
    remaining_quota = 250 - collector.processed_count
    print(f"\nYou have {len(keywords)} keywords remaining to process.")
    print(f"Already processed: {collector.processed_count} keywords")
    print(f"Remaining monthly quota: {remaining_quota} searches")
    print(f"Recommended: Process 45 keywords per run to stay under hourly limit.")
    
    if remaining_quota <= 0:
        print(f"\n⚠️  Monthly limit reached! You've used all 250 searches.")
        print(f"   Wait until next month or upgrade your plan.")
        return
    
    # Limit to remaining quota
    max_to_process = min(len(keywords), remaining_quota, 45)  # Max 45 per hour
    
    process_all = input(f"\nProcess next {max_to_process} keywords? (y/n): ").strip().lower()
    
    if process_all != 'y':
        max_keywords = input(f"How many keywords to process (max {max_to_process})? ").strip()
        try:
            max_keywords = int(max_keywords)
            keywords = keywords[:min(max_keywords, max_to_process)]
        except:
            keywords = keywords[:max_to_process]
    else:
        keywords = keywords[:max_to_process]
    
    # Process in batches of 45 (stays under 50/hour limit)
    batch_size = 45
    
    print(f"\n🚀 Starting data collection...")
    print(f"   Will process {len(keywords)} keywords in batches of {batch_size}")
    print(f"   Starting from keyword #{collector.processed_count + 1}")
    print(f"   Each batch takes ~2 minutes, then you can run again in 1 hour")
    
    results = collector.process_keywords_batch(keywords, original_data, batch_size)
    
    # Save final results (pass existing_results to preserve them)
    collector.save_final_results(original_data, existing_results)
    
    print("\n" + "=" * 70)
    print("✅ DATA COLLECTION COMPLETE!")
    print("=" * 70)
    print(f"\n📊 Summary:")
    print(f"   Keywords processed: {len(results)}")
    print(f"   API credits used: {collector.processed_count}/250")
    print(f"   Remaining this month: {250 - collector.processed_count}")
    print(f"\n💡 Next steps:")
    print(f"   1. Check the UPDATED CSV file - it matches your original format!")
    print(f"   2. Run the script again - it will AUTOMATICALLY continue from keyword #{collector.processed_count + 1}")
    print(f"   3. No need to specify where to start - it resumes automatically!")
    print(f"   4. Replace your original CSV with the UPDATED one when all keywords are done")


if __name__ == "__main__":
    main()
