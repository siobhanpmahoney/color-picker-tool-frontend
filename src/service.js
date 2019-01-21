const index_url = 'http://localhost:3000/api/v1/colors'
const color_url = (id) => `http://localhost:3000/api/v1/colors/${id}`

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



export const deleteColor = (data) => {
  let url = color_url(data.id)
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => response.json())
}
