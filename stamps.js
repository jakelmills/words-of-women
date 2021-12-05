let number = 0
const stamps = [
  "img/circles.svg",
  "img/heart.svg",
  "img/moon.svg",
  "img/rainbow.svg",
  "img/shooting-star.svg",
  "img/waves.svg"
]

const stampsTag = document.querySelector('div.stamps')

const addStamp = function(x, y){
  const img = document.createElement('img')
  img.setAttribute('src', stamps[number])

  const audio = document.createElement('audio')
  audio.setAttribute('src', 'sounds/plop.mp3')
  audio.play()

  //remove half the window width so it's centre
  img.style.left = (x - window.innerWidth / 2) + 'px'
  img.style.top = y + 'px'

  stampsTag.appendChild(img)

  if (number < stamps.length - 1){
    number ++
  } else {
    number = 0
  }
}

document.addEventListener('click', function(event){
  addStamp(event.pageX, event.pageY)
})
