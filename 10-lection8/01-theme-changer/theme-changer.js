const changer1 = document.getElementById('theme-changer-1');
const changer2 = document.getElementById('theme-changer-2');
const html = document.documentElement;

let dark_theme_state = () => {
    html.toggleAttribute('data-theme-dark');
   console.log("1111"); 
}
changer1.addEventListener('change', dark_theme_state );
changer2.addEventListener('change', dark_theme_state );
