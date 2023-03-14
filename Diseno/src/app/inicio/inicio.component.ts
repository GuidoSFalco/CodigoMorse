import { Component } from '@angular/core';
declare var jQuery:any;
declare var $:any;

var traducir:any;
var traduccionTexto = ""
var traduccionMorse = ""
var cantidad = 1
var caracteres = 0
var contador__traduccion:boolean = true
var diccionario:boolean = true // Variable para abrir y cerrar diccionario


let contador_estadisticas = true
let contador_configuracion = true
// VARIABLES PARA EL CRONOMETRO
var minutos = 0
var segundos = 0

var contador_general:boolean = true
var contador__alfabetico:boolean = true
var contador__numerico:boolean = true
var contador__simbolico:boolean = true

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor() {

    
    
    $(function () {
      mostrarEstadisticas()

      $('.input-cantidad').change(function () {

          if($('.input-cantidad').val() <=0) {
            alert("La cantidad minima de caracteres a traducir es 1!")
            $('.input-cantidad').val(1)
          }

          if($('.input-cantidad').val() >=15) {
            alert("La cantidad maxima de caracteres a traducir es 15!")
            $('.input-cantidad').val(15)
          } else {

            cantidad = $('.input-cantidad').val()
          }

          if (contador_general === true) {
            contador_general = false
          } else {
            contador_general = true
          }
          $('.texto').text("");
          aleatorio()
      })

      // Funcion para habilitar alfabeto
      $('.slider').click(function () {
        if (contador__alfabetico == true) {
          

          contador__alfabetico = false
          aleatorio()
        } else {
          

          contador__alfabetico = true
          caracteres = 25
          $('.texto').text("");
          aleatorio()
        }
      })

      // // Funcion para modificar cantidad
      // $('.item__bloque-boton1').click(function () {
        
      //   if (contador_general == true) {
          

      //     contador_general = false
      //   } else {
          

      //     contador_general = true
      //   }
      // })
      // $('.input-cantidad').value(cantidad)


      // // Funcion para habilitar alfabeto
      // $('.item__bloque-boton2').click(function () {
      //   if (contador__alfabetico == true) {
          

      //     contador__alfabetico = false
      //   } else {
          

      //     contador__alfabetico = true
      //     caracteres = 25
      //   }
      // })


      // // Funcion para habilitar numeros
      // $('.item__bloque-boton3').click(function () {
      //   if (contador__numerico == true) {
          

      //     contador__numerico = false
      //   } else {
          
      //     contador__numerico = true
      //     caracteres = 10
      //   }
      // })


      // // Funcion para habilitar simbolos
      // $('.item__bloque-boton4').click(function () {
      //   if (contador__simbolico == true) {
          

      //     contador__simbolico = false
      //   } else {
          
      //     contador__simbolico = true
      //     caracteres = 10
      //   }
      // })


      
    })

    

  }
  
  // public confirmacion() {
    
  //   var ingreso = $('.traduccion__input').val()
  //   var errores = []
  //   var mostrarerrores = ""


  //   // if (ingreso === "dark mode") {
  //   //   location.href = "/2"
  //   // }

  //   if (contador__traduccion == true) {

  //     if (traduccionTexto === ingreso) {
  //       alert("correcto");
  //     }else{
  //       for (let i = 0; i < cantidad; i++) {
  //         if (traduccionTexto[i] != ingreso[i]) {
  //           errores[i] = ingreso[i]
  //           mostrarerrores = mostrarerrores + errores[i]
            
  //         }
  //       }
  //       alert("La traduccion correcta es: " + traduccionTexto)
  //     }

  //     if (traduccionTexto.length != ingreso.length) {
  //       alert("Has ingresado menos caracteres o mas")
  //     }
  //   } else {
  //     ingreso = ingreso + " "
  //     if (traduccionMorse === ingreso) {
  //       alert("correcto");
  //     }else{
  //       for (let i = 0; i < cantidad; i++) {
  //         if (traduccionMorse[i] != ingreso[i]) {
  //           errores[i] = ingreso[i]
  //           mostrarerrores = mostrarerrores + errores[i]
  //         }
  //       }
  //       alert("La traduccion correcta es: " + traduccionMorse)
  //     }

  //     if (traduccionMorse.length != ingreso.length) {
  //       alert("Has ingresado menos caracteres o mas")
  //     }
  //   }


  //   $('.traduccion__input').val("");
  //   $('.traduccion__input').focus();
  //   $('.texto').text("");
     
  //   traduccionTexto = ""
  //   traduccionMorse = ""
  //   segundos = 0
  //   minutos = 0


  //   this.aleatorio()
  //   }


    




    // public aleatorio() {
    //   $(function aleatorio() {
        
      
    //     $('.traduccion__input').focus();

    //     var numeros = []
    //     var resultadosenmorse = []
    //     var resultadosentexto = []


    //     for (let cantidad = 0; cantidad < $('.input-cantidad').text(); cantidad++) {
    //       var aleatorio = Math.floor(Math.random()*37);
          
    //       numeros.push(aleatorio)
    //       // if (contador__alfabetico === false) {
            
          
    //       switch (numeros[cantidad]) {
    //           case 0:
    //             resultadosenmorse.push(".- ")
    //             resultadosentexto.push("a ")
    //             traduccionTexto = traduccionTexto+"a"
    //             traduccionMorse = traduccionMorse+".- "
    //             break;
    //           case 1:
    //             resultadosenmorse.push("-... ")
    //             resultadosentexto.push("b ")
    //             traduccionTexto = traduccionTexto+"b"
    //             traduccionMorse = traduccionMorse+"-... "
    //             break;
    //           case 2:
    //             resultadosenmorse.push("-.-. ")
    //             resultadosentexto.push("c ")
    //             traduccionTexto = traduccionTexto+"c"
    //             traduccionMorse = traduccionMorse+"-.-. "
    //             break;
    //           case 3:
    //             resultadosenmorse.push("-.. ")
    //             resultadosentexto.push("d ")
    //             traduccionTexto = traduccionTexto+"d"
    //             traduccionMorse = traduccionMorse+"-.. "
    //             break;
    //           case 4:
    //             resultadosenmorse.push(". ")
    //             resultadosentexto.push("e ")
    //             traduccionTexto = traduccionTexto+"e"
    //             traduccionMorse = traduccionMorse+". "
    //             break;
    //           case 5:
    //             resultadosenmorse.push("..-.")
    //             resultadosentexto.push("f ")
    //             traduccionTexto = traduccionTexto+"f"
    //             traduccionMorse = traduccionMorse+"..-. "
    //             break;
    //           case 6:
    //             resultadosenmorse.push("--.")
    //             resultadosentexto.push("g ")
    //             traduccionTexto = traduccionTexto+"g"
    //             traduccionMorse = traduccionMorse+"--. "
    //             break;
    //           case 7:
    //             resultadosenmorse.push(".... ")
    //             resultadosentexto.push("h ")
    //             traduccionTexto = traduccionTexto+"h"
    //             traduccionMorse = traduccionMorse+".... "
    //             break;
    //           case 8:
    //             resultadosenmorse.push(".. ")
    //             resultadosentexto.push("i ")
    //             traduccionTexto = traduccionTexto+"i"
    //             traduccionMorse = traduccionMorse+".. "
    //             break;
    //           case 9:
    //             resultadosenmorse.push(".--- ")
    //             resultadosentexto.push("j ")
    //             traduccionTexto = traduccionTexto+"j"
    //             traduccionMorse = traduccionMorse+".--- "
    //             break;
    //           case 10:
    //             resultadosenmorse.push("-.-")
    //             resultadosentexto.push("k ")
    //             traduccionTexto = traduccionTexto+"k"
    //             traduccionMorse = traduccionMorse+"-.- "
    //             break;
    //           case 11:
    //             resultadosenmorse.push(".-..")
    //             resultadosentexto.push("l ")
    //             traduccionTexto = traduccionTexto+"l"
    //             traduccionMorse = traduccionMorse+".-.. "
    //             break;
    //           case 12:
    //             resultadosenmorse.push("--")
    //             resultadosentexto.push("m ")
    //             traduccionTexto = traduccionTexto+"m"
    //             traduccionMorse = traduccionMorse+"-- "
    //             break;
    //           case 13:
    //             resultadosenmorse.push("-.")
    //             resultadosentexto.push("n ")
    //             traduccionTexto = traduccionTexto+"n"
    //             traduccionMorse = traduccionMorse+"-. "
    //             break;
    //           case 14:
    //             resultadosenmorse.push("--.--")
    //             resultadosentexto.push("ñ ")
    //             traduccionTexto = traduccionTexto+"ñ"
    //             traduccionMorse = traduccionMorse+"--.-- "
    //             break;
    //           case 15:
    //             resultadosenmorse.push("---")
    //             resultadosentexto.push("o ")
    //             traduccionTexto = traduccionTexto+"o"
    //             traduccionMorse = traduccionMorse+"--- "
    //             break;
    //           case 16:
    //             resultadosenmorse.push(".--.")
    //             resultadosentexto.push("p ")
    //             traduccionTexto = traduccionTexto+"p"
    //             traduccionMorse = traduccionMorse+".--. "
    //             break;
    //           case 17:
    //             resultadosenmorse.push("--.-")
    //             resultadosentexto.push("q ")
    //             traduccionTexto = traduccionTexto+"q"
    //             traduccionMorse = traduccionMorse+"--.- "
    //             break;
    //           case 18:
    //             resultadosenmorse.push(".-.")
    //             resultadosentexto.push("r ")
    //             traduccionTexto = traduccionTexto+"r"
    //             traduccionMorse = traduccionMorse+".-. "
    //             break;
    //           case 19:
    //             resultadosenmorse.push("...")
    //             resultadosentexto.push("s ")
    //             traduccionTexto = traduccionTexto+"s"
    //             traduccionMorse = traduccionMorse+"... "
    //             break;
    //           case 20:
    //             resultadosenmorse.push("-")
    //             resultadosentexto.push("t ")
    //             traduccionTexto = traduccionTexto+"t"
    //             traduccionMorse = traduccionMorse+"- "
    //             break;
    //           case 21:
    //             resultadosenmorse.push("..- ")
    //             resultadosentexto.push("u ")
    //             traduccionTexto = traduccionTexto+"u"
    //             traduccionMorse = traduccionMorse+"..- "
    //             break;
    //           case 22:
    //             resultadosenmorse.push("...- ")
    //             resultadosentexto.push("v ")
    //             traduccionTexto = traduccionTexto+"v"
    //             traduccionMorse = traduccionMorse+"...- "
    //             break;
    //           case 23:
    //             resultadosenmorse.push(".-- ")
    //             resultadosentexto.push("w ")
    //             traduccionTexto = traduccionTexto+"w"
    //             traduccionMorse = traduccionMorse+".-- "
    //             break;
    //           case 24:
    //             resultadosenmorse.push("-..- ")
    //             resultadosentexto.push("x ")
    //             traduccionTexto = traduccionTexto+"x"
    //             traduccionMorse = traduccionMorse+"-..- "
    //             break;
    //           case 25:
    //             resultadosenmorse.push("-.-- ")
    //             resultadosentexto.push("y ")
    //             traduccionTexto = traduccionTexto+"y"
    //             traduccionMorse = traduccionMorse+"-.-- "
    //             break;
    //           case 26:
    //             resultadosenmorse.push("--.. ")
    //             resultadosentexto.push("z ")
    //             traduccionTexto = traduccionTexto+"z"
    //             traduccionMorse = traduccionMorse+"--.. "
    //             break;
    //           case 27:
    //             resultadosenmorse.push(".----")
    //             resultadosentexto.push("1 ")
    //             traduccionTexto = traduccionTexto+"1"
    //             traduccionMorse = traduccionMorse+".---- "
    //             break;
    //           case 28:
    //             resultadosenmorse.push("..---")
    //             resultadosentexto.push("2 ")
    //             traduccionTexto = traduccionTexto+"2"
    //             traduccionMorse = traduccionMorse+"..--- "
    //             break;
    //           case 29:
    //             resultadosenmorse.push("...--")
    //             resultadosentexto.push("3 ")
    //             traduccionTexto = traduccionTexto+"3"
    //             traduccionMorse = traduccionMorse+"...-- "
    //             break;
    //           case 30:
    //             resultadosenmorse.push("....-")
    //             resultadosentexto.push("4 ")
    //             traduccionTexto = traduccionTexto+"4"
    //             traduccionMorse = traduccionMorse+"....- "
    //             break;
    //           case 31:
    //             resultadosenmorse.push(".....")
    //             resultadosentexto.push("5 ")
    //             traduccionTexto = traduccionTexto+"5"
    //             traduccionMorse = traduccionMorse+"..... "
    //             break;
    //           case 32:
    //             resultadosenmorse.push("-....")
    //             resultadosentexto.push("6 ")
    //             traduccionTexto = traduccionTexto+"6"
    //             traduccionMorse = traduccionMorse+"-.... "
    //             break;
    //           case 33:
    //             resultadosenmorse.push("--...")
    //             resultadosentexto.push("7 ")
    //             traduccionTexto = traduccionTexto+"7"
    //             traduccionMorse = traduccionMorse+"--... "
    //             break;
    //           case 34:
    //             resultadosenmorse.push("---..")
    //             resultadosentexto.push("8 ")
    //             traduccionTexto = traduccionTexto+"8"
    //             traduccionMorse = traduccionMorse+"---.. "
    //             break;
    //           case 35:
    //             resultadosenmorse.push("----.")
    //             resultadosentexto.push("9 ")
    //             traduccionTexto = traduccionTexto+"9"
    //             traduccionMorse = traduccionMorse+"----. "
    //             break;
    //           case 36:
    //             resultadosenmorse.push("-----")
    //             resultadosentexto.push("0 ")
    //             traduccionTexto = traduccionTexto+"0"
    //             traduccionMorse = traduccionMorse+"----- "
    //             break;
    //           case 37:
    //             resultadosenmorse.push(".-.-.-")
    //             traduccionTexto = traduccionTexto+"."
    //             break;
    //           case 38:
    //             resultadosenmorse.push("--..--")
    //             traduccionTexto = traduccionTexto+","
    //             break;
    //           case 39:
    //             resultadosenmorse.push("..--..")
    //             traduccionTexto = traduccionTexto+"?"
    //             break;
    //           case 40:
    //             resultadosenmorse.push("-.-.--")
    //             traduccionTexto = traduccionTexto+"!"
    //             break;
    //           case 41:
    //             resultadosenmorse.push("---...")
    //             traduccionTexto = traduccionTexto+":"
    //             break;
    //           case 42:
    //             resultadosenmorse.push("-...-")
    //             traduccionTexto = traduccionTexto+"="
    //             break;
    //           default:
    //             break;
    //           }

              
    //         // }
                
    //       }

    //     // Si contador__traduccionTexto es true, la traduccionTexto sera de morse a texto
    //     if (contador__traduccion == true) {
    //       for (let index = 0; index < $('.input-cantidad').text(); index++) {
          
    //         $('.texto').text($('.texto').text()+resultadosenmorse[index]+' ')
    //       }
    //     }
          
    //     // Si contador__traduccionTexto es false, la traduccionTexto sera de texto a morse
    //     if (contador__traduccion == false) {
    //       for (let index = 0; index < $('.input-cantidad').text(); index++) {
    //         $('.texto').text($('.texto').text()+resultadosentexto[index]+' ')
    //       }
    //     }
           
          
    //   })
    // }



    

    // Metodo para reducir la cantidad de caracteres a traducir
    // public reducircantidad() {
    //   if (cantidad <= 1) {
    //     alert("La cantidad minima de caracteres a traducir es 1!")
    //   } else {
    //     $('.texto').text("");

    //     $('.input-cantidad').text(cantidad-1)
    //     --cantidad
    //     traduccionTexto = ""
    //     traduccionMorse = ""
    //     this.aleatorio()
    //   }
    // }

    // Metodo para aumentar la cantidad de caracteres a traducir
    // public aumentarcantidad() {
    //   if (cantidad >=16) {
    //     alert("Ha alcanzado el limite!")
    //     $('.traduccionTexto__input').focus();
    //   } else {
    //     $('.texto').text("");
    //     $('.input-cantidad').text(cantidad+1)
    //     ++cantidad
    //     traduccionTexto = ""
    //     traduccionMorse = ""
    //     this.aleatorio()
    //   }
    // }

    //  Metodo para indicar tipo de traduccionTexto
    // public cambiarTraduccion() {
    //   if (contador__traduccion == true) {
        
    //     $('.header__icono').css('transform','rotateZ(180deg)')
    //     contador__traduccion = false

    //   }else {
    //     $('.header__icono').css('transform','rotateZ(0deg)')
    //     contador__traduccion = true
    //   }
    //   $('.texto').text("");
    //   traduccionTexto = ""
    //   traduccionMorse = ""
    //   this.aleatorio()
    // }
    
    
    // Metodo para abrir diccionario
    // public abrirDiccionario() {
    //   if (diccionario == true) {
    //     $('.diccionario').css('display','flex')
    //     diccionario = false 
    //   } else {
    //     $('.diccionario').css('display','none')
    //     diccionario = true 
    //   }
    // }
}










