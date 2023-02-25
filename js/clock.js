const clock = document.querySelector('.clock')

function getTime() {
  const now = new Date()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()

  const h = `${sec < 10 ? `0${hour}` : `${hour}`}`
  const m = `${sec < 10 ? `0${min}` : `${min}`}`
  const s = `${sec < 10 ? `0${sec}` : `${sec}`}`

  clock.innerHTML = `${h}:${m}:${s}`
}

function init() {
  getTime()
  setInterval(getTime, 500)
}

init()
