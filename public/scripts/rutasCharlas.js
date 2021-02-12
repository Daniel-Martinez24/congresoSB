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
    document.getElementById("img").src = infoCharla.foto;
    document.getElementById("titulo").innerText = infoCharla.titulo;
}

const encontrarID = () => {
    let variable =false ;
    informacion.charlas.map((charla) => {
        idExiste(charla);
        if (charlaID === charla.id) variable = true
    })
    return variable
}

const escribirInformacion = (encontrarID) => {
    if (!encontrarID()) window.history.back();
}

escribirInformacion(encontrarID);
