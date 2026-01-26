"""
Extract the 66 keywords data from your terminal output
Paste the terminal output (lines 211-407) and this will extract the data
"""

import csv
import re
import sys
from pathlib import Path
from datetime import datetime

# Fix Windows encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Data extracted from your terminal output
terminal_data = """
[1/66] water drop hammer mill Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[2/66] aquatic feed extruder Dubai
   ✓ Volume: 14 | Competition: Low | Priority: 8

[3/66] complete feed mill Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[4/66] complete feed mill UAE
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[5/66] turnkey feed plant Dubai
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[6/66] turnkey feed plant UAE
   ✓ Volume: 52 | Competition: Medium | Priority: 23

[7/66] feed production line Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[8/66] feed production line UAE
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[9/66] animal feed production line Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[10/66] animal feed production line UAE
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[11/66] water treatment plant Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[12/66] RO plant Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[13/66] RO plant UAE
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[14/66] water treatment plant supplier UAE
   ✓ Volume: 140 | Competition: Medium | Priority: 63

[15/66] RO plant supplier Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[16/66] water treatment plant price UAE
   ✓ Volume: 140 | Competition: Medium | Priority: 70

[17/66] labeling machine Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[18/66] labeling machine UAE
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[19/66] BOPP labeling machine Dubai
   ✓ Volume: 14 | Competition: Medium | Priority: 6

[20/66] BOPP labeling machine UAE
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[21/66] rotary filling machine Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[22/66] rotary filling machine UAE
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[23/66] piston filling machine Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[24/66] PET blowing machine Dubai
   ✓ Volume: 140 | Competition: High | Priority: 42

[25/66] stainless steel tanks Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[26/66] stainless steel tanks UAE
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[27/66] mixing tank Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[28/66] mixing tank UAE
   ✓ Volume: 52 | Competition: Medium | Priority: 23

[29/66] blending vessel Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[30/66] storage tank Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[31/66] poultry feed pellet mill Dubai
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[32/66] fish feed pellet mill Dubai
   ✓ Volume: 35 | Competition: Low | Priority: 21

[33/66] fish feed plant Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[34/66] fish feed plant UAE
   ✓ Volume: 140 | Competition: Medium | Priority: 63

[35/66] shrimp feed line Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[36/66] steam boiler Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[37/66] steam boiler UAE
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[38/66] homogenizer Dubai
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[39/66] pasteurizer Dubai
   ✓ Volume: 14 | Competition: Medium | Priority: 6

[40/66] water treatment plant Saudi Arabia
   ✓ Volume: 250 | Competition: Medium | Priority: 112

[41/66] RO plant Riyadh
   ✓ Volume: 37 | Competition: Medium | Priority: 16

[42/66] stainless steel tanks Saudi Arabia
   ✓ Volume: 50 | Competition: Medium | Priority: 22

[43/66] stainless steel tanks Riyadh
   ✓ Volume: 25 | Competition: Medium | Priority: 11

[44/66] feed production line Saudi Arabia
   ✓ Volume: 250 | Competition: Medium | Priority: 112

[45/66] feed production line Riyadh
   ✓ Volume: 50 | Competition: Medium | Priority: 22

[46/66] automatic pellet mill Dubai
   ✓ Volume: 14 | Competition: Low | Priority: 8

[47/66] small scale pellet mill Dubai
   ✓ Volume: 35 | Competition: Low | Priority: 21

[48/66] industrial pellet mill Dubai
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[49/66] extruder supplier Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[50/66] 1 ton per hour feed mill UAE
   ✓ Volume: 52 | Competition: Low | Priority: 31

[51/66] 5 ton per hour feed mill UAE
   ✓ Volume: 35 | Competition: Low | Priority: 21

[52/66] poultry feed line Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[53/66] industrial RO plant Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[54/66] water purification system Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[55/66] labeling machine supplier UAE
   ✓ Volume: 140 | Competition: High | Priority: 42

[56/66] rotary filling machine supplier UAE
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[57/66] piston filling machine supplier UAE
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[58/66] stainless steel tank supplier Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157

[59/66] stainless steel tank manufacturer UAE
   ✓ Volume: 70 | Competition: High | Priority: 21

[60/66] fermentation tank Dubai
   ✓ Volume: 21 | Competition: Medium | Priority: 9

[61/66] feed cooler supplier Dubai
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[62/66] complete feed mill installation Dubai
   ✓ Volume: 140 | Competition: Medium | Priority: 63

[63/66] feed mill setup Dubai
   ✓ Volume: 35 | Competition: Medium | Priority: 15

[64/66] complete RO plant installation UAE
   ✓ Volume: 70 | Competition: Medium | Priority: 31

[65/66] automatic labeling machine Dubai
   ✓ Volume: 140 | Competition: Medium | Priority: 63

[66/66] feed production line supplier Dubai
   ✓ Volume: 350 | Competition: Medium | Priority: 157
"""