function confirmacion() {
    
  var ingreso = $('.traduccion__input').val()
  var errores = []
  var mostrarerrores = ""


  // if (ingreso === "dark mode") {
  //   location.href = "/2"
  // }

  if (contador__traduccion == true) {

    if (traduccionTexto === ingreso) {
      alert("correcto");
    }else{
      for (let i = 0; i < cantidad; i++) {
        if (traduccionTexto[i] != ingreso[i]) {
          errores[i] = ingreso[i]
          mostrarerrores = mostrarerrores + errores[i]
          
        }
      }
      alert("La traduccion correcta es: " + traduccionTexto)
    }

    if (traduccionTexto.length != ingreso.length) {
      alert("Has ingresado menos caracteres o mas")
    }
  } else {
    ingreso = ingreso + " "
    if (traduccionMorse === ingreso) {
      alert("correcto");
    }else{
      for (let i = 0; i < cantidad; i++) {
        if (traduccionMorse[i] != ingreso[i]) {
          errores[i] = ingreso[i]
          mostrarerrores = mostrarerrores + errores[i]
        }
      }
      alert("La traduccion correcta es: " + traduccionMorse)
    }

    if (traduccionMorse.length != ingreso.length) {
      alert("Has ingresado menos caracteres o mas")
    }
  }


  $('.traduccion__input').val("");
  $('.traduccion__input').focus();
  $('.texto').text("");
   
  traduccionTexto = ""
  traduccionMorse = ""
  segundos = 0
  minutos = 0


  aleatorio()
}



