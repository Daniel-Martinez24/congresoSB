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

class Talleres extends React.Component {
    render() {
        return (
            <div>
                {this.props.listaTalleres}
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
}

const lista = {
    taller1 : {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    },
    taller2 : {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    },
    taller3 : {
        titulo: 'ndasondoasdnasodna',
        tallerista: 'asdasdasdasdasdasdasdasd',
        fechaUno: 'asdasdasdasdasdasdasdasd',
        fechaDos: 'asdasdasdasdasdasdasdasd',
        verMas: '#'
    }
}

ReactDOM.render(<Talleres listaTalleres={'hola'} /> , document.getElementById('talleres'));
