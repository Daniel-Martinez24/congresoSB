
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

function CharlasDia(props) {
    console.log(props.infoCharlas[0])
    const charlasDia = props.infoCharlas.filter(charla => charla.fecha === props.dia);
    
    const TodasLasCharlas = charlasDia.map((charla) =>
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
        <div className="charlas-dia">
            <h1>{props.dia}</h1>
            <ul>{TodasLasCharlas}</ul>
        </div>
    )
    
}


function Agenda(props) {
    const infoCharlas = props.listaCharlas;
    
    console.log(props.listaDias[0])
    const listaDias = props.listaDias.map((dias)=>{
        <li>
            <CharlasDia dia={dias} infoCharlas={infoCharlas} />
        </li>
    });
    
    return (
        <div>
            <h1>Agenda</h1>
            <ul>
                {listaDias}
            </ul>
        </div>
    );
  }

const listaDias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

ReactDOM.render(<Agenda listaCharlas={informacion.charlas} listaDias={listaDias} /> , document.getElementById('agenda'));
