import express from 'express'  
const app = express()
const port = 3000

const API_KEY='rnd_WFZZIJ3yFyfnOtrVpkQCInrHHeJj'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})