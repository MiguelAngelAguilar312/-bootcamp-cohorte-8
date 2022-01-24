class Animal {      //Creación de la clase Animal (Primera letra mayúscula
    constructor(nombre,edad,especie,revisado) {   //Constructor que define como instanciar un objeto del tipo animal
    this.nombre = nombre;   //la variable que entra al constructor 'nombre' se asigna a this.nombre, donde this es la referencia al objeto que se crea -> referenciaalobjeto.nombre
    this.edad = edad;   //la variable que entra al constructor 'edad' se asigna a this.edad, donde this es la referencia al objeto que se crea -> referenciaalobjeto.edad
    this.especie = especie; //la variable que entra al constructor 'especie' se asigna a this.especie, donde this es la referencia al objeto que se crea -> referenciaalobjeto.especie
    this.revisado = revisado; //la variable que entra al constructor 'revisado' se asigna a this.revisado, donde this es la referencia al objeto que se crea -> referenciaalobjeto.revisado
    this.enfermo = false; //la variable que entra al constructor 'enfermo' se asigna a this.enfermo donde this es la referencia al objeto que se crea -> referenciaalobjeto.enfermo
    }

    saludar(){  //Se crea un metodo para la clase llamado 'saludar' y no ingresan parametros
        return console.log(`Hola mi nombre es ${this.nombre} con ${this.edad} años de edad y de especie "${this.especie}"`);    //Se imprime en consola el mensaje con sus respectivas referencias a los atributos de la clase
    }
}

class Veterinario{      //Se crea clase veterinario
    constructor(){
        this.cantidadPacientes = 0; //Se asigna valor a cantidadPacientes
        this.pacientesRevisados = 0;    //Se asigna valor a pacientesRevisados
        this.listaPacientes = []; //el atributo listaPacientes va a recibir un arreglo de Valores/Objetos
    }
    agregarPaciente(paciente){      //Se crea metodo para agregar pacientes, con una parametro de entrada (paciente)
        this.listaPacientes.push(paciente); //En el arreglo de listaPaciente se apila un paciente nuevo
        this.cantidadPacientes+=1;  //Cada que se ejecuta el metodo agregarPaciente, se suma en 1 en cantidadPacientes
        let mensaje = 'Paciente agregado'; //Se crea una variable mensaje donde indique que se ejecuto el metodo agregarPaciente
        return document.write(`${mensaje} <br>`)  //Se regresa el mensaje con salto de linea y se escribe en el documento html
    }
    mostrarLista(){             //Se crea metodo para mostrar todos los elementos de listaPacientes
        for(let i=0;i<this.listaPacientes.length;i++){      //Se hace un ciclo for para imprimir el atributo nombre de cada elemento de la listaPacientes
            document.write(`El paciente ${i} se llama ${this.listaPacientes[i].nombre} <br>`);
        }
        document.write(`Hay ${this.cantidadPacientes} pacientes atendidos <br>`);    //Se muestra la cantidad de pacientes del objeto Veterinario
    }

    revisarPaciente(paciente){      //Se crea un metodo donde se valida si el paciente ya fue revisado
        if(paciente.revisado === false){    //Si en el objeto paciente.revisado el valor es false, significa que no ha sido revisado
            paciente.revisado = true;   //Si no ha sido revisado, el atributo revisado del objeto paciente se cambia a true
            document.write(`El paciente ${paciente.nombre} acaba de ser revisado <br>`); //Se imprime que paciente con atributo nombre, acaba de ser revisado
        }
        else{
            document.write(`El paciente ${paciente.nombre} ya fue revisado <br>`);
        }
        
    }

    modificarPacientesRevisados(){      //Se agrega un metodo para que el atributo pacientesRevisados, sume en 1
         this.pacientesRevisados++;
    }
}
const animalito1 = new Animal('Manchas',5,'Perro',false); //Se hace una instancia de la clase Animal llamado Animalito donde, new Animal(parametros); manda llamar al constructor de la clase, y los Parametros son nombre=Manchas,edad=5, especie=perro, revisado = false
const animalito2 = new Animal('Galleta',2,'Gato',true); //Se crea una nueva instancia de Animal llamado Animalito2
console.log(animalito1);    //Se imprime en consola el objeto animalito1
console.log(animalito2);    //Se imprime en consola el objeto animalito2

const veterinariaPanchito = new Veterinario();

veterinariaPanchito.agregarPaciente(animalito1);   //Se llama al metodo agregarPaciente del objeto veterinariaPanchito, el parametro que ingresa al metodo es el objeto animalito1
veterinariaPanchito.agregarPaciente(animalito2);   //Se llama al metodo agregarPaciente del objeto veterinariaPanchito, el parametro que ingresa al metodo es el objeto animalito2
veterinariaPanchito.mostrarLista();        //Se muestra la lista de pacientes que tiene el veterinariaPanchito
veterinariaPanchito.revisarPaciente(animalito1);   //Se llama al metodo revisar paciente, con el objeto animalito1 como parametro de entrada
veterinariaPanchito.modificarPacientesRevisados(); //Se suma en 1 los pacientes revisados por veterinariaPanchito
document.write(`El veterinario tiene ${veterinariaPanchito.pacientesRevisados} pacientes revisados <br>`); //Se despliega cuantos pacientes revisados tiene el veterinariaPanchito
veterinariaPanchito.revisarPaciente(animalito2);   //Se llama al metodo revisar paciente, con el objeto animalito2 como parametro de entrada
document.write(`El veterinario tiene ${veterinariaPanchito.pacientesRevisados} pacientes revisados`); //Se despliega cuantos pacientes revisados tiene el veterinariaPanchito