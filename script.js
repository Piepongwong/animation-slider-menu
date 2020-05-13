let $menu = document.querySelector(".menu");
let $hamburger = document.querySelector("#hamburger");

$hamburger.addEventListener("click", function(){
    $menu.classList.toggle("slide-in");
    $menu.classList.toggle("slide-out");
    $hamburger.classList.toggle("transition-hamburger");
})