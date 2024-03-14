"use client"

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Link from 'next/link';
import Button from '../components/Button';
import Image from 'next/image';

import ProjectDetail from '../components/ProjectDetail';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const projects = [
    {
        image: '/svg/hollowed-boxes.svg',
        title: 'Pin at Ranchi',
        width: '35%',
        description: 'A Full stack project that holds details of various places in Ranchi for hangout, stay etc. Tech stack used is MERN. Project is has three parts -client frontend, admin panel.',
        links: [
            {
                name: 'Application',
                url: 'https://pinatranchi.tigga.in/'
            },
            {
                name: 'Backend Code',
                url: 'https://github.com/anighost1/pin-at-ranchi-server'
            },
            {
                name: 'Client side UI code',
                url: 'https://github.com/anighost1/pin-at-ranchi'
            },
            {
                name: 'Admin panel code',
                url: 'https://github.com/anighost1/pin-at-ranchi-admin'
            },
        ]
    },
    {
        image: '/svg/sun-tornado.svg',
        title: 'Responsive template',
        width: '30%',
        description: 'A simple responsive template having header, sidebar, body and footer using html, css and js. Feel free to use it for your project. Everyone is invited to contribute and make it even better.',
        links: [
            {
                name: 'Application',
                url: 'https://restemplate.tigga.in/'
            },
            {
                name: 'Repository',
                url: 'https://github.com/anighost1/responsive-template'
            },
        ]
    },
    {
        image: '/svg/geometric-intersection.svg',
        title: 'Fotos Dot Get',
        width: '35%',
        description: 'A web application to get free photos. It is developed using Reactjs and it uses Unsplash API for data.',
        links: [
            {
                name: 'Application',
                url: 'https://fotosdotget.tigga.in/'
            },
            {
                name: 'Repository',
                url: 'https://github.com/anighost1/fotosdotget'
            },
        ]
    },
];

export default function ProjectsLite() {

    const [selectedProject, setSelectedProject] = useState({})
    const [dialogOpen, setDialogOpen] = useState(false)


    const selectProject = (data) => {
        setSelectedProject(data)
        openDialog()

    }

    const openDialog = () => {
        setDialogOpen(true)
    }
    const closeDialog = () => {
        setDialogOpen(false)
    }

    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <ProjectDetail
                data={selectedProject}
                open={dialogOpen}
                handleClose={closeDialog}
            />
            <Typography variant="h4" marked="center" align="center" component="h2">
                Projects
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                {projects.map((item) => (
                    <ImageIconButton
                        key={item.title}
                        style={{
                            width: item.width,
                        }}
                        onClick={() => { selectProject(item) }}
                    >
                        {/* <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${item.url})`,
                            }}
                        /> */}
                        <Box
                            component={Image}
                            alt={item.title}
                            src={item.image}
                            fill
                            sx={{
                                objectFit:'cover'
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {item.title}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    justifyContent: {
                        xs: 'center',
                        sm: 'flex-start'
                    }
                }}
            >
                <Button component={Link} href={'/projects'} variant='contained' color='secondary'>View all projects</Button>
            </Box>
        </Container>
    );
}
