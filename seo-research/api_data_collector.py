"""
Pacific Unity MEA - Real-Time Keyword Data Collector
Uses multiple APIs with fallback options to get real search volume and SERP data
"""

import json
import csv
import time
import os
import requests
from typing import List, Dict, Optional
from datetime import datetime
from pathlib import Path

# API Configuration (User needs to add their keys)
API_CONFIG = {
    'pytrends': {
        'enabled': True,  # Free - no key needed
        'rate_limit': 1  # seconds between requests
    },
    'serpapi': {
        'enabled': False,  # Requires API key
        'api_key': '',  # Add your SerpAPI key here
        'rate_limit': 1
    },
    'dataforseo': {
        'enabled': False,  # Requires API key
        'login': '',  # Add your DataForSEO login
        'password': '',  # Add your DataForSEO password
        'rate_limit': 1
    },
    'google_keyword_planner': {
        'enabled': False,  # Requires Google Ads account
        'client_id': '',
        'client_secret': '',
        'refresh_token': ''
    },
    'moz': {
        'enabled': False,  # Requires Moz API access
        'access_id': '',
        'secret_key': ''
    },
    'semrush': {
        'enabled': False,  # Requires Semrush API
        'api_key': ''
    }
}

class KeywordDataCollector:
    def __init__(self):
        self.results = []
        self.failed_keywords = []
        
    def collect_from_pytrends(self, keywords: List[str], geo: str = 'AE') -> List[Dict]:
        """Collect data from Google Trends (Free, no API key needed)"""
        try:
            from pytrends.request import TrendReq
            
            pytrends = TrendReq(hl='en-US', tz=360)
            results = []
            
            # Process in batches of 5 (Google Trends limit)
            for i in range(0, len(keywords), 5):
                batch = keywords[i:i+5]
                try:
                    pytrends.build_payload(batch, cat=0, timeframe='today 12-m', geo=geo)
                    data = pytrends.interest_over_time()
                    
                    if not data.empty:
                        for keyword in batch:
                            if keyword in data.columns:
                                avg_interest = data[keyword].mean()
                                max_interest = data[keyword].max()
                                
                                results.append({
                                    'keyword': keyword,
                                    'source': 'Google Trends',
                                    'search_volume_estimate': int(avg_interest * 10),  # Rough estimate multiplier
                                    'trend_score': int(max_interest),
                                    'geo': geo,
                                    'timestamp': datetime.now().isoformat()
                                })
                    
                    time.sleep(API_CONFIG['pytrends']['rate_limit'])
                except Exception as e:
                    print(f"Error processing batch {batch}: {e}")
                    continue
                    
            return results
        except ImportError:
            print("pytrends not installed. Install with: pip install pytrends")
            return []
        except Exception as e:
            print(f"Error with pytrends: {e}")
            return []
    
    def collect_from_serpapi(self, keywords: List[str], location: str = 'Dubai, United Arab Emirates') -> List[Dict]:
        """Collect SERP data from SerpAPI"""
        if not API_CONFIG['serpapi']['enabled'] or not API_CONFIG['serpapi']['api_key']:
            return []
        
        results = []
        api_key = API_CONFIG['serpapi']['api_key']
        
        for keyword in keywords:
            try:
                url = "https://serpapi.com/search.json"
                params = {
                    'q': keyword,
                    'location': location,
                    'api_key': api_key,
                    'num': 10
                }
                
                response = requests.get(url, params=params, timeout=10)
                if response.status_code == 200:
                    data = response.json()
                    
                    # Extract SERP data
                    organic_results = data.get('organic_results', [])
                    total_results = data.get('search_information', {}).get('total_results', 0)
                    
                    results.append({
                        'keyword': keyword,
                        'source': 'SerpAPI',
                        'total_results': total_results,
                        'serp_results_count': len(organic_results),
                        'top_competitors': [r.get('title', '') for r in organic_results[:5]],
                        'location': location,
                        'timestamp': datetime.now().isoformat()
                    })
                
                time.sleep(API_CONFIG['serpapi']['rate_limit'])
            except Exception as e:
                print(f"Error with SerpAPI for {keyword}: {e}")
                self.failed_keywords.append(keyword)
                continue
        
        return results
    
    def collect_from_dataforseo(self, keywords: List[str], location_code: int = 2036) -> List[Dict]:
        """Collect data from DataForSEO API"""
        if not API_CONFIG['dataforseo']['enabled']:
            return []
        
        login = API_CONFIG['dataforseo']['login']
        password = API_CONFIG['dataforseo']['password']
        
        if not login or not password:
            return []
        
        results = []
        base_url = "https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live"
        
        # Process in batches
        for i in range(0, len(keywords), 100):
            batch = keywords[i:i+100]
            
            try:
                payload = [{
                    "keywords": batch,
                    "location_code": location_code,  # UAE
                    "language_code": "en",
                    "sort_by": "search_volume",
                    "date_from": "2024-01-01",
                    "date_to": "2024-12-31"
                }]
                
                response = requests.post(
                    base_url,
                    auth=(login, password),
                    json=payload,
                    headers={'Content-Type': 'application/json'},
                    timeout=30
                )
                
                if response.status_code == 200:
                    data = response.json()
                    if 'tasks' in data and len(data['tasks']) > 0:
                        for task in data['tasks']:
                            if 'result' in task:
                                for item in task['result']:
                                    results.append({
                                        'keyword': item.get('keyword', ''),
                                        'source': 'DataForSEO',
                                        'search_volume': item.get('search_volume', 0),
                                        'competition': item.get('competition', ''),
                                        'cpc': item.get('cpc', 0),
                                        'timestamp': datetime.now().isoformat()
                                    })
                
                time.sleep(API_CONFIG['dataforseo']['rate_limit'])
            except Exception as e:
                print(f"Error with DataForSEO: {e}")
                continue
        
        return results
    
    def collect_from_moz(self, keywords: List[str]) -> List[Dict]:
        """Collect data from Moz API"""
        if not API_CONFIG['moz']['enabled']:
            return []
        
        access_id = API_CONFIG['moz']['access_id']
        secret_key = API_CONFIG['moz']['secret_key']
        
        if not access_id or not secret_key:
            return []
        
        results = []
        base_url = "https://api.moz.com/v1/urlmetrics"
        
        # Note: Moz API works differently - need to query URLs, not keywords directly
        # This is a placeholder structure
        for keyword in keywords:
            try:
                # Moz keyword explorer would need different endpoint
                # This is a simplified example
                pass
            except Exception as e:
                print(f"Error with Moz API: {e}")
                continue
        
        return results
    
    def collect_from_semrush(self, keywords: List[str], database: str = 'us') -> List[Dict]:
        """Collect data from Semrush API"""
        if not API_CONFIG['semrush']['enabled'] or not API_CONFIG['semrush']['api_key']:
            return []
        
        api_key = API_CONFIG['semrush']['api_key']
        results = []
        
        for keyword in keywords:
            try:
                url = "https://api.semrush.com/"
                params = {
                    'key': api_key,
                    'type': 'phrase_this',
                    'phrase': keyword,
                    'database': database,
                    'export_columns': 'Ph,Po,Pp,Pd,Nq,Cp,Ur,Tr,Tc,Co,Nr,Td'
                }
                
                response = requests.get(url, params=params, timeout=10)
                if response.status_code == 200:
                    lines = response.text.strip().split('\n')
                    if len(lines) > 1:
                        # Parse CSV response
                        headers = lines[0].split(';')
                        data = lines[1].split(';')
                        
                        if len(data) >= len(headers):
                            results.append({
                                'keyword': keyword,
                                'source': 'Semrush',
                                'search_volume': int(data[headers.index('Nq')]) if 'Nq' in headers else 0,
                                'cpc': float(data[headers.index('Cp')]) if 'Cp' in headers else 0,
                                'competition': float(data[headers.index('Co')]) if 'Co' in headers else 0,
                                'keyword_difficulty': int(data[headers.index('Kd')]) if 'Kd' in headers else 0,
                                'timestamp': datetime.now().isoformat()
                            })
                
                time.sleep(0.2)  # Semrush rate limit
            except Exception as e:
                print(f"Error with Semrush for {keyword}: {e}")
                continue
        
        return results
    
    def merge_results(self, all_results: List[List[Dict]]) -> List[Dict]:
        """Merge results from multiple sources, prioritizing most reliable"""
        merged = {}
        
        # Priority order: Semrush > DataForSEO > SerpAPI > Google Trends
        priority_sources = ['Semrush', 'DataForSEO', 'SerpAPI', 'Google Trends']
        
        for result_batch in all_results:
            for result in result_batch:
                keyword = result['keyword']
                source = result['source']
                
                if keyword not in merged:
                    merged[keyword] = {}
                
                # Only update if source has higher priority or no data exists
                if source not in merged[keyword] or priority_sources.index(source) < priority_sources.index(merged[keyword].get('primary_source', 'zzz')):
                    merged[keyword].update(result)
                    merged[keyword]['primary_source'] = source
        
        return list(merged.values())
    
    def save_to_csv(self, results: List[Dict], filename: str):
        """Save results to CSV"""
        if not results:
            print("No results to save")
            return
        
        fieldnames = set()
        for result in results:
            fieldnames.update(result.keys())
        
        fieldnames = sorted(list(fieldnames))
        
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(results)
        
        print(f"Saved {len(results)} results to {filename}")


