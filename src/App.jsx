import React, { useEffect, useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom';


  const App =  () => {
const [androide , setAndroide] = useState('/es esta.png')
const [krillin , setKrillin] = useState('/krillin-quieto.gif')
const [bulma2Image, setBulma2Image] = useState('/bulma2.png');
useEffect(() => {
  const interval = setInterval(() => {
    // Cambiar la imagen entre dos imágenes diferentes
    setBulma2Image(prevImage => 
      prevImage === '/bulma2.png' ? '/bulma3.png' : '/bulma2.png'
    );
  }, 400); // Cambiar cada 3 segundos

  // Limpiar el intervalo cuando el componente se desmonte
  return () => clearInterval(interval);
}, []);

const sacarManos = () => {
  setAndroide('/cambio.png')
  setTimeout(() => {
    setAndroide('/es esta.png'); 
  }, 1050); 
}
const explotarAKrillin = () => {
  sacarManos()
  setKrillin('/krillin.gif')
  setTimeout(() => {
    setKrillin('/krillin-quieto.gif'); 
  }, 2800); 
}
const bulmaHabla = () => {
  const audio = new Audio('/final.mp3'); 
  audio.play();
}

  return (
    <>
    <div className='inicio'>
      <span>Te dejo un link de mediafire que te va a llevar a descargar un video, leyendo un poco la pagina te cuento un poco de que trata el video :) Tambien si queres hace click en Krillin y mira a 18 ;)  </span>
      {<Link to={'https://www.mediafire.com/file/y5hd1w9fqyp8fxl/Bulma+y+18+se+van+de+compras....mpg/file'}>https://www.mediafire.com/file/y5hd1w9fqyp8fxl/Bulma+y+18+se+van+de+compras....mpg/file
      </Link>}
      <span>               No tiene publicidad ni nada Link directo y encima audio latino! </span>
    </div>
    
    <div className="contenedorDeLaPagina">
      
      <img className='androide18' src={androide} alt="Androide número 18" />
      <div className='titulos'>
      <h1 className='titulo1'>Androide Numero 18 de Dragon Ball Z </h1>
      <img className='publicidad' src="/seguime.png" alt="El Jardin Del H Twitter/X" />
      <div className='contenedorDeParrafos'>
      <p className='parrafo'>Bueno primero si te preguntas acerca del video que podes descargar arriba, tengo un adelanto del video en nuestro X, que es: "kushruchix" , estamos como "El Jardin Del H"</p>
      <p className='parrafo'>Pero.. De que trata el video??</p>
      <p className='parrafo'>El Video como quizas viste en la preview que subi a twitter, cuenta la aventura que tuvieron Bulma y Androide 18, (las voces del video estan en latino!) fueron de compras pero tuvieron un problema...</p>
      <p className='parrafo'>El auto no arrancaba! y encima de todo estaban solas, ni Goku, Ni Vegetta, ni Krillin, ni si quiera Yamcha, menos que menos Piccoro, o por lo menos Gohan, pero no nadie!!</p>
      <img src="03.jpg" alt="Bulma y Numero 18 van de compras" />
      <p className='parrafo'>Estan desesperadas y encima en medio de la nada, 18 sugiere buscar algunos hombres que puedan ayudarlas, y Bulma ve a lo lejos una casa dudosa, entonces le dice a 18 de ir a pedir ayuda que alla hay unos hombres, los hombres sospechosos ven por la ventana y emocionados salen a hablar con Bulma, Bulma le cuenta la situacion a los siniestros hombres, a lo que responden que tienen sus herramientas adentro de la casa, peroooo que estan muy cansados para ir a buscarlos ellos... </p>
      <p className='parrafo'>Asi que le preguntan a Bulma si puede ir a buscarlos por ellos, todo bastante por no decir MUY sospechoso, a lo que 18 empieza a dudar, pero Bulma con inocencia le dice que vayan... </p>
      <video className='video' src='/pesa.mp4' autoPlay controls ></video>
      <div className='contenedorDeParrafo2'>
      <p className='parrafo'> Como se puede ver en el video, Bulma termina persuadiendo a 18 a pesar de las dudas y van a buscar las herramientas </p>
      <p className='parrafo'>Pero bueno... obviamente el escenario no era para nada favorable para estas 2, el interior de la casa era de lo mas extraño y sospechoso, parecia como una especie de calabozo.. </p>
      <p className='parrafo'>Y en medio de la sorpresa, le apagan la luz, le cierran la puerta, y bueno el resto de la historia la podes ver en el video... :) </p>
      <img onClick={bulmaHabla} className='bulma' src="/bulma.png" alt="Bulma Dragon Ball Z" />
      <div className='contenedorDeParrafo3'>
      <p>Hace Click en Bulma puede que pase algo ;)</p>
      </div>
      <div className='contenedorDeParrafo4'>
      <p>Bueno hasta aqui llegamos, espero disfruten mucho el video!! Nos vemos y suerte!!</p>
      </div>
      <img className='bulma2' src={bulma2Image} alt="Bulma FanArt" />
      </div>
      </div>

      <h2 className='titulo2'>Lo que ves a la  izquierda de todo es un FanArt de numero 18, pero si tocas a Krillin puede que tenga un secreto...</h2>
      </div>

      <img className='ElJardinDelH' src="/capaz.jpg" alt="El Jardin Del H" /> 
      <div>
        <img onClick={explotarAKrillin }   className='krilin' src={krillin} alt="Krillin" />
      </div>

    </div>
    </>
  );
}

export default App;