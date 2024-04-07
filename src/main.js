//-------------------------------------------IMPORTS-------------------------------------------\\

import { getImages } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//-------------------------------------------CONST&LISTENER-------------------------------------------\\

const form = document.querySelector('.overall-form');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', handleImageSearch);

//-------------------------------------------LOADER+INPUTCHECK-------------------------------------------\\

function handleImageSearch(e) {
  e.preventDefault();

  gallery.innerHTML = `<div class="loader"></div>`;

  const loader = document.querySelector('.loader');
  const userInput = e.currentTarget.elements.searchImg.value.trim();

  if (userInput.length === 0) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Пусте поле!',
    });
    loader.classList.remove('loader');
    return;
  }

  e.currentTarget.reset();

  //-------------------------------------------GET-------------------------------------------\\
  //Додав таймаут тому що з 'затримкою' loader виглядає гарніше

  setTimeout(() => {
    getImages(userInput)
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: 'По вашому запиту нічого не знайдено',
          });
          loader.classList.remove('loader');
        } else {
          render(data.hits);
        }
      })
      .catch(() => {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: 'Невідома помилка',
        });
      });
  }, 1700);
}

//--------------------------------------------------------------------------------------------\\
