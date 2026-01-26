@echo off
echo ======================================================================
echo Continuing keyword data collection...
echo ======================================================================
echo.
echo Make sure you've set your API key:
echo   set SERPAPI_KEY=your_api_key_here
echo.
echo Or the script will prompt you for it.
echo.
pause
python seo-research\api_data_collector_free.py
pause

