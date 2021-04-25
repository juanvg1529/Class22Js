let persona = {
    nombre: "juan",
    edad: '25',
    alergias: ['polvo', 'pendejos'],
    direccion: {
        calle: '75a',
        barrio: 'mirador',
        depto: '1',

    },
    saludar: function() {
        console.log('Hello world, my name is ' + this.nombre);
    }
};
console.log(persona.saludar());

//challenge
/* 1. Crea un objeto que tenga propiedades de una persona.
Como mínimo el nombre, y la edad. Crea una propiedad dentro
de este objeto cuyo valor sea una función anónima que determine 
si la persona es mayor de edad o no. Considera la mayoría de edad
como un valor mayor o igual a 18.Esta función no debe 
retornar nada, solo mostrar por consola el mensaje respectivo */

let person = {
    name: 'Diego',
    age: 25,
    Profeession: 'Engineer',
    male: true,
    female: false,
    hobbies: ['video games', 'music', 'exercise', 'cook'],
    Adult: function() {
        if (person.age > 18) {
            console.log(`${person.name} is an adult`);
        }
    }
};
person.Adult();
//2 punto

let producto = {
    id: "AAFC29",
    nombre: "producto",
    cantidad: 20,
    disponible: function() {
        if (producto.cantidad <= 0) {
            console.log('No hay cantidades suficientes');
        } else {
            console.log(`Existen en total: ${producto.cantidad} unidades.`);
        }
    },
};

// 2. Invoca la función aquí
producto.disponible()
    // El resultado debe ser un mensaje que indique que el producto
    // esta disponible

// 3. Modifica la propiedad "cantidad" a 0
producto.cantidad = 0;

// 4. Vuelve a invocar la función "disponible"
producto.disponible();
// El resultado debe ser un mensaje que indique que el producto
// no esta disponible

//Java script  guide objects
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
myObj.type = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str] = 'Valor de cadena';
myObj[rand] = 'Número aleatorio';
myObj[obj] = 'Object';
myObj[''] = 'Incluso una cadena vacía';

console.log(myObj);
var propertyName = 'make';
console.log(myCar[propertyName]);

//iterar sobre los objetos con con ciclos y condicionales
function showProps(obj, objNames) {
    let result = ``;
    for (let i in obj) {
        //obj.hasOwnProperty() fltra las propieades de la cadenas de prototipos del objeto
        if (obj.hasOwnProperty(i)) {
            result += `${objNames}.${i} = ${obj[i]} \n`;
        }
    }
    return result;
}

console.log(showProps(myCar, 'myCar'));
//showProps(myCar, 'myCar');

//enumerar propiedades de un objeto
function listAllPropierties(o) {
    let objectInspect;
    let resul = [];
    for (objectInspect = o; objectInspect != null; objectInspect = Object.getPrototypeOf(objectInspect)) {
        objectInspect = resul.concat(Object.getOwnPropertyNames(objectInspect));
    }
    return resul;
}
//iniciador de objeto
// var obj = {
//     property_1: value_1, // property_# puede ser un identificador...
//     2: value_2, // o un número...
//     // ...,
//     'property n': value_n
// }; // o una cadena
if (1 < 2) var x = { greeting: '¡Hola!' };

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
console.log(kenscar);
//Un objeto puede tener una propiedad que en sí misma es otro objeto. 
//Por ejemplo, supongamos que defines un objeto llamado person de la siguiente manera:

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
console.log(rand);

//nuevas instancias de los nuevos objetos
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken); //aqui llamo al objeto anterior de las personas para 
//el nombre del propietario
console.log(car2.owner.name);
console.log(car2);
console.log(car1.make);

//add propiertie to the object
car1.color = 'black';
console.log(car1);

//object.create method
// Propiedades y método de encapsulación para Animal
var Animal = {
    type: 'Invertebrates', // Valor predeterminado de las propiedades
    displayType: function() { // Método que mostrará el tipo de Animal
        console.log(this.type);
    }
};

// Crea un nuevo tipo de animal llamado animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Muestra: Invertebrates

// Crea un nuevo tipo de animal llamado Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Muestra: Fishes