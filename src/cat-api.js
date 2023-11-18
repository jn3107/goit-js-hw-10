export function fetchBreeds() {
  const basicUrl = 'https://api.thecatapi.com/v1';
  const endPoint = '/breeds';
  const params = `breeds`;
  const url = basicUrl + endPoint + params;

const options = {
  headers: {
    'x-api-key':
      'live_fMo1Gkhd1HSFCZcY9mf9rG0uUIUX77nY7PR1pLrGP5PwG7CRmTWw5MNxCjdLQGKq',
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
  const basicUrl = 'https://api.thecatapi.com/v1';
  const endPoint = '/images/search';
  const params = `?breed_ids=${breedId}`;
  const url = basicUrl + endPoint + params;

const options = {
  headers: {
    'x-api-key':
      'live_fMo1Gkhd1HSFCZcY9mf9rG0uUIUX77nY7PR1pLrGP5PwG7CRmTWw5MNxCjdLQGKq',
  },
};
return fetch(url, options).then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
});
}