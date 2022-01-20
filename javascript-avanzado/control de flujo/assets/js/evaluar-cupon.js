/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un cupón equivocado 
*/

function enterTicket() {
    let totalPrice = parseInt(document.getElementById('price').value);
    
    if (isNaN(totalPrice)){
        alert("Ese no es un precio válido");
    }
    else {
        let tktdiv = document.getElementById('tkt-div');
        tktdiv.innerHTML = `
        <label for="discount">Cupón:</label>
        <input type="text" name="discount" id="discount" placeholder="Ingresa el ticket">
        <input id="dnt-btn" type="button" value="Pagar" onclick="showPrices();">`;
    }
}

function showPrices() {
    let prices = document.getElementById('prices');
    let totalPrice = parseInt(document.getElementById('price').value);
    let ticket = document.getElementById('discount').value;
    let descuento;

    switch(ticket) {
        case "Bronce":
            descuento = 5;
            break;
        case "Plata":
            descuento = 10;
            break;
        case "Oro":
            descuento = 20;
            break;
        case "Platino":
            descuento = 25;
            break;
        default:
            descuento = 0;
    }

    let totalDiscount = totalPrice - totalPrice*descuento/100;

    if (descuento == 0){
        prices.innerHTML = '';
        alert('El cupón no es válido');
    }
    else {
        prices.innerHTML = `<p class="results">Precio total: $${totalPrice}</p>
                            <p class="results">Precio con descuento: $${totalDiscount}</p>`;
    }
    
}