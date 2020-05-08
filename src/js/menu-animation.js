const menuElt = document.getElementsByClassName('hidden-side')[0];
const openMenuLink = document.getElementsByClassName('menu-link')[0];
const closeMenuLink = document.getElementsByClassName('hidden-side__close')[0];

openMenuLink.addEventListener('click', openOrDeleteMenu);
closeMenuLink.addEventListener('click', openOrDeleteMenu);

function openOrDeleteMenu() {
    menuElt.classList.toggle('not-working');
}