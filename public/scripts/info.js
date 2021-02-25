const talleres = [
    {
        titulo: 'Taller de genética, genómica y evolución',
        tallerista: 'Dr. Luis José Delaye Arredondo',
        fechas: ['lunes 17:05', 'martes 17:05'],
        infoTaller: 'info taller',
        requisitos: ['por definir'],
        id: '1'
    },
    {
        titulo: 'Taller de Biología Sintética básica',
        tallerista: 'Dr. Luis Joel Figueroa Yañez',
        fechas : [ 'lunes 18:25', 'martes 18:25', 'miercoles 17:05'],
        infoTaller: 'info taller',
        requisitos: ['por definir'],
        id: '2'
    },
    {
        titulo: 'Taller básico de fotografía científica: La ciencia a través de un lente',
        tallerista: 'C. Kassandra Edith Muros Ramos',
        fechas : [ 'martes 14:20', 'miercoles 13:15' ],
        infoTaller: 'Es un taller de introducción a los conceptos básicos de la fotografía como manejo de la luz, composición, encuadres, los elementos básicos de la comunicación visual. El analizar los principios de la fotografía científica y como es que se lleva acabo el proceso de documentación de un proyecto de investigación científica.',
        requisitos: ['Hojas blancas', 'lapicero', 'dispositivo fotografico: cámara fotográfica profesional o en su caso dipositivo móvil', 'Adobe Lightroom'],
        id: '3'
    },
    {
        titulo: 'Genética : Un paso fuera del aula.',
        tallerista: 'Ing. Miguel Fernando Espitia Verdugo',
        fechas: ['miercoles 18:25', 'viernes 18:25', 'sabado 12:10'],
        infoTaller: 'información',
        requisitos: ['por definir'],
        id: '4'
    },
    {
        titulo: 'Tu Pokédex en la vida real: Programa tu clasificador de animales con redes neuronales artificiales',
        tallerista: 'Lic. Rodolfo Ferro Pérez',
        fechas : [ 'jueves 17:05', ],
        infoTaller: 'La inteligencia artificial (IA) se ha utilizado y continúa evolucionando para resolver muchos problemas, explorar diferentes dominios de la ciencia y desarrollar aplicaciones para el día a día. Seguro habrás notado que tu red social es capaz de encontrar tu rostro en fotografías e identificar a tus amigas y amigos. ¿Te has preguntado cómo funcionan estos algoritmos? En este taller aprenderemos el funcionamiento básico detrás y cómo podemos aplicarlo a un dominio específico: crear un clasificador de especies que puedes adaptar para tu propio conjunto de datos.',
        requisitos: ['Computadora', 'Conexión a internet'],
        id: '5'
    },
    {
        titulo: 'Taller ¿Cómo hacer divulgación científica?',
        tallerista: 'Lic. Diana Laura Vázquez Mendoza',
        fechas : [ 'viernes 17:05', 'domingo 7 18:25' ],
        infoTaller: 'faltan info',
        requisitos: ['por definir'],
        id: '6'
    },
    {
        titulo: 'Taller Evolución de bacterias',
        tallerista: 'Mtra. Paz Catalina Gutiérrez Rosas',
        fechas : [ 'sabado 17:05',],
        infoTaller: 'Vivimos en el Antropoceno, época geológica que refleja el impacto del hombre sobre la tierra. Añadiría que vamos de la mano con un microbioceno: evolucionamos entre microbios y a partir de ellos. Están en todas partes. Se mueven entre organismos, animales y humanos, entre el suelo, agua, aire, montañas y otros entornos, algunos extremos y remotos. Están en tu intestino y en tu boca, en la superficie de tu celular y en tu sopa. Conocer y aprender de los microbios nos regala una mirada al pasado, explica nuestro presente y nos ofrece múltiples recursos para el futuro. En el taller “Entre microbios te verás”, haremos una visita virtual al microbioma, repasaremos pasajes de la historia de los pioneros en observar microbios. Hablaremos de evolución, del dominio bacteriano y su contribución a las células eucariotas. Destacaremos algunas aplicaciones de los microbios a la remediación ambiental, la biotecnología, la industria y la investigación.',
        requisitos: ['por definir'],
        verMas: '7'
    },
]

const charlas = [
    {
        titulo: '¿Qué es la biología sintética?',
        conferencista: 'Ing. Yamile Minerva Castellanos Morales',
        fecha: 'lunes',
        horario: '12:10 - 13:15',
        foto: 'https://i2.wp.com/instyle.mx/wp-content/uploads/2020/04/ailor-moon.jpg?resize=1024%2C1024&ssl=1',
        infoCharla : 'Explorar los genomas de las bacterias y el uso de la secuenciación del genoma para rastrear enfermedades dañinas y resistencia a los antimicrobianos. Uno de los principales objetivos de la genómica de patógenos es determinar qué genes son importantes para que diferentes bacterias causen enfermedades. Al hacer esto, podemos comprender mejor cómo detenerlos. Mediante la secuenciación de genomas bacterianos, podemos identificar genes que causan enfermedades o ayudan a las bacterias a resistir los fármacos antimicrobianos.',
        id: '1'
    },
    {
        titulo: 'Bioseguridad, valores y riesgos en Biología Sintética',
        conferencista: 'Dr. Heber Torres Cordero',
        fecha: 'lunes',
        horario: '13:15 - 14:20',
        foto: 'https://i.ibb.co/xGF6Fjp/Heber-Formal-Heber-Torres.jpg',
        infoCharla : 'falta de rellanar',
        id: '2'
    },
    {
        titulo: 'Bioética en la biología sintética',
        conferencista: 'Lic. Félix Eusebio Medrano San Elías',
        fecha: 'lunes',
        horario: '14:20 - 15:25',
        foto: 'https://i.ibb.co/YcxnvPw/F-LIX-EUSEBIO.jpg',
        infoCharla : 'falta de rellanar',
        id: '3'
    },
    {
        titulo: 'Transdisciplina en la biología sintética',
        conferencista: 'Mtra. Denisse Ayala Hernández',
        fecha: 'lunes',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/1GY5KJ3/IMG-3825-DENISSE-AYALA-HERNANDEZ.jpg',
        infoCharla : 'falta de rellanar',
        id: '4'
    },
    {
        titulo: 'Aquí me quedé ',
        conferencista: 'C. Kassandra Edith Muros Ramos',
        fecha: 'miercoles',
        horario: '17:05 - 17:05',
        foto: 'https://i2.wp.com/instyle.mx/wp-content/uploads/2020/04/ailor-moon.jpg?resize=1024%2C1024&ssl=1',
        id: '5'
    },
    {
        titulo: 'Bioseguridad, valores y riesgos en Biología Sintética',
        conferencista: 'C. Consuelo Ruth Loayza Vedia y C. Marcela Farfán',
        fecha: 'miercoles',
        horario: '17:05 - 17:05',
        foto: 'https://i2.wp.com/instyle.mx/wp-content/uploads/2020/04/ailor-moon.jpg?resize=1024%2C1024&ssl=1',
        id: '6'
    },
]


const informacion = {talleres, charlas}