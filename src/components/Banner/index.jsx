import React from 'react';
import './style.css'
import Carousel from 'react-material-ui-carousel'
import Image1 from '../img/Tenis1.png'
import Image2 from '../img/Tenis2.png'
import Image3 from '../img/Tenis8.png'

import { Paper, Button } from '@mui/material'


export const Banner = (props) =>
{
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
    ]

    return (
        <Carousel sx={{
            position:'absolute',
            width:'1555.2px',
            height:'735px',
            left:'0px',
            top:'209px',
            background:'#F5F5F5F5'
            
        }}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt="..." className='image'/>
            <h2 className='desc'>{props.item.description}</h2>
            <h1 className='titulo'>Queima de stoque Nike 🔥</h1>
            <p className='name'>{props.item.name}</p>

            <Button className='botao'>
                Ver Ofertas
            </Button>
        </Paper>
    )
}
