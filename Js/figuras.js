function calculoDescuento(precio,descuento){
    const valorDecimal =  descuento/100;
    return precio - (precio * valorDecimal);
}
function calcularDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const inputDescuento = document.getElementById("InputDescuento");
    const precio = inputPrecio.value;
    const descuento = inputDescuento.value;
    const total = calculoDescuento(precio,descuento);
    const respuesta = document.getElementById("Resultado");
    respuesta.innerText = "El valor que debes pagar es de $" + total
    
}