def extract_data():
    """Extract keyword data from terminal output"""
    script_dir = Path(__file__).parent
    
    # Load original data to get Product Category and Product
    original_file = script_dir / '01_master_keyword_list.csv'
    original_data = {}
    if original_file.exists():
        with open(original_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                keyword = row.get('Keyword', '').strip()
                if keyword:
                    original_data[keyword] = row
    
    # Parse terminal output
    pattern = r'\[(\d+)/66\]\s+(.+?)\s*\n\s+✓\s+Volume:\s+(\d+)\s+\|\s+Competition:\s+(\w+)\s+\|\s+Priority:\s+(\d+)'
    matches = re.findall(pattern, terminal_data)
    
    results = []
    for match in matches:
        num, keyword, volume, competition, priority = match
        keyword = keyword.strip()
        
        # Get intent and geo from keyword
        intent = "Transactional" if any(w in keyword.lower() for w in ['price', 'cost']) else ("Commercial" if any(w in keyword.lower() for w in ['supplier', 'manufacturer']) else "Commercial")
        geo = "UAE" if "UAE" in keyword else ("Dubai" if "Dubai" in keyword else ("Saudi Arabia" if "Saudi" in keyword or "Riyadh" in keyword else "Global"))
        
        # Estimate ranking difficulty
        if competition == "Low":
            difficulty = "2-4 months"
        elif competition == "Medium":
            difficulty = "4-6 months" if int(volume) > 100 else "3-6 months"
        else:
            difficulty = "9-12 months" if int(volume) > 100 else "6-9 months"
        
        # Merge with original data if available
        if keyword in original_data:
            row = original_data[keyword].copy()
            row['Search Volume (Est.)'] = int(volume)
            row['Competition'] = competition
            row['Intent'] = intent
            row['Geographic Focus'] = geo
            row['Priority Score'] = int(priority)
            row['Ranking Difficulty (Months)'] = difficulty
        else:
            row = {
                'Product Category': '',
                'Product': '',
                'Keyword': keyword,
                'Search Volume (Est.)': int(volume),
                'Competition': competition,
                'Intent': intent,
                'Geographic Focus': geo,
                'Priority Score': int(priority),
                'Ranking Difficulty (Months)': difficulty
            }
        
        results.append(row)
    
    # Save
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = script_dir / f'top_100_recovered_{timestamp}.csv'
    
    fieldnames = [
        'Product Category', 'Product', 'Keyword', 'Search Volume (Est.)',
        'Competition', 'Intent', 'Geographic Focus', 'Priority Score',
        'Ranking Difficulty (Months)'
    ]
    
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    
    print(f"SUCCESS: Recovered {len(results)} keywords from terminal output!")
    print(f"Saved to: {filename}")
    print(f"\nThis data is extracted from your terminal output.")
    print(f"The script is now fixed - future runs will save correctly!")

if __name__ == "__main__":
    extract_data()

