function TalleresTarjeta(props) {
    const listaFechas = props.fechas;
    const Fechas = listaFechas.map((fechas) => 
        <li>{fechas}</li>    
    ); 
    return (
        <div className="talleres-tarjetas"> 
            <h2>{props.titulo}</h2>
            <p id="tallerista">{props.tallerista}</p> 
            
            <ul>{Fechas} </ul>
            
            <a href={props.verMas} > ver mas &gt; </a>
        </div>
    );
}

function Talleres(props) {
    const infoTalleres = props.listaTalleres;
    const TodosTalleres = infoTalleres.map((taller) =>
      <li>
            <TalleresTarjeta 
            titulo={taller.titulo}
            tallerista={taller.tallerista}
            fechas = {taller.fechas}
            verMas={taller.verMas}
            />
      </li>
    );
    return (
        <div>
            <h1>Talleres</h1>
            <ul>{TodosTalleres}</ul>
      </div>
    );
  }

ReactDOM.render(<Talleres listaTalleres={informacion.talleres} /> , document.getElementById('talleres'));
