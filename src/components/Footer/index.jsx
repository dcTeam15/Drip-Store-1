import "./footer.css"
import Logo from "./Footerimg/dclogo.svg"
import "boxicons"



const Footer = () => {
  return(
    <>
      <footer>
        <div className="content">
          <div className="about">
            <div className="dclogo">
              <img src={Logo} alt="imagem-logo"/>
              <h1 className="digistore">Digital Store</h1>
            </div>
            <p className="descrition">
              lorem ipsumdolor sit amet.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ut dolore
            </p>
            <div className="social-midia">
              <ul>
                  <li>
                  <box-icon type='logo' name='facebook' color='rgb(255, 255, 255)'></box-icon>
                  </li>
                  <li>
                  <box-icon name='instagram' type='logo' color='rgba(255, 255, 255)' ></box-icon>
                  </li>
                  <li>
                  <box-icon name='twitter' type='logo' color='rgb(255, 255, 255)'></box-icon>
                  </li>
              </ul>
            </div>
          </div>
          
          <div className="item">
            <div className="info">
              <h3 className="title">Informação </h3>
              <p className="text">Sobre Drip Store</p>
              <p className="text">Segurança</p>
              <p className="text">Wishlist</p>
              <p className="text">Blog</p>
              <p className="text">Trabalhe Conosco</p>
              <p className="text">Meus Pedidos</p>
            </div>

            <div className="Category">
              <h3 className="title">Categorias</h3>
              <p className="text">Camisetas</p>
              <p className="text">Calças</p>
              <p className="text">Bonés</p>
              <p className="text">Headphones</p>
              <p className="text">Tênis</p>             
            </div>        
          </div>

          <div className="contact">
              <h3 className="title">
              Contato
              </h3>
              <p className="local">
               Avenida Santos Dumont,1510-1 andar-
               Aldeota, Fortaleza -CE,60150-161
              </p>
              <p>
                (85)3051-6198
              </p>
            </div>
            </div>

              <hr className="linha" />
              <span className="copiryght">
                @ 2022 Digital College
              </span>   
      </footer>
    </>
  )
}

export default Footer;