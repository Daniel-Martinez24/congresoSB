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
        foto: 'https://i.ibb.co/ccTCH0m/F-LIX-EUSEBIO-copia.jpg',
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
        titulo: 'Biología sintética como solucionador de problemáticas',
        conferencista: 'Dr. Leonardo Rios Solis',
        fecha: 'miercoles',
        horario: '12:10 - 13-15',
        foto: 'https://i2.wp.com/instyle.mx/wp-content/uploads/2020/04/ailor-moon.jpg?resize=1024%2C1024&ssl=1',
        infoCharla: 'falta de rellanar',
        id: '5'
    },
    {
        titulo: 'Naturaleza híbrida: Bioarte y biología creativa',
        conferencista: 'Mtra. Edith Medina',
        fecha: 'martes',
        horario: '13:15 - 14:20',
        foto: 'https://i.ibb.co/kqsqk3r/edith-02-Edith-Medina.jpg',
        infoCharla: 'por definir',
        id: '6'
    },
    {
        titulo: 'Biosensores microbianos',
        conferencista: 'Dr. José Eleazar Barboza Corona',
        fecha: 'martes',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/WW5CK42/traje-c-Jose-Eleazar-Barboza-Corona.jpg',
        infoCharla : 'por definir',
        id: '7'
    },
    {
        titulo: 'Desarrolla tu liderazgo científico en STEAM y conviértete en la persona que sueñas',
        conferencista: 'C. Carlos Adrián García Zambrano',
        fecha: 'miercoles',
        horario: '12:10 - 13:15',
        foto: 'https://i.ibb.co/3BmF1YP/Carlos-Adrian-Garcia-Zambrano.jpg',
        infoCharla : 'falta de rellanar',
        id: '8'
    },
    {
        titulo: 'Bioinformática en biología sintética',
        conferencista: 'Ing. Marlon Israel Nuño Rodríguez',
        fecha: 'miercoles',
        horario: '14:20 - 15:25',
        foto: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/WhatsApp%20Image%202020-10-06%20at%205.20.43%20PM.jpeg',
        infoCharla : 'falta de rellanar',
        id: '9'
    },
    {
        titulo: '¿Qué es y cómo funciona la Metodologías de Innovación FORTH?',
        conferencista: 'Lic. Rubén Gabriel Vargas González',
        fecha: 'miercoles',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/TYfxJCj/Rub-n-Vargas-Rub-n-Vargas.png',
        infoCharla: 'En esta charla hablaremos de lo que es la innovación y aprenderás lo que es la Metodología de Innovación FORTH y sus etapas.',
        id: '10'
    },
    {
        titulo: 'Marcas y patentes.  Todo lo que hay que saber para registrarlos exitosamente',
        conferencista: 'C. Daniel Antonio Tierradentro Barrera',
        fecha: 'jueves',
        horario: '12:10 - 13:15',
        foto: 'https://i.ibb.co/5k8BfHB/Daniel-Tierradentro.jpg',
        infoCharla: 'Los registros de marca y patentes requieren tener un conocimiento basico para su tramite. En el taller abordaremos los principales problemas y conocimientos para poder realizar el registro de una marca o patente de manera exitosa',
        id: '11'
    },
    {
        titulo: 'Ecotecnias desde la perspectiva de la economía ecológica y la economía ambiental: ¿La biología sintética para sanear la cuenca del Río Santiago',
        conferencista: 'C. Pedro Chávez Gómez',
        fecha: 'jueves',
        horario: '13:15 - 14:20',
        foto: '',
        infoCharla : 'por definir',
        id: '12'
    },
    {
        titulo: 'Bioeconomía 4.0: Cómo la biotecnología va a transformar al mundo en 2030',
        conferencista: 'Ing. Daniel Dominguez Gomez',
        fecha: 'jueves',
        horario: '14:20 - 15:25',
        foto: 'https://i.ibb.co/LRWw34P/27-07-2019-Retrato-Daniel-1-1-Daniel-Dominguez.jpg',
        infoCharla : 'Exploraremos cómo los avances en la biología sintética y su intersección con otras biotecnologías y tecnologías digitales están creando una nueva bioeconomía. Hablaremos sobre la situación de la biología sintética en América Latina y sobre algunas claves para el futuro.',
        id: '13'
    },
    {
        titulo: 'Biosensor Biólogico para arsénico',
        conferencista: 'C. Consuelo Ruth Loayza Vedia y C. Marcela Farfán',
        fecha: 'jueves',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/y54m0gm/87c38815-daf0-497a-b9c0-f57dcbd3e17d-Marcela-Farf-n-Crisp-n.jpg',
        infoCharla : 'De parte de Igem Bolivia estaremos presentando a un biosensor biológico para la detección de arsénico en agua, el impacto que tiene el arsénico en el medio ambiente, los problemas que trae a la salud humana el consumo de agua contaminada por arsénico, una solución para este problema causado por la contaminación por arsénico, explicaremos que son los biosensores y como podemos diseñar un biosensor.',
        id: '14'
    },
    {
        titulo: '¿Como ser un Biologo Sintetico en America Latina y sobrevivir en el intento?',
        conferencista: 'Mtro. Ricardo Camilo Chávez Martinez',
        fecha: 'viernes',
        horario: '12:10 - 13:15',
        foto: 'https://i.ibb.co/Tr3dLTy/Ricardo-Camilo-Chavez-Ricardo-Camilo-Chavez.jpg',
        infoCharla : 'por definir',
        id: '15'
    },
    {
        titulo: 'Ventas 101',
        conferencista: 'Lic. Luis Alonso Velázquez Lópezs',
        fecha: 'viernes',
        horario: '13-15 - 14:20',
        foto: 'https://i.ibb.co/PtLsqZh/Luis-Alonso.jpg',
        infoCharla: 'Conferencia informativa y formativa sobre los fundamentos de la fisionomía del vendedor y el proceso de ventas enfocado en el cluster de la tecnología y la ciencia, compartiendo un enfoque que contribuya a hacer más efectiva su relación comercial con sus aliados estratégicos.',
        id: '16'
    },
    {
        titulo: 'Conoce a tu cliente: Marketing y redes sociales',
        conferencista: 'C. Ángel Alejandro González Roman',
        fecha: 'viernes',
        horario: '14:20 - 15:25',
        foto: 'https://i.ibb.co/cYQ2GDT/me-formal-Angel-Gonzalez.jpg',
        infoCharla: 'Las redes sociales tienen el potencial de llevar nuestras ideas y soluciones a nuevas alturas, ya sea un producto, un servicio o una novedosa invención, a través de esta conferencia se conocerán diferentes herramientas y recomendaciones para determinar a quien irá dirigida nuestra solución y cómo podemos aprovechar las pautas publicitarias en redes para impulsar nuestras iniciativas.',
        id: '17'
    },
    {
        titulo: '¿Cómo conseguir patrocinios?',
        conferencista: 'C. Carlos Felipe Ávila Gómez',
        fecha: 'viernes',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/PhXNF4P/FELIPE-VILA.jpg',
        infoCharla : 'por definir',
        id: '18'
    },
    {
        titulo: 'AI Impacts: a developers perspective on creating digital solutions.',
        conferencista: 'C. Leonardo Covarrubias García',
        fecha: 'sábado',
        horario: '13:15 - 14:20',
        foto: 'https://i.ibb.co/ctKMYhn/20201016-183634-Leonardo-Covarrubias-Garc-a.jpg',
        infoCharla : "ai Impacts. A Developer's Perspective on Creating Digital Solutions es un llamado a los afines biológicos, una muestra sin filtro del termómetro de una persona ajena al área con la necesidad de crear soluciones digitales a partir de una tecnología como la inteligencia artificial. Y entonces, conozcamos una punto en donde coinciden las búsquedas de estas tecnologías emergentes.",
        id: '19'
    },
    {
        titulo: 'Birobótica',
        conferencista: 'C. Noel Marcial Vazquez Sojo',
        fecha: 'sábado',
        horario: '14:20 - 15:25',
        foto: 'https://i.ibb.co/37RSWWB/Whats-App-Image-2021-02-19-at-12-16-59-Noel-V-zquez.jpg',
        infoCharla : 'Introducción breve a los sistemas microelectromecánicos y a los sistemas biomicroelectromecánicos.',
        id: '20'
    },
    {
        titulo: 'Genomas bacterianos: Brotes de enfermedad y resistencia a los antimicrobianos',
        conferencista: 'C. Maria Teresa Alvarado Parra',
        fecha: 'sábado',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/q7m9Zw1/Teresita-Parra.jpg',
        infoCharla: 'Explorar los genomas de las bacterias y el uso de la secuenciación del genoma para rastrear enfermedades dañinas y resistencia a los antimicrobianos. Uno de los principales objetivos de la genómica de patógenos es determinar qué genes son importantes para que diferentes bacterias causen enfermedades. Al hacer esto, podemos comprender mejor cómo detenerlos. Mediante la secuenciación de genomas bacterianos, podemos identificar genes que causan enfermedades o ayudan a las bacterias a resistir los fármacos antimicrobianos.',
        id: '21'
    },
    {
        titulo: '¿Cómo hacer y presentar un pitch exitoso?',
        conferencista: 'Ing. Alejandro Espinosa Carrillo',
        fecha: 'domingo',
        horario: '16:00 - 17:05',
        foto: 'https://i.ibb.co/tp83GBv/20200805-160823-Alejandro-Espinosa.jpg',
        infoCharla: 'por definir',
        id: '22'
    },
    {
        titulo: 'Bio Empresas: Generando impacto global un día a la vez.',
        conferencista: 'C. Rosendo Alejandro López López',
        fecha: 'domingo',
        horario: '17:05 - 18:25',
        foto: 'https://i.ibb.co/chp5MYH/Whats-App-Image-2021-02-17-at-12-06-28-AM-Rosendo-Lopez.jpg',
        infoCharla: 'Descubre como las empresas de base tecnológica y biológica están convirtiendo problemas en oportunidades rentables y de alto valor para la sociedad y el medio ambiente.',
        id: '23'
    },
]


const informacion = {talleres, charlas}