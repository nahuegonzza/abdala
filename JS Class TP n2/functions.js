/* 
Escribir un programa que imprima la información 
(nombre, año de ingreso, salario, dirección) 
de tres empleados creando una clase llamada
'CEmpleado'. La salida debe ser la siguiente:

Name        Year of joining        Address

Robert        1994        64C- WallsStreat

Sam        2000        68D- WallsStreat

John        1999        26B- WallsStreat
*/

class CEmpleado{
    constructor(nombre, anio, direccion){
        this.nombre = nombre;
        this.anio = anio;
        this.direccion = direccion;
    }
}

let Empleados = [];
let i = 0;
function CrearEmpleado(nombre, anio, direccion){
    Empleados.push(new CEmpleado(nombre,anio, direccion));
    Empleados.forEach(function(nombre, anio, direccion) {
        console.log(nombre, anio, direccion);
        document.getElementById("tablaM").innerHTML =
        document.getElementById("tablaM").innerHTML + 
        ' <tr> <td width="25%"><label>' + Empleados[i].nombre + 
        '</label></td> <td width="25%"><label> ' + Empleados[i].anio + 
        '</label></td> <td width="50%"><label>' + Empleados[i].direccion + 
        '</label></td> </tr> '
        i++;
    })
}