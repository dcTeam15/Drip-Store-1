<<<<<<< HEAD
import './index.css'

const Footer = () => {
  return(
    <>
    <footer>
      <div id="fColunas">
      <div id="fColuna1">
      <h2><img src="src\components\Footer\dgtLogo.png" alt="Digital Store Logo" />Digital Store</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <img src="src\components\Footer\faceIcon.png" alt="Facebook"></img>
      <img src="src\components\Footer\instaIcon.png" alt="Instagram"></img>
      <img src="src\components\Footer\twitterIcon.png" alt="Twitter"></img>
      </div>
      <div id="fColuna2">
      <h3>Informação</h3>
      <ul>
        <li><a href="#"> Sobre Drip Store</a></li>
        <li><a href="#">Segurança</a></li>
        <li><a href="#">Wishlist</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Trabalhe Conosco</a></li>
        <li><a href="#">Meus Pedidos</a></li>
      </ul>
      </div>
      <div id="fColuna3">
      <h3>Categorias</h3>
      <ul>
        <li><a href="#">Camisetas</a></li>
        <li><a href="#">Calças</a></li>
        <li><a href="#">Bonés</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">Tênis</a></li>
      </ul>
      </div>
      <div id="fColuna4">
        <h3>Contato</h3>
        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p>(85) 3051-3411</p>
      </div>
      </div>
      <div id="linha"></div>
      <p id='direitos'>@ 2023 Digital College</p>
    </footer>
    </>
  )
=======
import logo from "./logo.png"

const Footer = () => {
  return (
    <>
      <footer>
     <div className="container">
      <div className="item">
       <img src="{logo}" alt="logo"/>
      </div>
     </div>


      </footer>


    </>



  );
>>>>>>> 22a33ff2a784eda013264ac1d4e1ffce3af759eb
}

export default Footer;