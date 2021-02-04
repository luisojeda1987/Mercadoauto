module.exports = {
    index:(req,res) =>{
        res.render('home',{
            title : "Mercado Autos S.A.",
            mensaje: "Solo tenés que avanzar..."
        })
    },
  
}