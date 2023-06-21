import React from "react";
import './style.css'
import Produto from '../../assets/Images/Produtos/Tenis6.png'

const ProdutoCard = () => {
    return (
        <div className="container">
            <div className="box-image">
                <span>
                    30% OFF
                </span>
                <img src={Produto} alt="..." />
            </div>  
            <h3>Tênis</h3>
            <h2>K-Swiss V8 - Masculino</h2>
            <div className="box-desconto">
                <h3>$200</h3>
                <h3>$100</h3>
            </div>
        </div>
    );
}

export default ProdutoCard;