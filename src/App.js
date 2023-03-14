
import heroimg from './imgs/corpo1.png'
import human from './imgs/cinder.png'
import miraak from './imgs/miraak.jpg'
import maiq from './imgs/maiq.jpg'
import dagothur from './imgs/dagothur.jpg'
import logo2 from './imgs/logoplaceholder.png'

import './App.css';

function App() {
  return (
    <div className="App">
    <nav id="nav">
    
    <img src={logo2} className="logo" alt="logotipo_gimme"/>
    <div>
    
    <input type="search"/>
    <a href="#" className="loginbtn"> Login </a>
    
    </div>
    </nav>
    
    <section id="hero">
    
    <img src={heroimg} id="heroimg" alt="saturno comendo filho no estilo memphis"/>
    
    <div id="herotext">
    
    <div className="herocontent">
    <h1> Lorem ipsum dolor adipisicing elit</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus a accusamus aliquam maxime recusandae consectetur? Cumque, reiciendis error eos sunt sequi, eligendi tempore, assumenda temporibus similique optio ipsam illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos asperiores saepe totam atque architecto temporibus, inventore ex magni reiciendis ad, quaerat reprehenderit obcaecati est alias? Nisi, animi reiciendis. Vero!</p>
    </div>
    
    <div className="herocontent">
    <h1> Lorem ipsum dolor adipisicing</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum necessitatibus a accusamus aliquam maxime recusandae consectetur? Cumque, reiciendis error eos sunt sequi, eligendi tempore, assumenda temporibus similique optio ipsam illum.</p>
    <img src={human} alt="menina na bolona" id="hero-img2"/>
    </div>
    </div>
    
    
    </section>
    
    <section id="testimonials">
    
    <div className="card">
    <img src={miraak} className="testimonial-circle"/>
    <h2>Miraak</h2>
    <p>O que? No meu primeiro anuncio uma espécie de gato humanoide veio conversar comigo!? O que é aquilo?</p>
    </div>
    
    <div className="card">
    <img src={maiq} className="testimonial-circle"/>
    <h2>Maiq</h2>
    <p>Maiq gosta, maiq gosta muito porque maiq consegue comprar items de toda tamriel inclusive de dimensoes daedra</p>
    </div>
    
    <div className="card">
    <img src={dagothur} className="testimonial-circle"/>
    <h2>Dagoth'Ur</h2>
    <p>É claro que um Deus vai receber as ofertas de seus escravos. Você acha mesmo que eu levantaria um dedo?</p>
    </div>
    
    </section>
    </div>
    );
  }
  
  export default App;
  