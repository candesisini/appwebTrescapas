class Persona {
    constructor(nombre, apellido, edad) {
      this.id = crypto.randomUUID(); 
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  }
  
  module.exports = Persona;
  