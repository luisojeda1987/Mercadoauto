const {getAutos} = require('../data/autos');

const autos = getAutos();

module.exports = {
    index:(req,res) => {
        res.render('autos',{
            title:"Automotores",
            autos
        });
    },
    show:(req,res)=>{
        let auto = autos.find(auto=>{
            return auto.id == req.params.id
        });
        res.render('autosDetail',{
            title: "Vista de detalle",
            auto
        });
    },
    search:(req,res)=>{
        const buscar = req.query.buscar;

        const resultado = autos.filter(auto=>{
            return auto.modelo.includes(buscar)
        })
        
        res.render('autos',{
            title:"Resultado de la búsqueda",
            autos : resultado
        })
    }
}