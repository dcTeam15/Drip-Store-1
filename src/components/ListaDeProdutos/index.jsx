import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const ListaDeProdutos = (props) => {
    return (
        <>
            <Box
                component='div'
                sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                    }
                }>
                <Typography
                    variant='h1'
                    sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#474747',
                        lineHeight: '38px'
                    }}>{props.titulo}</Typography>
                {props.visivel ?
                    <Button
                        endIcon={<ArrowForward />}
                        sx={
                            {
                                textTransform: 'initial',
                                color: '#C92071',
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}>Ver todos</Button>
                    : ''}
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {props.children}
            </Grid>
        </>
    );
}

export default ListaDeProdutos;