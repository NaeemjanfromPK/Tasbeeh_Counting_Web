let counterEl = document.getElementById("counter")
let Savebtn = document.getElementById("preValue")
let count = 0


function increament(){
  count += 1
  counterEl.textContent = count
}
function save(){
  let saveStr = count + " - "
  Savebtn.textContent += saveStr
  counterEl.textContent = 0
  count = 0
}

function resetPage(){
  window.location.reload()
}