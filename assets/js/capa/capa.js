'use strict'

window.addEventListener('load', function(){

    var tiempo=intervalo();
/*

$(document).ready(function() {
    setTimeout(function() {
        // Declaramos la capa mediante una clase para ocultarlo
        $(".midiv").fadeOut(1500);
    },3000);
});

$(document).ready(function() {
    setTimeout(function() {
        // Declaramos la capa  mediante una clase para ocultarlo
        $(".midiv2").fadeIn(1500);
        // Transcurridos 5 segundos aparecera la capa midiv2
    },5000);
});
*/
// VA INCLUIDO SI ESTA EN EL HEAD </script>

function intervalo(){


            var tiempo = setInterval(function(){

            console.log("Set interval ejecutado");
//para seleccionar uno tenemos que poner querySlector y para varios QUerySelector ALL
            var p1 = document.querySelector(".midiv2");
            if(p1.style.display=="none"){
                
           
           
 //TIMER PARA FULL STACK ENGINEER

                 $(document).ready(function() {
                    setTimeout(function() {
                        // Declaramos la capa  mediante una clase para ocultarlo
                        $(".midiv2").fadeIn(1500);
                        console.log("FadeIN");
                        // Transcurridos 2 segundos aparecera la capa midiv2
                    },1000);
                });


            }else{
                
              
               

                $(document).ready(function() {
                    setTimeout(function() {
                        // Declaramos la capa  mediante una clase para ocultarlo
                        $(".midiv2").fadeOut(1500);
                        console.log("FadeOUT");
                        // Transcurridos 2 segundos aparecera la capa midiv2
                    },1000);


                });

                
               

            }

            },1500);
             
            return tiempo;
            }

});