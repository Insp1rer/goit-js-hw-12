import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImages(image, imagesLimitPerPage, currentPage) {
  const params = {
    key: '43252696-8c48e7f381a0da5ec3ef140c1',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: imagesLimitPerPage,
    page: currentPage,
  };

  const res = await axios.get('', { params });
  return res;
}
