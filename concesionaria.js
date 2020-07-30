const autos = require ("./autos");

const concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
      for (i=0; i < concesionaria.autos.length; i++)
      {
          if (concesionaria.autos[i].patente == patente) {
              return concesionaria.autos[i]
          }
      } return null
},
venderAuto: function (patente) {
      for (i=0; i < concesionaria.autos.length; i++)
      {
          if (concesionaria.autos[i].patente == patente) {
              return concesionaria.autos[i].vendido
          }
      } return null
},
autosParaLaVenta: function( ) {
     autos.filter (function ( ) {
        return autos.vendido != true;
    });
}
      

};


console.log (concesionaria.autosParaLaVenta( ));
