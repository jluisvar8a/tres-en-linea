const express = require('express')
const router = express.Router()
const Game = require('../models/games')

router.get('/game',(req, res) => {
   res.json({"message": "Succesfully Inserted"})
})

router.post('/game', async (req, res) => {
   const { userOne, userTwo, board, winner, turn } = req.body
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
   if (!turn){
      errors.push({ text: 'The turn must be stored'})
   }
   if (errors.length > 0)  {
      res.render({
         errors,
         userOne,
         userTwo,
         turn
      })
   }else {
      const newGame = new Game ({ userOne, userTwo, board, winner, turn }) 
      await newGame.save((err, response) => {
         if(err) res.json(err)
         res.json({"message": "Succesfully inserted", "_id":response._id})
      })
   }
})

router.put('/game/:id', async (req, res) => {
   let params = {}
   if (req.body.board) {
      params.board = req.body.board
   }
   if (req.body.winner) {
      params.winner = req.body.winner
   }
   if (req.body.turn) {
      params.turn  = req.body.turn
   }
   await Game.findOneAndUpdate({ _id: req.params.id }, {$set:params}, { new:true }, (err, doc)=> {
      if(err) res.json(err)
      res.json({"message": "Succesfully updated", "board": doc.board, "turn": doc.turn})
   }) 
   
})

router.get('/unfinishedGames', async (req, res) => {
   console.log(req.body)
   await Game.find({ winner:''} , (err, doc)=>{
      if(err) res.json(err)
      res.json({ response: doc })
   })
})

router.get('/game/:id', async (req, res) => {
   await Game.findById({_id:req.params.id}, (err, doc)=>{
      if(err) res.json(err)
      res.json({ response: doc })
   })
})

router.get('/', async (req, res) => {
   res.json({ response: 'tres en linea api' })
   
   
})


module.exports = router