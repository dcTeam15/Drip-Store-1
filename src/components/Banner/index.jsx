import React from 'react';
import './style.css'
import Carousel from 'react-material-ui-carousel'
import Image1 from '../img/Tenis1.png'
import Image2 from '../img/Tenis2.png'
import Image3 from '../img/Tenis8.png'

import { Box, Button } from '@mui/material'


export const Banner = () => {
    let items = [
        {
            image:`${Image1}`,
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:`${Image2}`,
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:`${Image3}`,
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        }
    ];

    function Item(props)
    {
        return (
            <Box component={'div'} className='banner'>
                <img src={props.item.image} alt="..." className='image'/>
                <div className='conteudo'>
                    <h2 className='desc'>{props.item.description}</h2>
                    <h1 className='titulo'>Queima de stoque Nike 🔥</h1>
                    <p className='name'>{props.item.name}</p>
                    <Button className='botao'>
                        Ver Ofertas
                    </Button>
                </div>
            </Box>
        )
    }

    return (
        <Carousel sx={{
            width:'100%',
            // height:'600px',
            background:'#F5F5F5F5'
        }}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}


