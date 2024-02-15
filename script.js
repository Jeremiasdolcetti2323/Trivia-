
var respuestas=document.getElementsByClassName("respuesta");

var resultado=document.getElementById("resultado1");
var respuesta1=document.getElementById("Res1");
var respuesta2=document.getElementById("Res2");
var respuesta3=document.getElementById("Res3");
var respuesta4=document.getElementById("Res4");
var pregunta=document.getElementById("pregunta1")
var arrayrespuestas=Array.from(respuestas);
var cont=0;
var cont2=0;
var cont3=0;
var puntaje = 0;
var contador= 0;
var boton=document.getElementById("boton");
var puntos=document.getElementById("puntos");
var imagen=document.getElementById("imagen");
puntos.innerHTML="Puntos:"+puntaje;
 
    
    

arrayrespuestas.forEach(resp => {
    resp.addEventListener("click",()=>{
if(resp.id==="Res1"){
resultado.innerHTML="correcto"
cont=cont+1;
puntaje++;

}
 else if(resp.id==="Res2"||resp.id==="Res3"||resp.id==="Res4") {
  resultado.innerHTML="incorrecto"
  
  cont=cont+1;
   
}

if(cont>=2){
    resultado.innerHTML=" "
    return;
};
console.log("Puntaje actual: " + puntaje);
console.log("contador"+contador);
puntos.innerHTML="Puntos:"+puntaje;
    })
})




function cambiarcontador(){
  contador=contador+1;

  if (contador===1){
     
  pregunta.innerHTML="¿Quien NO es enemigo de Clay en la primer temporada?";
  respuesta1.innerHTML="Bryce Walker";
  respuesta2.innerHTML="Alex Standall";
  respuesta3.innerHTML="Marcus";
  respuesta4.innerHTML="Justin Foley";
  resultado.innerHTML=" ";
 
  
arrayrespuestas.forEach(resp => {
  resp.addEventListener("click",()=>{

if(resp.id==="Res2"){
resultado.innerHTML="correcto"
cont2=cont2+1
puntaje++;

}
 else if(resp.id==="Res1") {
  resultado.innerHTML="incorrecto"
  puntaje=puntaje-1;
  cont2=cont2+1
  
}
else if(resp.id==="Res3"||resp.id==="Res4"){
  resultado.innerHTML="incorrecto"
  
  cont2=cont2+1

}
if(cont2>=2){
  resultado.innerHTML=" "
  return;
}
    console.log("Puntaje actual: " + puntaje);
    puntos.innerHTML="Puntos:"+puntaje;
})
})
  }



  
  

if (contador===2){
    
  
   

    

    
 
  pregunta.innerHTML="¿Porque Tyler intenta matar a todos en la segunda temporada?";
    respuesta1.innerHTML="Sus amigos lo abandonaron";
    respuesta2.innerHTML="Padece Psicopatia";
    respuesta3.innerHTML="Monty lo violo";
    respuesta4.innerHTML="Los atletas lo golpearon";
    resultado.innerHTML=" ";
    

    arrayrespuestas.forEach(resp => {
      resp.addEventListener("click",()=>{

    
    if(resp.id==="Res3"){
    resultado.innerHTML="correcto"
    puntaje++;
    
    cont3=cont3+1
    }
   if(resp.id==="Res2") {
      resultado.innerHTML="incorrecto"
      puntaje=puntaje-1;
      cont3=cont3+1  
      
    }
    if(resp.id==="Res1"||resp.id==="Res4"){
      resultado.innerHTML="incorrecto"
      cont3=cont3+1 

    }
      if(cont3>=2){
        resultado.innerHTML=" "
        return;
      }
      if(puntaje===3){
        imagen.style.visibility="visible";}
      console.log("Puntaje actual: " + puntaje);
      puntos.innerHTML="Puntos:"+puntaje;
})
})

}
}

boton.onclick=cambiarcontador;

  






