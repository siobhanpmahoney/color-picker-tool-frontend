const index_url = 'http://localhost:3000/api/v1/colors'

export const fetchColors = () => {
  return fetch(index_url)
  .then(response => response.json())
}

export const createColor = (data) => {
  return fetch(index_url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
}
