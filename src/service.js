const index_url = 'http://localhost:3000/api/v1/colors'

export const fetchColors = () => {
  return fetch(index_url)
  .then(response => response.json())
}

export const createColor = (data) => {
  console.log("create data: ", data)
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

export const updateColor = (data) => {
  let url = `http://localhost:3000/api/v1/colors/${data.id}`
  console.log("url: ", url)
  console.log("update data: ", data)
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response=>response.json())
}
