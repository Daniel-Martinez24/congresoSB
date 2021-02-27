/**
* @param String name
* @return String
*/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



var tallerID = getParameterByName('tallerID');

const idExiste = (infoTaller) => {
    document.getElementById("titulo-taller").innerText = infoTaller.titulo;
    document.getElementById("tallerista").innerText = 'Por '+ infoTaller.tallerista;
    document.getElementById("infoTaller").innerText = infoTaller.infoTaller;


    document.getElementById("horaInicio").innerText = infoTaller.fechas[0];
    document.getElementById("horaFin").innerText = infoTaller.fechas[1];

    ReactDOM.render(<RequistosTaller requisitos={infoTaller.requisitos} /> , document.getElementById('requistos'));



}

const encontrarID = () => {
    let seEncontro = false ;
    informacion.talleres.map((tallerdelist) => {
        if (tallerID === tallerdelist.id) {
            seEncontro = true;
            idExiste(tallerdelist);
        }
    })
    return seEncontro
}

const escribirInformacion = (encontrarID) => {
    if (!encontrarID()) window.history.back();
}

escribirInformacion(encontrarID);

function RequistosTaller(props) {
   
    const listaRequisitos = props.requisitos;
    const Lrequistio = listaRequisitos.map((requisito) => 
        <li>{requisito}</li>    
    );
    return (
        <ul className="list"> 
            {Lrequistio}
        </ul>
    );
}

