let parar = document.querySelector('.pause')
let  reiniciar= document.querySelector('.reiniciar')

let hora=0
let seg =0 
let min =0
let interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function pause(){
    clearInterval(interval)

}


function zerar(){
    clearInterval(interval)
   
     document.querySelector('#timeGeral').innerHTML= '00:00:00'
}
function iniciarCronometro(a){  
seg++
if(seg==60){
    seg=0  
    min++
    if(min==60){
        min=0
        hora++
    }
}

document.querySelector('#timeGeral').innerHTML= twoDigits(hora)+':'+twoDigits(min)+':'+twoDigits(seg)
}

function start(){
    iniciarCronometro()
  interval=  setInterval(iniciarCronometro,1000)

}

parar.addEventListener('click',pause)
reiniciar.addEventListener('click',zerar)