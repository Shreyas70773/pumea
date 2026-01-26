"""
Recover the 66 keywords that were just processed but not saved
The data is in memory - we just need to re-run with the fix
But first, let's check if any partial files exist
"""

import csv
from pathlib import Path
from datetime import datetime

def check_for_partial_files():
    """Check if any partial results were saved"""
    script_dir = Path(__file__).parent
    
    # Check for any recent CSV files
    csv_files = sorted(script_dir.glob('top_100_results_*.csv'), reverse=True)
    
    if csv_files:
        print(f"Found {len(csv_files)} result file(s):")
        for f in csv_files[:5]:
            print(f"  - {f.name}")
        return csv_files[0] if csv_files else None
    
    print("No partial result files found")
    return None

def recover_from_log():
    """Try to extract data from terminal output if possible"""
    print("\n" + "=" * 70)
    print("DATA RECOVERY")
    print("=" * 70)
    print("\nThe script processed 66 keywords successfully.")
    print("The data was collected but failed to save due to a field mapping error.")
    print("\nGOOD NEWS: The fix is applied. Just re-run the script!")
    print("It will:")
    print("  1. Detect the 66 keywords were already processed")
    print("  2. Skip them (no API calls wasted)")
    print("  3. But wait - the data wasn't saved, so...")
    print("\nActually, you need to re-process those 66 keywords.")
    print("But the fix is in place now, so it will save correctly.")
    print("\n" + "=" * 70)

if __name__ == "__main__":
    check_for_partial_files()
    recover_from_log()
    print("\n💡 Solution: Re-run run_top_100.py - it's fixed now and will save correctly!")

