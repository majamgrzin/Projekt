'use strict'

const formular = document.getElementById("formular");
const btnUp = document.getElementById("btnUp");
const form = document.querySelector('form');

//Show Formular
const showForm = document.querySelector('.btn');
showForm.addEventListener('click', () => {
  const formular = document.querySelector('#formular');
  formular.classList.add('show-form');
})

//Show Formular
const showForm2 = document.querySelector('.btn-mehr');
showForm2.addEventListener('click', () => {
  const formular2 = document.querySelector('#formular');
  formular2.classList.add('show-form');
})

//Close Formular
const cancelForm = document.querySelector('.btn-cncl');
cancelForm.addEventListener('click', () => {
  const formular = document.querySelector('#formular');
  formular.classList.remove('show-form');
})

//Wenn man 300px runter von den top der Seite skrollt, zeigt sich der Back-up Button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
}

// Wenn wir auf den Button clicken, hüpfen wir auf den Top
function topFunction() {
  document.documentElement.scrollTop = 0;
}

//event remove register/ add Thankyou message
const addEventRegister = (rootElement) => {
  rootElement.addEventListener('click', (e) => {

    let targetElement = e.target;
    if (targetElement.matches('.btn-send')) {
      rootElement.parentElement.parentElement.classList.remove('show-form');

      const form2 = document.querySelector('#formular2');
      form2.style.transform = 'scale(1)';
    }
  }, true);
};
addEventRegister(form, 'click');

//Close Thankyou message
const cancelForm2 = document.querySelector('.btn-cncl2');
cancelForm2.addEventListener('click', () => {
  const formular = document.querySelector('#formular2');
  formular.style.transform = 'scale(0)';
  const formular2 = document.querySelector('#formular');
  formular2.classList.remove('show-form');
});
