/* Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0. */

class Carro{
    constructor (marca, color, modelo, velocidad , NumeroPuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.NumeroPuertas = NumeroPuertas;
        this.velocidad = velocidad;
    }

    get getMarca(){
        
        return this.marca; }

     set setMarca(marca){
         this.marca= marca;
        
     }

     get getColor(){
        
        return this.color ;
    }
     set setColor(color){
         this.color= color;
        
     }
     get getModelo(){
        
        return this.modelo;
    }
     set setModelo(modelo){
         this.modelo= modelo;
        
     }
     get getNumeroPuertas(){
        
        return this.NumeroPuertas ;
    }
     set setNumeroPuertas(NumeroPuertas){
         this.NumeroPuertas= NumeroPuertas;
        
     }

     get getVelociad(){
        
        return this.velocidad;
    }
     set setVelocidad(velocidad){
         this.velocidad= velocidad;
        
     }
 
     acelerar(){
         this.velocidad += 1;
     }
     reversa(){
         this.velocidad -= 1;
     }

     frenar(){
        this.velocidad = 0;
     }

     toString(){
         document.write(`marca ${this.marca}, modelo ${this.modelo}, color ${this.color}, numero de puertas ${this.NumeroPuertas}, velocidad ${this.velocidad} <br/>` );
     }
}

let carro = new Carro;
const carro1 = new Carro ("w","Azul","Bochito", "5", 2);
carro1.toString();
carro1.acelerar();
carro1.toString();
carro1.reversa();
carro1.frenar();
carro1.toString();