function aleatorio() {
    
  if (contador_general === false) {
    
  
    $('.traduccion__input').focus();

    var numeros = []
    var resultadosenmorse = []
    var resultadosentexto = []


    for (let cant = 0; cant < $('.input-cantidad').val(); cant++) {
      var aleatorio = Math.floor(Math.random()*37);
      
      numeros.push(aleatorio)
      // if (contador__alfabetico === false) {
        
      
      switch (numeros[cant]) {
          case 0:
            resultadosenmorse.push(".- ")
            resultadosentexto.push("a ")
            traduccionTexto = traduccionTexto+"a"
            traduccionMorse = traduccionMorse+".- "
            break;
          case 1:
            resultadosenmorse.push("-... ")
            resultadosentexto.push("b ")
            traduccionTexto = traduccionTexto+"b"
            traduccionMorse = traduccionMorse+"-... "
            break;
          case 2:
            resultadosenmorse.push("-.-. ")
            resultadosentexto.push("c ")
            traduccionTexto = traduccionTexto+"c"
            traduccionMorse = traduccionMorse+"-.-. "
            break;
          case 3:
            resultadosenmorse.push("-.. ")
            resultadosentexto.push("d ")
            traduccionTexto = traduccionTexto+"d"
            traduccionMorse = traduccionMorse+"-.. "
            break;
          case 4:
            resultadosenmorse.push(". ")
            resultadosentexto.push("e ")
            traduccionTexto = traduccionTexto+"e"
            traduccionMorse = traduccionMorse+". "
            break;
          case 5:
            resultadosenmorse.push("..-. ")
            resultadosentexto.push("f ")
            traduccionTexto = traduccionTexto+"f"
            traduccionMorse = traduccionMorse+"..-. "
            break;
          case 6:
            resultadosenmorse.push("--. ")
            resultadosentexto.push("g ")
            traduccionTexto = traduccionTexto+"g"
            traduccionMorse = traduccionMorse+"--. "
            break;
          case 7:
            resultadosenmorse.push(".... ")
            resultadosentexto.push("h ")
            traduccionTexto = traduccionTexto+"h"
            traduccionMorse = traduccionMorse+".... "
            break;
          case 8:
            resultadosenmorse.push(".. ")
            resultadosentexto.push("i ")
            traduccionTexto = traduccionTexto+"i"
            traduccionMorse = traduccionMorse+".. "
            break;
          case 9:
            resultadosenmorse.push(".--- ")
            resultadosentexto.push("j ")
            traduccionTexto = traduccionTexto+"j"
            traduccionMorse = traduccionMorse+".--- "
            break;
          case 10:
            resultadosenmorse.push("-.- ")
            resultadosentexto.push("k ")
            traduccionTexto = traduccionTexto+"k"
            traduccionMorse = traduccionMorse+"-.- "
            break;
          case 11:
            resultadosenmorse.push(".-.. ")
            resultadosentexto.push("l ")
            traduccionTexto = traduccionTexto+"l"
            traduccionMorse = traduccionMorse+".-.. "
            break;
          case 12:
            resultadosenmorse.push("-- ")
            resultadosentexto.push("m ")
            traduccionTexto = traduccionTexto+"m"
            traduccionMorse = traduccionMorse+"-- "
            break;
          case 13:
            resultadosenmorse.push("-. ")
            resultadosentexto.push("n ")
            traduccionTexto = traduccionTexto+"n"
            traduccionMorse = traduccionMorse+"-. "
            break;
          case 14:
            resultadosenmorse.push("--.-- ")
            resultadosentexto.push("ñ ")
            traduccionTexto = traduccionTexto+"ñ"
            traduccionMorse = traduccionMorse+"--.-- "
            break;
          case 15:
            resultadosenmorse.push("--- ")
            resultadosentexto.push("o ")
            traduccionTexto = traduccionTexto+"o"
            traduccionMorse = traduccionMorse+"--- "
            break;
          case 16:
            resultadosenmorse.push(".--. ")
            resultadosentexto.push("p ")
            traduccionTexto = traduccionTexto+"p"
            traduccionMorse = traduccionMorse+".--. "
            break;
          case 17:
            resultadosenmorse.push("--.- ")
            resultadosentexto.push("q ")
            traduccionTexto = traduccionTexto+"q"
            traduccionMorse = traduccionMorse+"--.- "
            break;
          case 18:
            resultadosenmorse.push(".-. ")
            resultadosentexto.push("r ")
            traduccionTexto = traduccionTexto+"r"
            traduccionMorse = traduccionMorse+".-. "
            break;
          case 19:
            resultadosenmorse.push("... ")
            resultadosentexto.push("s ")
            traduccionTexto = traduccionTexto+"s"
            traduccionMorse = traduccionMorse+"... "
            break;
          case 20:
            resultadosenmorse.push("- ")
            resultadosentexto.push("t ")
            traduccionTexto = traduccionTexto+"t"
            traduccionMorse = traduccionMorse+"- "
            break;
          case 21:
            resultadosenmorse.push("..- ")
            resultadosentexto.push("u ")
            traduccionTexto = traduccionTexto+"u"
            traduccionMorse = traduccionMorse+"..- "
            break;
          case 22:
            resultadosenmorse.push("...- ")
            resultadosentexto.push("v ")
            traduccionTexto = traduccionTexto+"v"
            traduccionMorse = traduccionMorse+"...- "
            break;
          case 23:
            resultadosenmorse.push(".-- ")
            resultadosentexto.push("w ")
            traduccionTexto = traduccionTexto+"w"
            traduccionMorse = traduccionMorse+".-- "
            break;
          case 24:
            resultadosenmorse.push("-..- ")
            resultadosentexto.push("x ")
            traduccionTexto = traduccionTexto+"x"
            traduccionMorse = traduccionMorse+"-..- "
            break;
          case 25:
            resultadosenmorse.push("-.-- ")
            resultadosentexto.push("y ")
            traduccionTexto = traduccionTexto+"y"
            traduccionMorse = traduccionMorse+"-.-- "
            break;
          case 26:
            resultadosenmorse.push("--.. ")
            resultadosentexto.push("z ")
            traduccionTexto = traduccionTexto+"z"
            traduccionMorse = traduccionMorse+"--.. "
            break;
          case 27:
            resultadosenmorse.push(".---- ")
            resultadosentexto.push("1 ")
            traduccionTexto = traduccionTexto+"1"
            traduccionMorse = traduccionMorse+".---- "
            break;
          case 28:
            resultadosenmorse.push("..--- ")
            resultadosentexto.push("2 ")
            traduccionTexto = traduccionTexto+"2"
            traduccionMorse = traduccionMorse+"..--- "
            break;
          case 29:
            resultadosenmorse.push("...-- ")
            resultadosentexto.push("3 ")
            traduccionTexto = traduccionTexto+"3"
            traduccionMorse = traduccionMorse+"...-- "
            break;
          case 30:
            resultadosenmorse.push("....- ")
            resultadosentexto.push("4 ")
            traduccionTexto = traduccionTexto+"4"
            traduccionMorse = traduccionMorse+"....- "
            break;
          case 31:
            resultadosenmorse.push("..... ")
            resultadosentexto.push("5 ")
            traduccionTexto = traduccionTexto+"5"
            traduccionMorse = traduccionMorse+"..... "
            break;
          case 32:
            resultadosenmorse.push("-.... ")
            resultadosentexto.push("6 ")
            traduccionTexto = traduccionTexto+"6"
            traduccionMorse = traduccionMorse+"-.... "
            break;
          case 33:
            resultadosenmorse.push("--... ")
            resultadosentexto.push("7 ")
            traduccionTexto = traduccionTexto+"7"
            traduccionMorse = traduccionMorse+"--... "
            break;
          case 34:
            resultadosenmorse.push("---.. ")
            resultadosentexto.push("8 ")
            traduccionTexto = traduccionTexto+"8"
            traduccionMorse = traduccionMorse+"---.. "
            break;
          case 35:
            resultadosenmorse.push("----. ")
            resultadosentexto.push("9 ")
            traduccionTexto = traduccionTexto+"9"
            traduccionMorse = traduccionMorse+"----. "
            break;
          case 36:
            resultadosenmorse.push("----- ")
            resultadosentexto.push("0 ")
            traduccionTexto = traduccionTexto+"0"
            traduccionMorse = traduccionMorse+"----- "
            break;
          case 37:
            resultadosenmorse.push(".-.-.-")
            traduccionTexto = traduccionTexto+"."
            break;
          case 38:
            resultadosenmorse.push("--..--")
            traduccionTexto = traduccionTexto+","
            break;
          case 39:
            resultadosenmorse.push("..--..")
            traduccionTexto = traduccionTexto+"?"
            break;
          case 40:
            resultadosenmorse.push("-.-.--")
            traduccionTexto = traduccionTexto+"!"
            break;
          case 41:
            resultadosenmorse.push("---...")
            traduccionTexto = traduccionTexto+":"
            break;
          case 42:
            resultadosenmorse.push("-...-")
            traduccionTexto = traduccionTexto+"="
            break;
          default:
            break;
          }

          
        // }
            
      }

    // Si contador__traduccionTexto es true, la traduccionTexto sera de morse a texto
    if (contador__traduccion == true) {
      for (let index = 0; index < $('.input-cantidad').val(); index++) {
      
        $('.texto').text($('.texto').text()+resultadosenmorse[index]+' |')
      }
    }
      
    // Si contador__traduccionTexto es false, la traduccionTexto sera de texto a morse
    if (contador__traduccion == false) {
      for (let index = 0; index < $('.input-cantidad').val(); index++) {
        $('.texto').text($('.texto').text()+resultadosentexto[index]+' ')
      }
    }
        
      
  }
}



