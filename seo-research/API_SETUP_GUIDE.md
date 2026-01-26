# API Setup Guide - Real-Time Keyword Data Collection

This guide explains how to set up APIs to get **real search volume and SERP data** instead of estimates.

## Quick Start

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the collector (free tier - Google Trends only):**
   ```bash
   python api_data_collector.py
   ```

3. **For real data, set up at least one paid API below.**

---

## Free APIs (No Cost)

### 1. Google Trends (pytrends) ✅ ENABLED BY DEFAULT
- **Cost:** Free
- **Setup:** No API key needed
- **Data:** Trend scores, relative interest
- **Limitations:** No exact search volume, rate limited
- **Install:** `pip install pytrends`

**Usage:** Already enabled in the script. Provides trend data for keyword interest.

---

## Paid APIs (Require Subscription)

### 2. SerpAPI ⭐ RECOMMENDED
- **Cost:** $50/month (Starter plan - 5,000 searches/month)
- **Setup:** 
  1. Sign up at https://serpapi.com
  2. Get API key from dashboard
  3. Add to `API_CONFIG['serpapi']['api_key']` in script
- **Data:** Real SERP results, competitor rankings, search volume estimates
- **Best for:** SERP analysis, competitor research

### 3. DataForSEO ⭐ BEST VALUE
- **Cost:** $99/month (Basic plan)
- **Setup:**
  1. Sign up at https://dataforseo.com
  2. Get login credentials
  3. Add to `API_CONFIG['dataforseo']['login']` and `['password']`
- **Data:** Real Google Ads keyword data, search volume, CPC, competition
- **Best for:** Accurate search volume data

### 4. Semrush API
- **Cost:** Requires Semrush subscription ($119+/month)
- **Setup:**
  1. Have active Semrush account
  2. Get API key from Semrush dashboard
  3. Add to `API_CONFIG['semrush']['api_key']`
- **Data:** Search volume, keyword difficulty, CPC, competition
- **Best for:** Comprehensive keyword research

### 5. Moz API
- **Cost:** Requires Moz Pro subscription ($99+/month)
- **Setup:**
  1. Have active Moz account
  2. Get Access ID and Secret Key from Moz dashboard
  3. Add to `API_CONFIG['moz']['access_id']` and `['secret_key']`
- **Data:** Keyword difficulty, search volume, domain authority
- **Best for:** Keyword difficulty scores

### 6. Google Keyword Planner API
- **Cost:** Free (requires Google Ads account)
- **Setup:**
  1. Create Google Ads account (free)
  2. Set up OAuth2 credentials
  3. Add credentials to script
- **Data:** Official Google search volume data
- **Best for:** Most accurate search volume (from Google itself)

---

## Recommended Setup (Budget Options)

### Option 1: Minimum Budget ($50/month)
- **SerpAPI Starter** - Get SERP data and competitor rankings
- Use Google Trends (free) for trend data
- **Total:** $50/month

### Option 2: Best Value ($99/month)
- **DataForSEO Basic** - Get real Google Ads keyword data
- Use Google Trends (free) for trends
- **Total:** $99/month

### Option 3: Comprehensive ($200+/month)
- **DataForSEO** + **SerpAPI** - Complete coverage
- **Total:** ~$150/month

### Option 4: Professional ($300+/month)
- **Semrush** + **SerpAPI** - Industry standard tools
- **Total:** ~$170/month

---

## How to Enable APIs

1. **Edit `api_data_collector.py`**
2. **Find `API_CONFIG` section**
3. **Set `'enabled': True` for APIs you have**
4. **Add your API keys/credentials**
5. **Run the script**

Example:
```python
'serpapi': {
    'enabled': True,  # Change to True
    'api_key': 'your_serpapi_key_here',  # Add your key
    'rate_limit': 1
}
```

---

## Running the Script

### Basic (Free - Google Trends only):
```bash
python api_data_collector.py
```

### With Paid APIs:
1. Set up at least one paid API (see above)
2. Add credentials to script
3. Run: `python api_data_collector.py`

### Output:
- Creates `real_data_YYYYMMDD_HHMMSS.csv` with actual data
- Merges results from all enabled APIs
- Prioritizes most reliable sources

---

## Data Quality Priority

The script prioritizes data sources in this order:
1. **Semrush** (most comprehensive)
2. **DataForSEO** (most accurate volume)
3. **SerpAPI** (best SERP data)
4. **Google Trends** (trends only, no volume)

---

## Troubleshooting

### "pytrends not installed"
```bash
pip install pytrends
```

### "429 Too Many Requests"
- You're hitting rate limits
- Add delays between requests
- Reduce batch sizes

### "Invalid API key"
- Check your API key is correct
- Verify your subscription is active
- Check API key permissions

### No results from paid API
- Verify API key is added correctly
- Check account has available credits
- Review API documentation for requirements

---

## Next Steps

1. **Choose your API(s)** based on budget
2. **Sign up and get API keys**
3. **Add keys to script**
4. **Run data collection**
5. **Update your keyword spreadsheets with real data**

---

## Support

If you need help:
- Check API provider documentation
- Review error messages in script output
- Verify API keys are correct
- Check account subscription status

