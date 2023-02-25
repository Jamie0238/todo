const APP_ID = '667f394bea23d50c2b2de1491c6ac52f'
const weather = document.querySelector('.weather')

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
  fetch(url)
    .then(res => res.json())
    .then(function (data) {
      const name = data.name
      const temp = data.main.temp
      weather.innerText = `${temp}℃ ${name}`
    })
}

function saveCoord(coords) {
  localStorage.setItem('coords', JSON.stringify(coords))
} //위치 수집을 스토리지에 저장함

function geoSucces(position) {
  console.log(position)

  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log(lat, lon)

  const coords = {
    latitude: lat,
    longitude: lon,
  }

  saveCoord(coords)
  getWeather(lat, lon)
}

function geoError() {
  console.log('위치정보를 허용하지 않았습니다.')
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function loadCoords() {
  const localCoords = localStorage.getItem('coords')
  console.log(localCoords)

  if (localCoords === null) {
    askCoords()
  } else {
    const parsedCoords = JSON.parse(localCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