function reducircantidad() {
  if (cantidad <= 1) {
    alert("La cantidad minima de caracteres a traducir es 1!")
  } else {
    $('.texto').text("");

    $('.input-cantidad').text(cantidad-1)
    --cantidad
    traduccionTexto = ""
    traduccionMorse = ""
    aleatorio()
  }
}


function aumentarcantidad() {
  if (cantidad >=16) {
    alert("Ha alcanzado el limite!")
    $('.traduccionTexto__input').focus();
  } else {
    $('.texto').text("");
    $('.input-cantidad').text(cantidad+1)
    ++cantidad
    traduccionTexto = ""
    traduccionMorse = ""
    aleatorio()
  }
}


function cambiarTraduccion() {
  if (contador__traduccion == true) {
    
    $('.header__icono').css('transform','rotateZ(180deg)')
    contador__traduccion = false

  }else {
    $('.header__icono').css('transform','rotateZ(0deg)')
    contador__traduccion = true
  }
  $('.texto').text("");
  traduccionTexto = ""
  traduccionMorse = ""
  aleatorio()
}


function abrirDiccionario() {
  if (diccionario == true) {
    $('.diccionario').css('display','flex')
    diccionario = false 
  } else {
    $('.diccionario').css('display','none')
    diccionario = true 
  }
}

function mostrarEstadisticas() {
    $('.circle-a-texto').css('animation','mover 6s')
    $('.circle-a-texto').css('animation-fill-mode','both')
    $('.circle-a-morse').css('animation','mover 6s')
    $('.circle-a-morse').css('animation-fill-mode','both')
    contador_estadisticas = false

    contador_configuracion = true
  
    contador_estadisticas = true
}
