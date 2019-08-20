var english = document.getElementById('en_click'),
    russian = document.getElementById('ru_click'),
    en_txt = document.querySelectorAll('#en'),
    ru_txt = document.querySelectorAll('#ru'),
    nb_en = en_txt.length;
    nb_ru = ru_txt.length,

    english.addEventListener('click', function() 
    {
        language(english, russian);
    }, false);
    
    russian.addEventListener('click', function() 
    {
        language(russian,english);
    }, false);
    
function language(languageOn,languageOff)
{
    if (!languageOn.classList.contains('current_lang')) 
    {
        languageOn.classList.toggle('current_lang');
        languageOff.classList.toggle('current_lang');
    }

    if (languageOn.innerHTML == 'Русский')
    {
        display(ru_txt, nb_ru);
        hide(en_txt, nb_en);
    }

    else if (languageOn.innerHTML == 'English')
    {
        display(en_txt, nb_en);
        hide(ru_txt, nb_ru);
    }
}

function display(txt,nb)
{
    for(var i=0; i < nb; i++)
    {
        txt[i].style.display = 'block';
    }
}
function hide(txt,nb)
{
    for(var i=0; i < nb; i++)
    {
        txt[i].style.display = 'none';
    }
}
function init()
{
    language(english, russian);
}
init();