function TalleresTarjeta(props) {
    return (
        <div className="talleres-tarjetas"> 
            <h2>{props.titulo}</h2>
            <p id="tallerista">{props.tallerista}</p> 
            <p id="fechaUno">{props.fechaUno}</p>
            <p id="fechaDos">{props.fechaDos}</p>
            <a href={props.verMas} > ver mas &gt; </a>
        </div>
    );
}

function Talleres() {
    return (
        <div> 

            <TalleresTarjeta 
            titulo='asdasdasdasdasdasdasdasd'
            tallerista='asdasdasdasdasdasdasdasd'
            fechaUno='asdasdasdasdasdasdasdasd'
            fechaDos='asdasdasdasdasdasdasdasd'
            verMas='#'
                            
            />

            <TalleresTarjeta 
            titulo='asdasdasdasdasdasdasdasd'
            tallerista='asdasdasdasdasdasdasdasd'
            fechaUno='asdasdasdasdasdasdasdasd'
            fechaDos='asdasdasdasdasdasdasdasd'
            verMas='#'
                            
            />

            <TalleresTarjeta 
            titulo='asdasdasdasdasdasdasdasd'
            tallerista='asdasdasdasdasdasdasdasd'
            fechaUno='asdasdasdasdasdasdasdasd'
            fechaDos='asdasdasdasdasdasdasdasd'
            verMas='#'
                            
            />
        </div>
    );
}

ReactDOM.render(Talleres() , document.getElementById('talleres'));
