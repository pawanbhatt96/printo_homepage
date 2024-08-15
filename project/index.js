const lst = document.getElementById("last")
const slide= document.getElementsByClassName("slide")
const img= document.getElementsByClassName("slideimg")
const left= document.getElementById("leftbar");
const rightbar= document.getElementById("rightbar")
left.addEventListener("click",function(){
     left.style.marginLeft= "-20%"
})
rightbar.addEventListener("click",function(){
     window.location.reload();
})
