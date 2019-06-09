 


  window.onload = function() {
    Ocultar() //funciones a ejecutar
  //  p1.style.display="none"
//p2.style.display="none"
//p3.style.display="none"
//p4.style.display="none"
//p5.style.display="none"
//p6.style.display="none"
//p7.style.display="none"
//p8.style.display="none"
  };
 
var capturar=document.querySelector('#enviar')

var p=document.querySelector('#iniciales');
var p1=document.querySelector('#pregunta1')
var p2=document.querySelector('#pregunta2');
var p3=document.querySelector('#pregunta3');
var p4=document.querySelector('#pregunta4');
var p5=document.querySelector('#pregunta5');
var p6=document.querySelector('#pregunta6');
var p7=document.querySelector('#pregunta7');
var p8=document.querySelector('#pregunta8');
var p9=document.querySelector('#pregunta9');
var tabla=document.querySelector('#tabla')
var contenido2=document.querySelector('#contenido2')
var vector=document.querySelectorAll('.examen')
//console.log(vector)
var centro=document.querySelector('.centro')

console.log(vector[1])

console.log(p1)

var formulario=document.querySelector('.form')


var menu=document.querySelector('.menus')
 var estadistica=document.querySelector('#calculo')
 
var aside=document.querySelector('#menu')
var contenedor=document.querySelector('#contenido')
 console.log(contenedor)

var siguiente=document.querySelector('.next')

console.log(siguiente)
var element = document.querySelector(".previous");
var siguiente = document.querySelector(".next");
  var joder=document.querySelector('#joder')
 
  
  var atras=document.querySelector('#a')
  var Preguntas=['Que es Colombia?','Paises limitrofes de  Colombia','Capital del departamento de Nariño','Monteria a que departamento pertenece','El eje Cafetero esta Compuesto por?','Departamento con mas Habitantes','Le dicen la puerta de oro de Colombia ','Nombre del departamento que comparte frontera con ecuador','Parte de Colombia que tiene triplefrontera']
  var Capturar=[]
   
   console.log(Preguntas)
 // joder.addEventListener('click',()=>{
     
    //p1.style.display="none"
    //p2.style.display="none"
   // p3.style.display="none"
    //p4.style.display="none"
    //p5.style.display="none"
    //p6.style.display="none"
    //p7.style.display="none"
    //p8.style.display="none"

   // p1=''
   // var posicion=0;
   // Capturar.unshift(Preguntas[posicion])
   // Preguntas.shift()
   // console.log(Capturar)
   
  
  //})
 //atras.addEventListener('click',()=>{
  //   var posicion=0
    // Preguntas.unshift(Capturar[posicion])
   //  Capturar.shift()
    // console.log(Capturar)

 //})
var contador=0+1
var contadoractivos=0

