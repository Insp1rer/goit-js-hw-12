export function getImages(image) {
  //-------------------------------------------URL-BUILDEER-------------------------------------------\\

  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43252696-8c48e7f381a0da5ec3ef140c1',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `${BASE_URL}?${params}`;

  //-------------------------------------------FETCH-------------------------------------------\\

  return fetch(URL).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });

  //-------------------------------------------------------------------------------------------\\
}
