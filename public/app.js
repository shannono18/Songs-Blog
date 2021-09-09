// const { axios } = window

document.getElementById('addSong').addEventListener('click', event => {
  event.preventDefault()

  const song = {
    title: document.getElementById('titleInput').value,
    artist: document.getElementById('artistInput').value,
    album: document.getElementById('albumInput').value,
    text: document.getElementById('commentsInput').value
  }

  axios.post('/api/songs', song)
    .then(() => {
      console.log(song)
      let songElem = document.createElement('div')
      songElem.innerHTML = `
        <p data-title="${song.title}">${song.title}</p>
        <p>${song.artist}</p>
        <p>${song.album}</p>
        <p>${song.text}</p>
        <form>
          <p class="update-prompt">Update Comments</p>
          <input type="text">
          <button class="button is-info is-rounded" id="update-comments">Update</button>
        </form>
        <button class="delete">Delete</button>
      <hr>
      `
      document.getElementById('songList').append(songElem)

      document.getElementById('titleInput').value = ''
      document.getElementById('artistInput').value = ''
      document.getElementById('albumInput').value = ''
      document.getElementById('commentsInput').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'delete') {
    const title = event.target.dataset.title
    axios.delete(`/api/songs/${title}`)
      .then(() => event.target.parentNode.remove())
      .catch(err => console.error(err))
  }
})

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

axios.get('/api/songs')
  .then(({ data: songs }) => {
    songs.forEach(song => {
      let songElem = document.createElement('div')
      songElem.innerHTML = `
        <p data-title="${song.title}">${song.title}</p>
        <p>${song.artist}</p>
        <p>${song.album}</p>
        <p>${song.text}</p>
        <form>
          <p class="update-prompt">Update Comments</p>
          <input type="text">
          <button class="button is-info is-rounded" id="update-comments">Update</button>
        </form>
        <button class="delete">Delete</button>
        <hr>
      `
      document.getElementById('songList').append(songElem)
    })
  })
  .catch(err => console.error(err))