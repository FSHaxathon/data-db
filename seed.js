const fs = require('fs')
const axios = require('axios')
const length = 2
const url = `https://randomuser.me/api/?nat=ch&inc=gender,name,nat,picture&results=2000`

// get seed population
//
const countries = '&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,ir,nl,nz,tr,us'.split(
  ','
)

let people
axios.get(`${url}${countries}?results=${length}`).then(resp => {
  people = resp.data

  const data = JSON.stringify({ people }, undefined, 2)
  fs.writeFileSync('./seed-data.json', data)
})
