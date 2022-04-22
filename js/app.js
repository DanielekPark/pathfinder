const form = document.querySelector('#form')
const input = document.querySelector('.form-control')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      value: input.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  // Displaying results to console
  .then(json => console.log(json));
})
