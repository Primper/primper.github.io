function scroll_l()
{
    var left = document.querySelector(".projects_right_scrollblock_scroll");
    left.scrollBy(-350, 0)
}

function scroll_r()
{
    var right = document.querySelector(".projects_right_scrollblock_scroll");
    right.scrollBy(350, 0)
}

function toggleMobileMenu(menu)
{
    menu.classList.toggle('open');
}