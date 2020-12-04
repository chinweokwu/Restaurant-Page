/* eslint-disable  no-undef, no-plusplus, camelcase, no-restricted-syntax, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
class DisplayContactPage {
  static contactpage(content) {
    const signupSection = document.createElement('div');
    signupSection.setAttribute('class', 'signupSection');
    const info = document.createElement('div');
    info.setAttribute('class', 'info');
    const infoh2 = document.createElement('h2');
    infoh2.innerHTML = 'Enjoy our special teasty food';
    const infoimg = document.createElement('img');
    infoimg.setAttribute('src', '../assets/food1.jpg');
    const infop = document.createElement('p');
    infop.innerHTML = 'food Is Always Ready Here';
    info.append(infoh2, infoimg, infop);

    const contactform = document.createElement('form');
    contactform.setAttribute('class', 'signupForm');

    const formh2 = document.createElement('h2');
    formh2.innerHTML = 'Sign Up';

    const formul = document.createElement('ul');
    formul.setAttribute('class', 'noBullet');
    const formli1 = document.createElement('li');
    const forminput1 = document.createElement('input');
    forminput1.setAttribute('type', 'text');
    forminput1.setAttribute('class', 'inputFields');
    forminput1.setAttribute('placeholder', 'name');
    forminput1.setAttribute('required', 'required');
    formli1.appendChild(forminput1);

    const formli2 = document.createElement('li');
    const forminput2 = document.createElement('input');
    forminput2.setAttribute('type', 'email');
    forminput2.setAttribute('class', 'inputFields');
    forminput2.setAttribute('placeholder', 'email');
    forminput2.setAttribute('required', 'required');
    formli2.appendChild(forminput2);

    const formli3 = document.createElement('li');
    const textarea = document.createElement('textarea');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '5');
    textarea.setAttribute('class', 'textFields');
    textarea.setAttribute('placeholder', 'Write Message');
    formli3.appendChild(textarea);

    formul.append(formli1, formli2, formli3);

    const formsubmit = document.createElement('input');
    formsubmit.setAttribute('class', 'join-btn');
    formsubmit.setAttribute('type', 'submit');

    contactform.append(formh2, formul, formsubmit);

    signupSection.append(info, contactform);
    content.appendChild(signupSection);
  }
}

export { DisplayContactPage };