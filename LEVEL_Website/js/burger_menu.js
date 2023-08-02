const burger_icon = document.getElementById('burger__menu_ID');
const burger_menu = document.getElementById('menu');
const body = document.getElementById('body_id');
const accordion_burger = document.getElementById("header__accordion__block_head_ID");
burger_icon.onclick = function(){
    burger_icon.classList.toggle('active');
    burger_icon.classList.toggle('fixed-position');
    burger_menu.classList.toggle('active');
    // body.classList.toggle('active');
    accordion_burger.classList.toggle('active');
}