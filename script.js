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