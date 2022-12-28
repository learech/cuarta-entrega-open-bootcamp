let nombre = "Leandro";
let apellido = "Rech";
let estudiante = nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numeroDeLetras = estudiante.length;
console.log(numeroDeLetras);

let primeraLetraNombre = nombre.substring(0,1);
console.log(primeraLetraNombre);

let ultimaLetraApellido = apellido.substring(apellido.length - 1, apellido.length);
console.log(ultimaLetraApellido);

let estudianteSinEspacios = estudiante.replace(/ /g, "");
console.log(estudianteSinEspacios);

let contiene = estudiante.includes(nombre);
console.log(contiene);



