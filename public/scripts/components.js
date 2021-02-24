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
            
            <a href={ '/taller.html?tallerID=' + props.id} > ver mas &gt; </a>
        </div>
    );
}

function Talleres(props) {
    const infoTalleres = props.listaTalleres;
    const TodosTalleres = infoTalleres.map((taller) =>
      <li className="todos-los-talleres" >
            <TalleresTarjeta 
            titulo={taller.titulo}
            tallerista={taller.tallerista}
            fechas = {taller.fechas}
            id={taller.id}
            />
      </li>
    );
    return (
        <div>
            <h1>Talleres</h1>
            <ul id="todos-los-talleres">{TodosTalleres}</ul>
      </div>
    );
  }

ReactDOM.render(<Talleres listaTalleres={informacion.talleres} /> , document.getElementById('talleres'));
