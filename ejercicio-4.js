let nombre = "Leandro";
let apellido = "Rech";
let estudiante = nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numeroDeLetras = (estudiante).length;
console.log(numeroDeLetras);

let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

let ultimaLetraApellido = apellido.charAt(3);
console.log(ultimaLetraApellido);

let estudianteSinEspacios = "   Leandro Rech";
console.log(estudianteSinEspacios.trimStart().length);

let contiene = nombre.includes("estudiante");
console.log(contiene);



