$(document).ready(function() {
$ ('#form').on ('submit', function (e) {

    let Number = parseInt($('#idhero').val())
    console.log(typeof number)
    e.preventDefault()
    validar(Number)
})

//crear una función para validar el número

function validar(num){
    let expresion = /^[0-9]+$/;
    if(expresion.test(num)){
       
    }else{
        alert('ingrese un número valido')       
    }
    
}


})
   