var respuestas
 contenedor.addEventListener('click',(e)=>{
 
 // console.log(capturar)
//contador++
var atrapa
var preguntas1=document.querySelectorAll('.p1')
var preguntas2=document.querySelectorAll('.p2')
var preguntas3=document.querySelectorAll('.p3')
var preguntas4=document.querySelectorAll('.p4')
var preguntas5=document.querySelectorAll('.p5')
var preguntas6=document.querySelectorAll('.p6')
var preguntas7=document.querySelectorAll('.p7')
var preguntas8=document.querySelectorAll('.p8')
var preguntas9=document.querySelectorAll('.p9')
var total=document.querySelector('.centrot')
var lista=document.querySelector('.listado')
var identificadores=document.querySelector('.contenedorR').children
var rojos=[]
var verdes=[]
var r1=[]
var r2=[]
var r3=[]
var r4=[]
var r5=[]
var r6=[]
var r7=[]
var r8=[]
var totales=0
var r9=[]
var totalverde=0
var calculo=0
var totalrojas=0
var ol=document.querySelector('listilla')
var activos=document.querySelectorAll('.examen')
var posicion=""
//console.log(contador)
   if(e.target.classList.contains('next')){
    
     if(p1.style.display=='inline'){
     
       //centro.style.display='inline'
      //alert('hola')
 //element.classList.add('isDisabled')
     // alert('hola')
       p1.style.display='none'
        
       p2.style.display='inline'
      
     }else {
       if(p2.style.display=='inline'){
         p3.style.display='inline'
         p2.style.display='none'
       } else {
         if(p3.style.display=='inline'){
           p3.style.display='none'
           p4.style.display='inline'
         } else {
           if(p4.style.display=='inline'){
             p4.style.display='none'
             p5.style.display='inline'
           } else {
             if(p5.style.display=='inline'){
               p5.style.display='none'
               p6.style.display='inline'
             }else {
              if(p6.style.display=='inline'){
                p6.style.display='none'
                p7.style.display='inline'
              } else{
                if(p7.style.display=='inline'){
                  p7.style.display='none'
                  p8.style.display='inline'
                  
                }else {
                  if(p8.style.display=='inline'){
                    p8.style.display='none'
                    
                    p9.style.display='inline'
                  
                     
                  }else{
                     
                    if(p9.style.display=='inline'){
                      
                     
                      return true
                  // alert('hecho')
                    }
                    siguiente.disabled=true
                  }
                }
              }
             }
           }
         }
       }
     }
    // for(var i=0;i<activos.length;i++){
    //  if(activos[i].style.display=='inline'){
     
        //console.log(vector[contadoractivos])
     // }
     
     contadoractivos=contadoractivos+1
         
    // } 
   }
   
    
   if(e.target.classList.contains('previous')){

    if(p1.style.display=='inline'){

   p2.style.display='none'


    }else if(p2.style.display=='inline'){
      p2.style.display='none'
        p3.style.display='none'
        p1.style.display='inline'
      } else {
        if(p3.style.display=='inline'){
          p4.style.display='none'
          p2.style.display='inline'
          p3.style.display='none'
          
        } else {
          if(p4.style.display=='inline'){
            p5.style.display='none'
            p3.style.display='inline'
            p4.style.display='none'
          } else {
            if(p5.style.display=='inline'){
              p6.style.display='none'
              p4.style.display='inline'
              p5.style.display='none'
            }else {
             if(p6.style.display=='inline'){
               p7.style.display='none'
               p5.style.display='inline'
               p6.style.display='none'
             } else{
               if(p7.style.display=='inline'){
                 p8.style.display='none'
                 p6.style.display='inline'
                 p7.style.display='none'
               }else {
                 if(p8.style.display=='inline'){
                   p9.style.display='none'
                   p7.style.display='inline'
                   p8.style.display='none'
                   
                 }else{
                   if(p9.style.display=='inline'){
                  // alert('hecho')
                 
                   p8.style.display='inline'
                   p9.style.display='none'
                   }
                 }
               }
             }
            }
          }
        }
      }
       contadoractivos=contadoractivos-1
    
   }
   
 
 
    
 // console.log(identificadores[1] )
  //  console.log(preguntas1)
  // console.log(contadoractivos+1)
   var capturar=contadoractivos+1
   document.querySelector('.centro').innerHTML='Pregunta :'+capturar +':de'+activos.length
   //contador=contador+1
console.log(activos.length)
   
    if(p1.style.display!='inline'){
console.log('no esta activo')
       
   for(var i=0;i<preguntas1.length;i++){
     if(preguntas1[i].checked==true){
       console.log('hay un elemento checkeado'+preguntas1[i].value)
     
        posicion=preguntas1[i].value
         
if(preguntas1[i].value=='Pais'){
  console.log('CORRECTO')
  identificadores[0].style.color='green'
 
 
  //verdes.push(identificadores[0].style.color='green')
} else {
  
 
console.log('incorrecto')
identificadores[0].style.color='red'
 
}
 
 }

  if(identificadores[0].style.color=='green'){
    for(var i=0;i<preguntas1.length;i++){
      if(preguntas1[i].checked==false){
        preguntas1[i].style.display='none'
        
      }
    }
  } else{
    if(identificadores[0].style.color=='red'){
      for(var i=0;i<preguntas1.length;i++){
        if(preguntas1[i].checked==false){
          preguntas1[i].style.display='none'
          
        }
      }
    }
  }
  
//r1.push(preguntas1[i].value)
     }
     
   

     

   
   
    }
 
    
        
     
 if(p2.style.display!='inline'){
      for(var i=0;i<preguntas2.length;i++){
        if(preguntas2[i].checked){
          console.log('hay un elemento checkeado'+preguntas2[i].value)
  
   if(preguntas2[i].value=='Ecuador'){
     console.log('CORRECTO')
     identificadores[1].style.color='green'
     var posicion=preguntas2[i].value
    //verdes.push(identificadores[1].style.color='green')
   } else {
   
   console.log('incorrecto')
   var posicion=preguntas2[i].value
   identificadores[1].style.color='red'
   }
        
   
        
        }   
   //console.log(posicion)
      
   if(identificadores[1].style.color=='green'){
    for(var i=0;i<preguntas2.length;i++){
      if(preguntas2[i].checked==false){
        preguntas2[i].style.display='none'
      }
    }
  } else{
    if(identificadores[1].style.color=='red'){
      for(var i=0;i<preguntas2.length;i++){
        if(preguntas2[i].checked==false){
          preguntas2[i].style.display='none'
        }
      }
    }
  }
   
      }
       } 
       
       
       if(p3.style.display!='inline'){
        for(var i=0;i<preguntas3.length;i++){
          if(preguntas3[i].checked){
            console.log('hay un elemento checkeado'+preguntas3[i].value)
            r3=preguntas3[i].value
     if(preguntas3[i].value=='Pasto'){
       console.log('CORRECTO')
    identificadores[2].style.color='green'
     } else {
     
     console.log('incorrecto')
     identificadores[2].style.color='red'
     }

     
          
     
          
          }   
     
        
         
          if(identificadores[2].style.color=='green'){
            for(var i=0;i<preguntas1.length;i++){
              if(preguntas3[i].checked==false){
                preguntas3[i].style.display='none'
              }
            }
          } else{
            if(identificadores[2].style.color=='red'){
              for(var i=0;i<preguntas3.length;i++){
                if(preguntas3[i].checked==false){
                  preguntas3[i].style.display='none'
                }
              }
            }
          }
        }
         }


         if(p4.style.display!='inline'){
          for(var i=0;i<preguntas4.length;i++){
            if(preguntas4[i].checked){
               
              console.log('hay un elemento checkeado'+preguntas4[i].value)
              
       if(preguntas4[i].value=='Cordoba'){
        identificadores[3].style.color='green'
      //  verdes.push(identificadores[3].style.color='green')
         console.log('CORRECTO')
       } else {
       
       console.log('incorrecto')
       identificadores[3].style.color='red'
       }
            
       
            
            }   
       
          
           
            if(identificadores[3].style.color=='green'){
              for(var i=0;i<preguntas1.length;i++){
                if(preguntas4[i].checked==false){
                  preguntas4[i].style.display='none'
                }
              }
            } else{
              if(identificadores[3].style.color=='red'){
                for(var i=0;i<preguntas1.length;i++){
                  if(preguntas4[i].checked==false){
                    preguntas4[i].style.display='none'
                  }
                }
              }
            }
          }
           }

           if(p5.style.display!='inline'){
            for(var i=0;i<preguntas5.length;i++){
              if(preguntas5[i].checked){
                
                console.log('hay un elemento checkeado'+preguntas5[i].value)
                 
         if(preguntas5[i].value=='Risaralda,Quindio,Caldas'){
           console.log('CORRECTO')
           identificadores[4].style.color='green'
         //  verdes.push(identificadores[4].style.color='green')
         } else {
         
         console.log('incorrecto')
         identificadores[4].style.color='red'
         }
              
         
              
              }   
              if(identificadores[4].style.color=='green'){
                for(var i=0;i<preguntas1.length;i++){
                  if(preguntas5[i].checked==false){
                    preguntas5[i].style.display='none'
                  }
                }
              } else{
                if(identificadores[4].style.color=='red'){
                  for(var i=0;i<preguntas1.length;i++){
                    if(preguntas5[i].checked==false){
                      preguntas5[i].style.display='none'
                    }
                  }
                }
              }
            
             
         
            }
             }

             if(p6.style.display!='inline'){
              for(var i=0;i<preguntas6.length;i++){
                if(preguntas6[i].checked){
                  console.log('hay un elemento checkeado'+preguntas6[i].value)
 
           if(preguntas6[i].value=='Cundinamarca'){

             console.log('CORRECTO')
             identificadores[5].style.color='green'
          //   verdes.push(identificadores[5].style.color='green')
           } else {
           
           console.log('incorrecto')
           identificadores[5].style.color='red'
           }
                
           
                
                }   
           
              
                if(identificadores[5].style.color=='green'){
                  for(var i=0;i<preguntas1.length;i++){
                    if(preguntas6[i].checked==false){
                      preguntas6[i].style.display='none'
                    }
                  }
                } else{
                  if(identificadores[5].style.color=='red'){
                    for(var i=0;i<preguntas1.length;i++){
                      if(preguntas6[i].checked==false){
                        preguntas6[i].style.display='none'
                      }
                    }
                  }
                }
           
              }
               }

               if(p7.style.display!='inline'){


                for(var i=0;i<preguntas7.length;i++){
                  if(preguntas7[i].checked){
                    
                    console.log('hay un elemento checkeado'+preguntas7[i].value)
             if(preguntas7[i].value=='Barranquilla'){
               console.log('CORRECTO')
               identificadores[6].style.color='green'
             //  verdes.push(identificadores[6].style.color='green')
             } else {
             
             console.log('incorrecto')
             identificadores[6].style.color='red'
             }
                  
             
                  
                  }   
             
                
                  if(identificadores[6].style.color=='green'){
                    for(var i=0;i<preguntas1.length;i++){
                      if(preguntas7[i].checked==false){
                        preguntas7[i].style.display='none'
                      }
                    }
                  } else{
                    if(identificadores[6].style.color=='red'){
                      for(var i=0;i<preguntas1.length;i++){
                        if(preguntas7[i].checked==false){
                          preguntas7[i].style.display='none'
                        }
                      }
                    }
                  }
             
                }
                 }
                 if(p8.style.display!='inline'){


                  for(var i=0;i<preguntas8.length;i++){
                    if(preguntas8[i].checked){
                     
                      console.log('hay un elemento checkeado'+preguntas8[i].value)
               //       verdes.push(identificadores[7].style.color='green')

               if(preguntas8[i].value=='Amazonas'){
                 console.log('CORRECTO')
                 identificadores[7].style.color='green'
             //    verdes.push(identificadores[7].style.color='green')
               } else {
               
               console.log('incorrecto')
               identificadores[7].style.color='red'
               }
                    
               
                    
                    }   
               
                  
                    if(identificadores[7].style.color=='green'){
                      for(var i=0;i<preguntas1.length;i++){
                        if(preguntas8[i].checked==false){
                          preguntas8[i].style.display='none'
                        }
                      }
                    } else{
                      if(identificadores[7].style.color=='red'){
                        for(var i=0;i<preguntas1.length;i++){
                          if(preguntas8[i].checked==false){
                            preguntas8[i].style.display='none'
                          }
                        }
                      }
                    }
               
                  }
                   }

                   if(p9.style.display!='inline'){


                    for(var i=0;i<preguntas9.length;i++){
                      if(preguntas9[i].checked){
                        
                        console.log('hay un elemento checkeado'+preguntas9[i].value)
                 if(preguntas9[i].value=='Nariño'){
                   console.log('CORRECTO')
                   identificadores[8].style.color='green'
                   //verdes.push(identificadores[8].style.color='green')
                 } else {
                 
                 console.log('incorrecto')
                 identificadores[8].style.color='red'
                 }
                      
                 
                      
                      }   
                 
                      if(identificadores[8].style.color=='green'){
                        for(var i=0;i<preguntas1.length;i++){
                          if(preguntas9[i].checked==false){
                            preguntas9[i].style.display='none'
                          }
                        }
                      } else{
                        if(identificadores[8].style.color=='red'){
                          for(var i=0;i<preguntas1.length;i++){
                            if(preguntas9[i].checked==false){
                              preguntas9[i].style.display='none'
                            }
                          }
                        }
                      }
                     
                 
                    }

                    
                     }


                    
  
                   for(var i=0;i<identificadores.length;i++){
                      if(identificadores[i].style.color=='green'){
                          
                       verdes.push(identificadores[i])
                       
                      }

                      if(identificadores[i].style.color=='red'){
                        
                        rojos.push(identificadores[i])

                         
                      }
                   }
                   
                   
                  
              //     console.log(verdes.length)
                 //  console.log(rojos.length)
                  totales=  verdes.length+rojos.length

               
                   console.log(verdes.length)
//console.log(r1)var elem = document.getElementById(".barra"); 
  
 
  
var elem = document.getElementById("myBar");   
var width = 0;
var id = setInterval(frame, 0);

 
  var contarverde=0
for(var i=0;i<identificadores.length;i++){
  if(identificadores[i].style.color=='green'){
      
   //verdes.push(identificadores[i])
   contarverde=contarverde+1
  }

  if(identificadores[i].style.color=='red'){
    
    rojos.push(identificadores[i])

     
  }
}


function frame() {
  if (width>= 9) {
  //  clearInterval(id)
  clearInterval(id)
  } else {
   // width++; 
 if(totales>0){
  clearInterval(id)
  elem.style.width =   (totales) *12 + '%'; 
 // elem.innerHTML = (totales)   + '%';
 }
     
 

  
  }
}
   
//console.log(preguntas)
for(var i=0;i<preguntas1.length;i++){
   if(preguntas1[i].checked==true){

   r1=preguntas1[i].value
   }
}
for(var i=0;i<preguntas2.length;i++){
  if(preguntas2[i].checked==true){

  r2=preguntas2[i].value
  }
}
for(var i=0;i<preguntas3.length;i++){
  if(preguntas3[i].checked==true){

  r3=preguntas3[i].value
  }
}
for(var i=0;i<preguntas4.length;i++){
  if(preguntas4[i].checked==true){

  r4=preguntas4[i].value
  }
}
for(var i=0;i<preguntas5.length;i++){
  if(preguntas5[i].checked==true){

  r5=preguntas5[i].value
  }
}
for(var i=0;i<preguntas6.length;i++){
  if(preguntas6[i].checked==true){

  r6=preguntas6[i].value
  }
}
for(var i=0;i<preguntas7.length;i++){
  if(preguntas7[i].checked==true){

  r7=preguntas7[i].value
  }
}

for(var i=0;i<preguntas8.length;i++){
  if(preguntas8[i].checked==true){

  r8=preguntas8[i].value
  }
}
for(var i=0;i<preguntas9.length;i++){
  if(preguntas9[i].checked==true){

  r9=preguntas9[i].value
  }
}  
 console.log(r1)
 atrapar=verdes.length
console.log(contarverde)
//console.log(r2)
                   total.innerHTML='Preguntas realizadas'+' :'+""+totales

                  // if(totales=='9'){


                  if(totales==9){
                    
                   var lista='<tr>'+'<td>'+'1'+'</td>'+
                              '<td>'+r1+'</td>'+'<td>'+'Pais'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'2'+'</td>'+
                              '<td>'+r2+'</td>'+'<td>'+'Ecuador'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'3'+'</td>'+
                              '<td>'+r3+'</td>'+'<td>'+'Pasto'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'4'+'</td>'+
                              '<td>'+r4+'</td>'+'<td>'+'Cordoba'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'5'+'</td>'+
                              '<td>'+r5+'</td>'+'<td>'+'Risaralda,Quindio,Caldas'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'6'+'</td>'+
                              '<td>'+r6+'</td>'+'<td>'+'Cundinamarca'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'7'+'</td>'+
                              '<td>'+r7+'</td>'+'<td>'+'Barranquilla'+'</td>'
                   
                   
                   +'</tr>'+
                   '<tr>'+'<td>'+'8'+'</td>'+
                              '<td>'+r8+'</td>'+'<td>'+'Amazonas'+'</td>'
                   
                   
                   +'</tr>'+
                   
                   '<tr>'+'<td>'+'9'+'</td>'+
                              '<td>'+r9+'</td>'+'<td>'+'Nariño'+'</td>'
                   
                   
                   +'</tr>'

                   tabla.innerHTML=lista

                  //  var lista=document.createElement('li')
                   // lista.innerHTML='Contestada:'+r1+'Respuesta Correcta: Pais'+
                              //       'Contestada:'+r2+'Respuesta Correcta:Ecuador'+
                             //        'Contestada:'+r3+'Respuesta Correcta:Pasto'+
                             //        'Contestada:'+r4+'Respuesta Correcta:Cordoba'+
                             //        'Contestada:'+r5+'Respuesta Correcta:Risaralda,Quindio,Caldas'+
                             //        'Contestada:'+r6+'Respuesta Correcta:Cundinamarca'+
                             //        'Contestada:'+r7+'Respuesta Correcta:Barranquilla'+
                            //         'Contestada:'+r8+'Respuesta Correcta:Amazonas'+
                            //         'Contestada:'+r9+'Respuesta Correcta:Nariño'


                              //       listilla.append(lista)
                              //        return true
console.log(atrapar)
                             
                               calculo=(5/9)*verdes.length

                              console.log(calculo)
                              if(calculo<3.0 ){
                                estadistica.innerHTML='Tu resultado :'+calculo.toFixed(2)+ 'COGE UN LIBRO'
                              } else  if(calculo>=3.0 ){
                                estadistica.innerHTML='Tu resultado fue de '  +calculo.toFixed(2)+  ' Bien pero sigue estudiando mas'
                              } else{
                                if(calculo>=4.0){
                                  estadistica.innerHTML= 'Tu resultado fue de '  +calculo.toFixed(2) + ' Bravo Caballero'
                                } else{
                                  if(calculo==5.0){
                                    estadistica.innerHTML= 'Tu resultado fue de '  +calculo.toFixed(2)+ 'Excelente'
                                  }
                                }
                              }
                  }
  


                  //  var para=document.createElement('p')
//para.innerHTML='Respuesta seleccionada :'+r1+'Respuesta Correcta: '+'Pais'+
          //      'Respuesta seleccionada :'+r2+'Respuesta Correcta: '+'Ecuador'+
            ///    'Respuesta seleccionada :'+r3+'Respuesta Correcta: '+'Pasto'+
         //       'Respuesta seleccionada :'+r4+'Respuesta Correcta: '+'Cordoba'+
         //       'Respuesta seleccionada :'+r5+'Respuesta Correcta: '+'Risaralda,Quindio,Caldas'+
           //     'Respuesta seleccionada :'+r6+'Respuesta Correcta: '+'Cundinamarca'+
               /// 'Respuesta seleccionada :'+r7+'Respuesta Correcta: '+'Barranquilla'+
           //     'Respuesta seleccionada :'+r8+'Respuesta Correcta: '+'Amazonas'+
           //     'Respuesta seleccionada :'+r9+'Respuesta Correcta: '+'Nariño'

               // lista.appendChild(para)
                
                 //  }

     //console.log(contadoractivos)
    
 })

 
 // siguiente.addEventListener('click',(e)=>{


    //console.log(e.target.classList.contains('next'))
 


 // })
 //anterior.addEventListener('click',()=>{

 //})
 
