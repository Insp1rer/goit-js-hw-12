export const refs = {
  form: document.querySelector('.overall-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loaderButton: document.querySelector('.load-button'),
};

export function showLoadMoreButton() {
  refs.loaderButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  refs.loaderButton.classList.add('hidden');
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const height = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: 2 * height,
    behavior: 'smooth',
  });
}
