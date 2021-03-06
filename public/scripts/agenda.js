
// Agenda

function Charla(props) {
    return (
        <div className="Charla"> 
            <div className="charla-parrafo">
              <img src={props.foto}></img>
            </div>
            <div className="contenido-charla">
                <h2>{props.titulo}</h2>
                <div className="charla-parrafo">
                    <p id="conferencista">Por {props.conferencista}</p> 
                    <p id="horario">{props.horario}</p>
                </div>    
                <a href={'/charla.html?charlaID=' + props.id} > ver mas &gt; </a>
            </div>
        </div>
    );
}

function CharlasDia(props) {
    // console.log(props.infoCharlas[0])
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
        <div className="charlas-dia" id={props.dia}>
            <h1>{props.dia}</h1>
            <ul>{TodasLasCharlas}</ul>
        </div>
    )
    
}

function Charlas(props) {
    const infoCharlas = props.listaCharlas;
    
    const listDias = props.listaDias;
    
    const listaPorDias = listDias.map((dias)=>
        <CharlasDia dia={dias} infoCharlas={infoCharlas}></CharlasDia>
    );
    return (
        <ul className="charlas-list">
            {listaPorDias}
        </ul>
    );
  }

const MenuDia = () => {
    return (
        <div className="menu-dias">
            <div className="contender-boton ">
                <button type="button" id="mostar-menu">lunes</button>
           
                <select name="seleccionar-dia" id="seleccionar-dia" multiple>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miercoles">Miercoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sábado">Sabado</option>
                    <option value="domingo">Domingo</option>
                </select>
            </div>
        </div>
    )
}

  function Agenda(props) {
    return (
        <div className="Agenda">
            <h1>Agenda</h1>
            <MenuDia />
            <Charlas listaCharlas={props.listaCharlas} listaDias={props.listaDias} />
        </div>
    );
  }


const listaDias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];

ReactDOM.render(<Agenda listaCharlas={informacion.charlas} listaDias={listaDias} /> , document.getElementById('agenda'));

// JS para mostrar el menu

const btnMostrarMenuDia = document.getElementById("mostar-menu");
const btnSelecionrDia = document.getElementById("seleccionar-dia");

const mostrarMenuDias = () => {
    const menu = document.getElementById("seleccionar-dia");
    console.log(menu.style.display);
    menu.style.display == 'block' ?
    menu.style.display = 'none' : menu.style.display = 'block';
}

const cambiarDia = (dia) => {
    const charlasDia = document.getElementsByClassName("charlas-dia");
    Object.values(charlasDia).map((diaCharla) => {
        diaCharla.id === dia.target.value ?
            diaCharla.style.display = 'block' : diaCharla.style.display = 'none';
    })
}

btnMostrarMenuDia.addEventListener("click", function () { mostrarMenuDias(); });
btnSelecionrDia.addEventListener("change", cambiarDia);
btnSelecionrDia.addEventListener("change", (e) => {
    console.log(btnMostrarMenuDia.innerText);
    btnMostrarMenuDia.innerText = e.target.value;
    mostrarMenuDias();
});
