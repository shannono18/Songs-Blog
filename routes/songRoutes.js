const router = require('express').Router()
const { text } = require('body-parser')
let songs = require('../db/songs')



router.get('/songs', (req, res) => {
  res.json(songs)
})

router.post('/songs', (req, res) => {
  songs.push(req.body)
  res.sendStatus(200)
})

router.put('/songs/:title:text', (req, res) => {
  const title = req.params.title
  const newText = req.params.text
  songs.forEach(song => {
    if (song.title === title) {
      song.text = nextText
    }
  })
  res.sendStatus(200)
})

router.delete('/songs/:title', (req, res) => {
  let title = req.params.title
  console.log(songs)
  songs = songs.filter(song => song.title !== title)
  console.log(songs)
  res.sendStatus(200)
})

module.exports = router
