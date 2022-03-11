module.exports = (app) => {
    // colocar aqui as rotas para requisições de animais

   //rota para listar animais

   app.get('/animais', (req, res) => {
    //res.send('retornar animais');
    db.collection('animais').find().toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   });







   
 }


   