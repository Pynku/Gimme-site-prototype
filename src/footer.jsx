/* isso aqui é a criação de uma função com a variavel chamada footerComponent que o React vai chamar*/

function footer () {

    let footerComponent = (
      <section className='footer'> 
    
    <img src={logo2} className="logo" alt="logotipo_gimme"/>
    
      <p> Gimme • All rights reserved.</p>
    
        <div>
          <ul  className='list'>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Links</a></li>
          </ul>
       </div>
    
    </section>
    );
    
    return footerComponent;
    
    }
    