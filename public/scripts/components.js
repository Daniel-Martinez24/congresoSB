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

function Talleres(props) {
    const infoTalleres = props.listaTalleres;
    const TodosTalleres = infoTalleres.map((taller) =>
      <li>
            <TalleresTarjeta 
            titulo={taller.titulo}
            tallerista={taller.tallerista}
            fechaUno={taller.fechaUno}
            fechaDos={taller.fechaDos}
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

const lista = [
    {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    },
    {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    },
    {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    }
]

ReactDOM.render(<Talleres listaTalleres={lista} /> , document.getElementById('talleres'));
