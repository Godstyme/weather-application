// ===== The date that is place at the footer =====
const date = new Date()
const cYear = date.getFullYear()
document.querySelector('.year').innerHTML = cYear

//  the api key
const api = {
  key: 'faf89cd0be99a684d9fe16932eb2d34b',
  baseUrl: 'http://api.openweathermap.org/data/2.5/'
}

const searchBtn = document.querySelector('.btn').addEventListener('click', function () {
  const search = document.querySelector('#inputSearch')
  getRecord(search.value)
})

const getRecord = (qry) => {
  fetch(`${api.baseUrl}weather?q=${qry}&APPID=${api.key}&units=metric`)
    .then(weather => {
      return weather.json()
    }).then(displayRecord)
}

const displayRecord = (weather) => {
  console.log(weather)
  const city = document.querySelector('.city').innerHTML = `${weather.name}`
  const country = document.querySelector('.country').innerHTML = `${weather.sys.country}`
  const temp = document.querySelector('.temp').innerHTML = `${Math.round(weather.main.temp)}<span>&#176;C</span>`
  const weatherDescription = document.querySelector('.weatherEl').innerHTML = weather.weather[0].main
  // const iconEL = document.querySelector('.date').innerHTML = weather.weather[1].description
}
