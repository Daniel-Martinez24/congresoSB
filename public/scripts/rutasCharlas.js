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

var charlaID = getParameterByName('charlaID');

const idExiste = (infoCharla) => {
    document.getElementById("foto").src = infoCharla.foto;
    document.getElementById("titulo").innerText = infoCharla.titulo;

    document.getElementById("conferencista").innerText = infoCharla.conferencista;
    document.getElementById("fecha").innerText = infoCharla.fecha;
    document.getElementById("horario").innerText = infoCharla.horario;
    document.getElementById("infoCharla").innerText = infoCharla.infoCharla
}

const encontrarID = () => {
    let seEncontro = false ;
    informacion.charlas.map((charla) => {
        if (charlaID === charla.id) {
            seEncontro = true;
            idExiste(charla);
        }
    })
    return seEncontro
}

const escribirInformacion = (encontrarID) => {
    if (!encontrarID()) window.history.back();
}

escribirInformacion(encontrarID);
