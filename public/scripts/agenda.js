
// Agenda

function Charla(props) {
    return (
        <div className="Charla"> 
            <img src={props.foto}></img>
            <h2>{props.titulo}</h2>
            <p id="conferencista">Por {props.conferencista}</p> 
            <p id="horario">{props.horario}</p> 
            <a href={props.id} > ver mas &gt; </a>
        </div>
    );
}

function Agenda(props) {
    const infoCharlas = props.listaCharlas;
    const TodasLasCharlas = infoCharlas.map((charla) =>
      <li>
            <Charla 
            titulo={charla.titulo}
            foto = {charla.foto}
            conferencista={charla.conferencista}
            fecha = {charla.fecha}
            horario = {charla.horario}
            id={charla.id}
            />
      </li>
    );
    return (
        <div>
            <h1>Agenda</h1>
            <ul>{TodasLasCharlas}</ul>
      </div>
    );
  }

  ReactDOM.render(<Agenda listaCharlas={informacion.charlas} /> , document.getElementById('agenda'));
