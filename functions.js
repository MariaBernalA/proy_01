//Define la función sumar (add)
function add(a,b) {
    return a + b;
}

//Define la función restar (substract)
function substract(a,b) {
    return a - b;
}

//Define la función multiplicar (multiply)
function multiply(a,b) {
    return a + b;
}

//Define la función dividir (divide)
function divide(a,b) {
    if (b ==0) {
        return "Error: no se puede dividir entre cero"//Si el numero dado para dividir es 0 me retorna este mensaje y se mostrara en la consola
    } else {
        return a / b;
    }

}

exports.add = add;//exporto la funcion add para que el archivo app la pueda utilizar 
exports.substract = substract;//exporto la funcion substract para que el archivo app la pueda utilizar 
exports.multiply = multiply;//exporto la funcion multiply para que el archivo app la pueda utilizar 
exports.divide = divide;//exporto la funcion divide para que el archivo app la pueda utilizar 
