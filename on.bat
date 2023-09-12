:: on.bat
:::::::::::::::::::::
:: Activate venv and turn on Flask server

@echo off

echo !!! Starting Environment !!!

set serverFile=app
set portNumber=3030

call .\venv\Scripts\activate
python .\source\%serverFile%.py 3030