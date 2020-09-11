// ========registration of service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('Service worker registered.', reg.scope)
      }, (err) => {
        console.log('Service worker registration failed:', err)
      })
  })
}
// ===== The date that is placed at the footer =====
const date = new Date()
const cYear = date.getFullYear()
document.querySelector('.year').innerHTML = cYear

//  the api key
const api = {
  key: 'faf89cd0be99a684d9fe16932eb2d34b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

const searchBtn = document.querySelector('.btn').addEventListener('click', () => {
  const search = document.querySelector('#inputSearch')
  if (search.value.length === 0) {
    alert('Input a city!!! :)')
    return false
  } else {
    getRecord(search.value)
  }
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
  const wind = document.querySelector('.wind').innerHTML = `${Math.round(weather.main.temp)}<span>m/s</span>`
  const humidity = document.querySelector('.humidity').innerHTML = `${Math.round(weather.main.humidity)}<span>%</span>`
  const pressure = document.querySelector('.pressure').innerHTML = `${Math.round(weather.main.pressure)}<span>&#176;C</span>`
  const weatherDescription = document.querySelector('.weatherEl').innerHTML = weather.weather[0].main
}
