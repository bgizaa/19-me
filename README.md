

**<h1>19 & me**💉</h1>

An app to track covid stats! The app fetches the stats from an external api and calculates the death rate, positivity rate and vaccinate rate and transforms the data object into the endpoints below; 
<br>

- **GET /death-rate/:country**
    ```json
        {
        "cumulativeDeaths": 1318,
        "cumulativeCovidCases": 99325,
        "deathRate": "1.33%"
        }
    ```
- **GET /positivity-rate/:country**
    ```json
        {
        "population": "12,208,407",
        "cumulativeCases": "100,888",
        "positivityRatePerCapita": "0.83%",
        "infectionsPerSqKm": "3.83",
        "infectionsPerAThousandPeople": "8.26",
        "warningLevel": "GREEN"
        }
    ```
- **GET /vaccination-rate/:country**
    ```json
        {
        "population": 12208407,
        "fullyVaccinated": 1718424,
        "vaccinationRate": "14.08%"
        }
    ```
- **GET /all-stats/:country**
    ```json
        {
    "vaccineStats": {
        "population": 12208407,
        "fullyVaccinated": 4182307,
        "vaccinationRate": "34.26%"
        },
    "deathRateStats": {
        "cumulativeDeaths": 1344,
        "cumulativeCovidCases": 100888,
        "mortalityRate": "1.33%"
        },
    "positivityRateStats": {
        "population": "12,208,407",
        "cumulativeCases": "100,888",
        "positivityRatePerCapita": "0.83%",
        "infectionsPerSqKm": "3.83",
        "infectionsPerAThousandPeople": "8.26",
        "warningLevel": "GREEN"
        }
        }
    ```



