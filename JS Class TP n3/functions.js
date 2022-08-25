/* 
--------------------------------------------
'Alvarado Lucas', 'B-11 | Desarrollador Web | Semi-Senior', 5, 'Ingles', 2, true, 250, 'Coordinador Grupo', false, 0

'Artigas Juan Luis', 'B-10 | Desarrollador Mobile | Junior', 2, 'Ingles', 0, true, 100, undefined, false, 7500

'Casas Kevin', 'B-2 | Analista en Sistemas | Senior', 20, 'Ingles', 1, true, 350, 'Lider de Equipo', true, 0
--------------------------------------------
Sueldo Bruto = 
Sueldo básico + Antiguedad + IdiomaExtranjero + Titulo de Grado + Presentismo + 
Funcion (coordinar... etc)+ Adicionales * Objetivos + Adicionales Voluntarios.

-------------------------

Retenciones: Jubilacion (11% del Sueldo básico) + Obra social (3% Sueldo Básico) + Sindicato (1% del sueldo Básicoo)

-------------------------

Calcular Sueldo Neto = Sueldo Bruto - Retenciones
*/

class CEmpleado{
    constructor(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, jubilacion, obraSocial, adicional){
        this.nombreC = nombreC;
        this.categoria = categoria;
        this.antiguedad = antiguedad;
        this.idioma = idioma;
        this.hijosG = hijosG;
        this.presentismo = presentismo;
        this.km = km;
        this.funcion = funcion;
        this.sindicato = sindicato;
        this.jubilacion = jubilacion;
        this.obraSocial = obraSocial;
        this.adicional = adicional;
        //------------------------------
        //this.sueldoBasico = sueldoBasico;
    }
    CSueldoBruto(){
        
    }
    CRetenciones(){
        let retencionTotal;
        if(this.jubilacion==true)
            retencionTotal=retencionTotal + (this.sueldoBasico/100*11);
        if(this.obraSocial==true)
            retencionTotal=retencionTotal + (this.sueldoBasico/100*3);
        if(this.sindicato==true)
            retencionTotal=retencionTotal + (this.sueldoBasico/100*1);
        return retencionTotal;
    }
    //CSueldoNeto(){ return this.CsueldoBruto() - this.CRetenciones() + this.adicional; }
}

let Empleados = [];
let i = 0;
function CrearEmpleado(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, adicional){
    Empleados.push(new CEmpleado(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, adicional));
    Empleados.forEach(function(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, adicional) {
        console.log(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, adicional);
        document.getElementById("tablaM").innerHTML =
        document.getElementById("tablaM").innerHTML + 
        ' <tr> <td><label>' + Empleados[i].nombreC + 
        '</label></td> <td><label> ' + CCategoria(Empleados[i].categoria) + 
        '</label></td> <td><label>' + Empleados[i].antiguedad + ' A&ntilde;os' + 
        '</label></td> <td><label>' + Empleados[i].idioma + 
        '</label></td> <td><label>' + Empleados[i].hijosG + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].presentismo) + 
        '</label></td> <td><label>' + Empleados[i].km + 'Km' +
        '</label></td> <td><label>' + TrueFalse(Empleados[i].funcion) + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].sindicato) + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].jubilacion) + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].obraSocial) + 
        '</label></td> <td><label>' + '$' + Empleados[i].adicional + 
        '</label></td> <td><label>' + '$' + '' + 
        '</label></td> </tr> '
        i++;
    })
}

function TrueFalse(aux){
    if(aux==true)
        return 'Si';
    else if(aux==false)
        return 'No';
    else if(aux==undefined)
        return '-';
    else 
        return aux;
}        

function CCategoria(category){
    let a=0;
    let p1='', p2='', p3='';
    for(let i=0; i<category.length; i++){
        if(category[i]!='|')
            if(a==0)
                p1=p1+category[i];
            else if(a==1)
                p2=p2+category[i];
            else if(a==2)
                p3=p3+category[i];
            else
                i=10000;
        else
            a++;
    }
    p1 = p1.trimEnd();
    p2 = p2.trimEnd();
    p3 = p3.trimEnd();

    answer = p1 + ' ' + p3;
    return answer;
}