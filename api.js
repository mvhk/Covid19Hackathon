const covidStatsCases = document.querySelector('.covid-stats-cases')
const covidStatsDeath = document.querySelector('.covid-stats-death')
const covidStatsRecovered = document.querySelector('.covid-stats-recovered')

const api = fetch('https://api.covid19api.com/summary')

api.then((data) => {
    data.json().then((obj) => {
        covidStatsCases.innerHTML = obj.Global.TotalConfirmed
        covidStatsDeath.innerHTML = obj.Global.TotalDeaths
        covidStatsRecovered.innerHTML = obj.Global.TotalRecovered
    })
})
