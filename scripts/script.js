const burger_icon = document.getElementById('burger__menu_ID');
const burger_menu = document.getElementById('menu');
burger_icon.onclick = function(){
    burger_icon.classList.toggle('active');
    burger_menu.classList.toggle('active');
    burger_icon.classList.toggle('fixed-position');
}

document.onclick = function (clickEvent) {
    if (clickEvent.target.id !== "menu" && clickEvent.target.id !== "burger__menu_ID"){
        burger_icon.classList.remove("active");
        burger_menu.classList.remove("active");
    }
}