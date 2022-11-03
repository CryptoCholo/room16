import {xata } from "../../src/XataClient"

export default  async function handler (req, res) {
   
    const {fullname, email, nsize, location, password} = req.body
  
    const size =  parseInt(nsize);
    if (!fullname || !email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'please enter your name and email ' })
    }

    const user = await  xata.db.Users.create({fullname, email, size, location, password})
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: user })
  }