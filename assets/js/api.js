const covidStatsCases = document.querySelector('.covid-stats-cases');
const covidStatsDeath = document.querySelector('.covid-stats-death');
const covidStatsRecovered = document.querySelector('.covid-stats-recovered');
const covidStatsTime = document.querySelector('.covid-update-time');
const api = fetch('https://api.covid19api.com/summary');

api.then((data) => {
  data.json().then((obj) => {
    covidStatsCases.innerHTML = new Intl.NumberFormat('en-IN').format(
      obj.Global.TotalConfirmed
    );
    covidStatsDeath.innerHTML = new Intl.NumberFormat('en-IN').format(
      obj.Global.TotalDeaths
    );
    covidStatsRecovered.innerHTML = new Intl.NumberFormat('en-IN').format(
      obj.Global.TotalRecovered
    );
    covidStatsTime.innerHTML = new Date(obj.Date);
  });
});
