// Clases, molde que nos permite crear objetos

class Animal{
    /* nombre = null;
    especie = null; */
    // contructor es una funcion
    constructor (nombre, especie) {
        // this hace referencia al contexto en que se esta utilizando
        this.nombre = nombre;
        this.especie = especie;
    }

    //getters y setters
    // solo tienen este proposito de leer o modificaar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.nombre = especie;
    }
    
    //metodos == función 
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje);
    }

    //Metodos Estaticos
    // Pertenece solo a la calse y no se hereda a cada uno de los objetos
    static saludar(){
        return console.log('Hola soy un metodo estatico');
    }
} 

/* Animal.presentarse(); */
/* console.log(Animal.getNombre); */

Animal.saludar();
console.log(Animal.saludar);

//Estan heredando los atrubutos y los metodos de la clase que estan utilizando
const Animal1 = new Animal("Scobydoo" , "Perro"); // Creando un objeto
// instanciar P= hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas" , "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();


console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy';
console.log (Animal1.nombre);
console.log(Animal1);
Animal1.cambiarNombre('Scrappy');

/* Animal1.cambiarNombre("Oddie"); */
console.log(Animal1);
Animal1.cambiarNombre('Oddie'); //metodo para cambiar el valor

//Getters y Setters
// get = obtener el valor de un Atributo
// set = fijar o cambiar el valor de un Atributo

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);
/* Animal1.saludar(); */
