const express = require('express')
const router = express.Router()
const Game = require('../models/games')

router.get('/game',(req, res) => {
   res.json({"message": "Succesfully Inserted"})
})

router.post('/game', async (req, res) => {
   const { userOne, userTwo, board, winner } = req.body
   const errors = []
   if (!userOne ){
      errors.push({ text: 'Must enter the user one'})
   }
   if (!userTwo){
      errors.push({ text: 'Must enter the user two'})
   }
   if (!board){
      errors.push({ text: 'The board must be stored'})
   }
   if (errors.length > 0)  {
      res.render({
         errors,
         userOne,
         userTwo
      })
   }else {
      const newGame = new Game ({ userOne, userTwo, board, winner }) 
      await newGame.save((err) => {
         if(err) res.json(err)
         res.json({"message": "Succesfully Inserted"})
      })
   }
})

router.put('/game/:id', async (req, res) => {
   const { userOne, userTwo, board, winner } = req.body
   await Game.findByIdAndUpdate(req.params.id, { userOne, userTwo, board, winner }, (err)=> {
      if(err) res.json(err)
      res.json({"message": "Succesfully Inserted"})
   }) 
   
})

router.get('/game/:id', async (req, res) => {
   const game = await Game.findById(req.params.id, (err)=>{
      if(err) res.json(err)
      
   })
   res.json({ response: game })
   
   
})


module.exports = router