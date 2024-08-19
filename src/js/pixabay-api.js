const API_KEY = '45467228-b7d2f005bd7eca51073290ac8';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchQuery => {
  const urlParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${urlParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};