def main():
    """Main execution function"""
    print("=" * 60)
    print("Pacific Unity MEA - Real-Time Keyword Data Collector")
    print("=" * 60)
    
    # Load keywords from existing CSV - use absolute path
    keywords = []
    script_dir = Path(__file__).parent
    keyword_file = script_dir / '01_master_keyword_list.csv'
    
    try:
        if not keyword_file.exists():
            # Try alternative paths
            alt_paths = [
                Path.cwd() / 'seo-research' / '01_master_keyword_list.csv',
                Path.cwd() / '01_master_keyword_list.csv',
            ]
            for alt_path in alt_paths:
                if alt_path.exists():
                    keyword_file = alt_path
                    break
        
        if keyword_file.exists():
            with open(keyword_file, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                keywords = [row['Keyword'] for row in reader]
            print(f"Loaded {len(keywords)} keywords from master list")
        else:
            raise FileNotFoundError(f"Could not find keyword file")
    except Exception as e:
        print(f"Error loading keywords: {e}")
        # Fallback seed keywords
        keywords = [
            'pellet mill UAE', 'hammer mill Dubai', 'water treatment plant UAE',
            'stainless steel tanks Dubai', 'feed production line UAE'
        ]
        print(f"Using {len(keywords)} seed keywords")
    
    collector = KeywordDataCollector()
    all_results = []
    
    # Try each data source
    print("\n1. Collecting from Google Trends (Free)...")
    trends_results = collector.collect_from_pytrends(keywords[:50], geo='AE')  # Limit to 50 for demo
    all_results.append(trends_results)
    print(f"   Collected {len(trends_results)} results")
    
    if API_CONFIG['serpapi']['enabled']:
        print("\n2. Collecting from SerpAPI...")
        serpapi_results = collector.collect_from_serpapi(keywords[:20])  # Limit for demo
        all_results.append(serpapi_results)
        print(f"   Collected {len(serpapi_results)} results")
    
    if API_CONFIG['dataforseo']['enabled']:
        print("\n3. Collecting from DataForSEO...")
        dataforseo_results = collector.collect_from_dataforseo(keywords[:100])
        all_results.append(dataforseo_results)
        print(f"   Collected {len(dataforseo_results)} results")
    
    if API_CONFIG['semrush']['enabled']:
        print("\n4. Collecting from Semrush...")
        semrush_results = collector.collect_from_semrush(keywords[:100])
        all_results.append(semrush_results)
        print(f"   Collected {len(semrush_results)} results")
    
    # Merge and save
    print("\n5. Merging results from all sources...")
    merged_results = collector.merge_results(all_results)
    print(f"   Merged {len(merged_results)} unique keywords")
    
    print("\n6. Saving results...")
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    script_dir = Path(__file__).parent
    output_file = script_dir / f'real_data_{timestamp}.csv'
    collector.save_to_csv(merged_results, str(output_file))
    
    print("\n" + "=" * 60)
    print("Data collection complete!")
    print("=" * 60)
    print(f"\nTo enable paid APIs, edit API_CONFIG in this script and add your API keys.")


if __name__ == "__main__":
    main()

