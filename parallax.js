const sections = document.querySelectorAll('section')
const bodyTag = document.querySelector('body')

const addMovement = function(){
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    //how far aware is section from visible area of page
    const distanceToSection = midViewport - midSection

    //pick tags to parallax

    const imageTag = section.querySelector('img')
    const contentTag = section.querySelector('div')

    //weigh down distance

    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2

    //rotate opposite way for even sections
    if (index % 2 != 0){
      rotation = rotation * -1
    }


    //apply parallax
    imageTag.style.transform = `rotate(${rotation}deg)`
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1*rotation}deg)`

    //change background color
    if(distanceToSection > -100){
      const dataBackground = section.getAttribute('data-background')
      bodyTag.style.backgroundColor = dataBackground
    }
  })
}

addMovement()

document.addEventListener('scroll', function(){
  addMovement()
})

window.addEventListener('resize', function(){
  addMovement()
})

sections[1]
