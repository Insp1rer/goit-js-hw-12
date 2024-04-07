//-------------------------------------------IMPORTS-------------------------------------------\\

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//-------------------------------------------MARKUP-------------------------------------------\\

const gallery = document.querySelector('.gallery');

export function render(arrOfImages) {
  const renderImages = arrOfImages
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="open-large-image" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p>Likes</p>
              <span class="info-item-details">${likes}</span>
            </li>
            <li class="info-item">
              <p>Views</p>
              <span class="info-item-details">${views}</span>
            </li>
            <li class="info-item">
              <p>Downloads</p>
              <span class="info-item-details">${downloads}</span>
            </li>
            <li class="info-item">
              <p>Comments</p>
              <span class="info-item-details">${comments}</span>
            </li>
          </ul>
        </li>
      `
    )
    .join('');

  gallery.innerHTML = renderImages;

  //-------------------------------------------SIMPLELIGHTBOX-------------------------------------------\\

  const lightbox = new SimpleLightbox('.gallery a', {
    className: 'simple-lightbox',
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 400,
    overlayOpacity: 0.5,
  });

  lightbox.refresh();

  //-------------------------------------------------------------------------------------------\\
}
