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
        console.log('Hello world, my name is' + this.nombre);
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
        //obj.hasOwnProperty() fltra las propiades de la cadenas de prototipos del objeto
        if (obj.hasOwnProperty(i)) {
            result += `${objNames}.${i} = ${obj[i]} \n`;
        }
    }
    return result;
}

console.log(showProps(myCar, 'myCar'));
//showProps(myCar, 'myCar');