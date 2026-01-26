"""
Quick test script to demonstrate real data collection
Tests Google Trends API (free) with a few sample keywords
"""

from pytrends.request import TrendReq
import pandas as pd
import time
from pathlib import Path

# Test keywords
test_keywords = [
    'pellet mill UAE',
    'hammer mill Dubai', 
    'water treatment plant UAE',
    'stainless steel tanks Dubai',
    'feed production line UAE'
]

print("Testing Real Data Collection...")
print("=" * 60)

pytrends = TrendReq(hl='en-US', tz=360)

results = []

for keyword in test_keywords:
    try:
        print(f"\nFetching data for: {keyword}")
        pytrends.build_payload([keyword], cat=0, timeframe='today 12-m', geo='AE')
        data = pytrends.interest_over_time()
        
        if not data.empty:
            avg_interest = data[keyword].mean()
            max_interest = data[keyword].max()
            min_interest = data[keyword].min()
            
            results.append({
                'Keyword': keyword,
                'Avg Interest (0-100)': round(avg_interest, 2),
                'Max Interest': round(max_interest, 2),
                'Min Interest': round(min_interest, 2),
                'Trending': 'Yes' if max_interest > 50 else 'No'
            })
            
            print(f"  ✓ Average Interest: {avg_interest:.2f}")
            print(f"  ✓ Max Interest: {max_interest:.2f}")
        else:
            print(f"  ✗ No data available")
            results.append({
                'Keyword': keyword,
                'Avg Interest (0-100)': 'N/A',
                'Max Interest': 'N/A',
                'Min Interest': 'N/A',
                'Trending': 'N/A'
            })
        
        time.sleep(1)  # Rate limit
        
    except Exception as e:
        print(f"  ✗ Error: {e}")
        continue

print("\n" + "=" * 60)
print("RESULTS SUMMARY")
print("=" * 60)

df = pd.DataFrame(results)
print(df.to_string(index=False))

# Save to CSV - use script directory
script_dir = Path(__file__).parent
output_file = script_dir / 'test_real_data_results.csv'
df.to_csv(output_file, index=False)
print(f"\n✓ Saved results to: {output_file}")
print("\nNote: Google Trends provides relative interest (0-100), not exact search volume.")
print("For exact search volume, you need paid APIs (SerpAPI, DataForSEO, Semrush).")

