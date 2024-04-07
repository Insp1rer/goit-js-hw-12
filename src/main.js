//-------------------------------------------IMPORTS-------------------------------------------\\

import { getImages } from './js/pixabay-api';
import { render } from './js/render-functions';
import {
  refs,
  showLoadMoreButton,
  hideLoadMoreButton,
  showLoader,
  hideLoader,
  smoothScroll,
} from './js/misc';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

//---------------------------------------------------------------------------------------------\\

let imagesLimitPerPage = 12;
let currentPage = 0;
// let overallPages = 0;
let userInput;

hideLoader();

refs.form.addEventListener('submit', handleImageSearch);
refs.loaderButton.addEventListener('click', handleLoadMore);

//-----------------------------------------------------------------------------------------------\\

async function handleImageSearch(e) {
  e.preventDefault();
  currentPage = 1;
  refs.gallery.innerHTML = '';
  showLoader();
  userInput = e.currentTarget.elements.searchImg.value.trim();

  if (userInput.length === 0) {
    iziToast.warning({
      position: 'topRight',
      message: 'Пусте поле, генеруємо випадкові зображення...',
    });
    hideLoader();
    hideLoadMoreButton();
    //return;
  }

  e.currentTarget.reset();

  //------------------------------------------------------------------------------------------\\

  try {
    const imagedata = await getImages(
      userInput,
      imagesLimitPerPage,
      currentPage
    );

    if (!imagedata.data.hits.length) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'По вашому запиту нічого не знайдено',
      });
      hideLoader();
      hideLoadMoreButton();
      //return;
    }
    render(imagedata.data.hits);
    //overallPages = Math.ceil(imagedata.totalHits / imagesLimitPerPage);
    hideLoader();
    if (imagedata.data.hits.length < imagesLimitPerPage) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Невідома помилка',
    });
  }
}

//------------------------------------------------------------------------------------------\\

async function handleLoadMore() {
  currentPage += 1;
  showLoader();
  try {
    const imagedata = await getImages(
      userInput,
      imagesLimitPerPage,
      currentPage
    );
    render(imagedata.data.hits);
    //overallPages = Math.ceil(imagedata.totalHits / imagesLimitPerPage);
    hideLoader();
    smoothScroll();
    if (imagedata.data.hits.length < imagesLimitPerPage) {
      hideLoadMoreButton();
      iziToast.warning({
        position: 'topRight',
        message: 'Кінець колекції зображень',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Невідома помилка',
    });
  }
}
