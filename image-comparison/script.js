const slider=document.querySelector(".slider")
const container=document.querySelector(".container")
const before=document.querySelector(".img-container-after")
const after=document.querySelector(".img-container-before")

const dragslider = (e) =>{
  let x = e.layerX
  let size = container.offsetWidth

  before.style.width = x + "px"
  slider.style.left = x + "px"

  if(x < 30){
    before.style.width = 0
    slider.style.left = 0
  }

  if(x + 30 > size){
    befoe.style.width = size + 30
    slider.style.left = size + 30
  }
}
container.addEventListener("mousemove", dragslider)
