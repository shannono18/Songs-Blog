// const { axios } = window

// document.getElementById('addSong').addEventListener('click', event => {
//   event.preventDefault()

//   const item = {
//     text: document.getElementById('text').value,
//     isDone: false
//   }

//   axios.post('/items', item)
//     .then(() => {
//       const itemElem = document.createElement('div')
//       itemElem.innerHTML = `
//         <p>${item.text}</p>
//         <button class="isDone" data-text="${item.text}">${item.isDone ? 'Done' : 'Not Done'}</button>
//         <button class="delete" data-text="${item.text}">X</button>
//         <hr>
//       `
//       document.getElementById('items').append(itemElem)

//       document.getElementById('text').value = ''
//     })
//     .catch(err => console.error(err))
// })

// document.addEventListener('click', event => {
//   if (event.target.className === 'delete') {
//     const text = event.target.dataset.text
//     axios.delete(`/items/${text}`)
//       .then(() => event.target.parentNode.remove())
//       .catch(err => console.error(err))
//   }
// })

// document.addEventListener('click', event => {
//   if (event.target.className === 'isDone') {
//     const text = event.target.dataset.text

//     axios.put(`/items/${text}`)
//       .then(() => {
//         if (event.target.textContent === 'Done') {
//           event.target.textContent = 'Not Done'
//         } else {
//           event.target.textContent = 'Done'
//         }
//       })
//       .catch(err => console.error(err))
//   }
// })

axios.get('/songs')
  .then(({ data: songs }) => {
    songs.forEach(song => {
      const songElem = document.createElement('div')
      songElem.innerHTML = `
        <p>${song.title}</p>
        <p>${song.artist}</p>
        <p>${song.album}</p>
        <p>${song.text}</p>
        <hr>
      `
      document.getElementById('songs').append(songElem)
    })
  })
  .catch(err => console.error(err))