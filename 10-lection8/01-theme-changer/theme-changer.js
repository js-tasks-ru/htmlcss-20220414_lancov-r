
const html = document.documentElement;

const themeChangers = [
    document.getElementById('theme-changer-1'),
    document.getElementById('theme-changer-2')
]; 

function addThemeChangeListners(){
    themeChangers.forEach(element => {
        element.addEventListener('change', (el) => {
            if(el.target.checked){
                html.setAttribute('data-theme-dark',undefined);
                themeChangers.forEach(themeChanger => themeChanger.checked = true)
            }
            else{
                html.removeAttribute('data-theme-dark',undefined);
                themeChangers.forEach(themeChanger => themeChanger.checked = false)
            } ;
        }); 
})}

addThemeChangeListners(themeChangers); 