/* eslint-disable  no-undef, no-plusplus, camelcase, no-restricted-syntax, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
import{ DisplayHomePage }from'./home';
import{ DisplayMenuPage }from'./menu';
import{ DisplayContactPage }from'./contact';
import{ Navbar }from'./nav';

const header = document.querySelector('header');
Navbar.createNav(header);
const contentdiv = document.getElementById('content');
DisplayHomePage.homepage(contentdiv);

document.getElementById('home').addEventListener('click', ()=>{
    contentdiv.innerHTML = '';
    DisplayHomePage.homepage(content);
});

document.getElementById('menu').addEventListener('click', ()=>{
    contentdiv.innerHTML = '';
    DisplayMenuPage.menupage(content);
});

document.getElementById('contact').addEventListener('click', ()=>{
    contentdiv.innerHTML = '';
    DisplayContactPage.contactpage(content);
});