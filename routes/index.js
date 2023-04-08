var express = require('express');
var router = express.Router();
const Tarea = require("../models/tarea.js");

/* GET home page. */
router.get('/',async(req, res)=>{
  const tareas =  await Tarea.find({},"_id text completed");
  res.render('index',{tareas});
});

router.post('/agregar', async(req,res)=>{
    const tarea = new Tarea();
    tarea.text = req.body.tarea;
    tarea.completed = false;

    await tarea.save()
    res.redirect("/")
})

router.get('/eliminar/:id', async(req,res)=>{
  const eliminada = await Tarea.findByIdAndDelete(req.params.id);
  res.redirect('/')
})

router.get('/complete/:id',async(req,res)=>{
  const id = req.params.id;
  await Tarea.findByIdAndUpdate({_id:id},{$set:{completed: true}})
  res.redirect("/")
})

module.exports = router;
