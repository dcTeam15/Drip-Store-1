import React from "react";
import './style.css'



const ProdutoCard = ({ titulo, descricao, valor, desconto, imagem }) => {

    const descontoProduto = valor - (valor * desconto / 100)

    return (
        <div className="container">
            <div className="box-image">
                {
                    desconto ? (
                        <span>
                            {desconto}% OFF
                        </span>
                    ) : null
                }
                <img src={imagem ? imagem : 'https://www.foxchapelpublishing.com/media/catalog/product/placeholder/default/image_not_available_1_1.png'} alt="..." />
            </div>
            <h3>{titulo ? titulo : 'Titulo do Produto'}</h3>
            <h2>{descricao ? descricao : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem alias itaque dolores iure aliquam illum modi sequi iste, nobis et amet facere deleniti rem delectus repellat non molestias id!'}
            </h2>
            <div className="box-desconto">
                <h3>${valor ? valor : 100}</h3>
                {
                    desconto ? (
                        <h3>${descontoProduto ? descontoProduto : 100}</h3>
                    ) : null
                }
            </div>
        </div>
    );
}

export default ProdutoCard;