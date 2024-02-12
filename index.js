const header= document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 100)
});

let menu= document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}


menu.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

let more = document.querySelectorAll('.more');
for (let i=0; i<more.length; i++){
  more[i].addEventListener('click',function(){ more[i].parentNode.classList.toggle('active')})
}