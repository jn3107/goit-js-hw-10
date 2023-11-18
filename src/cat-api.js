export function fetchBreeds(){
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const PARAMS = `breeds`;
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {
    headers: {
      'x-api-key':
      'live_fMo1Gkhd1HSFCZcY9mf9rG0uUIUX77nY7PR1pLrGP5PwG7CRmTWw5MNxCjdLQGKq'
    },
  };
    return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const PARAMS = `?breed_ids=${breedId}`;
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {
    headers: {
      'x-api-key':
      'live_fMo1Gkhd1HSFCZcY9mf9rG0uUIUX77nY7PR1pLrGP5PwG7CRmTWw5MNxCjdLQGKq'
    },
  };
  return fetch(url, options).then(response => {
      if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}