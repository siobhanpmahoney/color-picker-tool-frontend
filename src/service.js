const index_url = 'http://localhost:3000/api/v1/colors'

export const fetchColors = () => {
  return fetch(index_url)
  .then(response => response.json())
}
