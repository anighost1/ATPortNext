"use client"

import React, { useEffect } from 'react'
import {
    Typography,
    Dialog,
    Slide,
    IconButton,
    Stack,
    Container,
    Divider,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function ProjectDetail({ data, open, handleClose }) {

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'flex-end'}
                    sx={{
                        px: '1rem',
                        backgroundColor: 'secondary.main'
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize='large' />
                    </IconButton>
                </Stack>
                <Container component="section" sx={{ mt: 8, mb: 4, minHeight: '70vh' }}>
                    <Stack
                        spacing={2}
                    >
                        <Typography
                            variant='h4'
                        >
                            {data.title}
                        </Typography>
                        <Divider />
                        <Typography
                            variant='body'
                            sx={{
                                lineHeight: '2rem',
                                wordSpacing: '0.2rem',
                                textAlign: 'justify'
                            }}
                        >
                            {data.description}
                        </Typography>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'row'
                            }}
                            justifyContent={'flex-start'}
                            spacing={2}
                        >
                            {data?.links?.map((item, index) => (
                                <Button
                                    key={index}
                                    href={item.url}
                                    target={'_blank'}
                                    color='secondary'
                                    variant='outlined'
                                    size='small'
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Dialog>
        </React.Fragment>
    )
}
