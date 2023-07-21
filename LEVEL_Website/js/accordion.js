const accordion_section2 = document.getElementsByClassName("section2__accordion__block_head");

for (i=0; i<accordion_section2.length; i++){
    accordion_section2[i].addEventListener('click', function()
    {
        this.classList.toggle('active')
    })
}

const accordion_section5 = document.getElementsByClassName("section5__accordion__block_head");

for (i=0; i<accordion_section5.length; i++){
    accordion_section5[i].addEventListener('click', function()
    {
        this.classList.toggle('active')
    })
}