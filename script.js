console.log("running scripts")

fetch("https://www.aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KDE")
.then(response => response.json())
.then(data => console.log(data))