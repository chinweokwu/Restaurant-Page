class Navbar {
  static createNav(header) {

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const link1 = document.createElement("li");
    const anchor1 = document.createElement("a");
    anchor1.setAttribute('href', "#home");
    anchor1.setAttribute('id', "home");
    anchor1.innerHTML = "Home"
    link1.appendChild(anchor1);

    const link2 = document.createElement("li");
    const anchor2 = document.createElement("a");
    anchor2.setAttribute('href', "#menu");
    anchor2.setAttribute('id', "menu");
    anchor2.innerHTML = "Menu"
    link2.appendChild(anchor2);

    const link3 = document.createElement("li");
    const anchor3 = document.createElement("a");
    anchor3.setAttribute('href', "#contact");
    anchor3.setAttribute('id', "contact");
    anchor3.innerHTML = "Contact"
    link3.appendChild(anchor3);

    ul.append(link1, link2, link3);
    nav.appendChild(ul);
    header.appendChild(nav);


  }
}

export { Navbar }