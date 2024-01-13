//El nombre de una constante y se le asocia una funcion flecha
const mostrarRelog = () =>{
    //Cuerpo de la funcion flecha
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let min =  formatoHora(fecha.getMinutes());
    let sec =  formatoHora(fecha.getSeconds());
    
    document.getElementById('hora').innerHTML = `${hora}:${min}:${sec}`; //Recuperamos el elemento del div de hora y con el metodo inner sobre escribimos en el elemento

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dec'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()]; //getDay devuelve es un numero y con ese numero buscamos en el arreglo
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()]; //getDMonth devuelve es un numero y con ese numero buscamos en el arreglo
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana},${dia} ${mes}, ${anio}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora<10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarRelog,1000); //Cada segundo se manda a llamar la funcion mostrarReloj

