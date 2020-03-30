const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) // Function with checked theme (dark or light)
{
    if (e.target.checked) 
    {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    else 
    {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) // Fucntion with switch theme
{
    if (e.target.checked) 
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }

    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // Save info about current theme

if (currentTheme)
{
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') 
    {
        toggleSwitch.checked = true;
    }
}
