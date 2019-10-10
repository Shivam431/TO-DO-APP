let ourform=document.getElementById("ourForm")
let id=document.getElementById("field")
let ourlist=document.getElementById("list")
ourform.addEventListener("submit",function (e){
  e.preventDefault()
  createItem(id.value)
 //alert("Thanks for CLicking")
})
function createItem(x){
  let ourHTML=` <li>${x}<button onclick="deleteitem(this)">Delete</button></li>`
  ourlist.insertAdjacentHTML("beforeend",ourHTML) 
  ourlist.value=""
  ourlist.focus()
}
function deleteitem(element){
  element.parentElement.remove()
}