var Mostrar=()=>{
    formulario.style.display="none"
  // anterior.style.display="inline"
//   siguiente.style.display="inline0"
  // menu.style.display="block"
 
 menu.style.display='block'
  p1.style.display="inline"
   
  element.disabled=true
  //siguiente.classList.add('isDisabled')
 // anterior.disabled=true
 // p2.style.display="inline"
 contenido2.style.display="inline"
   
 contenedor.style.display="inline"
 aside.style.display="inline"
 
 //centro.style.display='inline'
 //centro.style.display='inline'
}
var Ocultar=()=>{
  // anterior.style.display="none"
   // siguiente.style.display="none"
 menu.style.display="none"
  fondo.style.display="none"
  contenido2.style.display="none"
 //p1.innerHTML=''
p1.style.display="none"
p2.style.display="none"
p3.style.display="none"
p4.style.display="none"
p5.style.display="none"
p6.style.display="none"
p7.style.display="none"
p8.style.display="none"
p9.style.display="none"
aside.style.display="none"
contenedor.style.display="none"
//activos.display="none"
  
}

capturar.addEventListener('click',()=>{
    var nombre=document.querySelector('#Nombre')
    var apellido=document.querySelector('#Apellido')
    if(nombre.value=="" && apellido.value==""){
        alert('vacio')
        return false
    }  

    p.innerHTML='Bienvenido al quiz :'+''+nombre.value+'-'+apellido.value

  //  nombre.value=''
   // apellido.value=''

    
 Mostrar()
})

 

