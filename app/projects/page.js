"use client"

import React, { useEffect, useState } from 'react'
import withRoot from "@/theme/withRoot"
import { styled } from '@mui/material/styles';
import {
    Box,
    ButtonBase,
    Typography,
    Container,
} from '@mui/material';
import ProjectDetail from '@/components/ProjectDetail';
import Image from 'next/image';


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
        url: '/svg/hollowed-boxes.svg',
        title: 'Pin at Ranchi',
        width: '60%',
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
        url: '/svg/geometric-intersection.svg',
        title: 'Fotos Dot Get',
        width: '40%',
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
    {
        url: '/svg/sun-tornado.svg',
        title: 'Responsive template',
        width: '50%',
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
        url: '/svg/repeating-chevrons.svg',
        title: 'Stack GUI',
        width: '50%',
        description: 'A simple representation of a stack but with interactive GUI.',
        links: [
            {
                name: 'Application',
                url: 'https://anighost1.github.io/stack-gui/home'
            },
            {
                name: 'Repository',
                url: 'https://github.com/anighost1/stack-gui'
            },
        ]
    },
];


function Projects() {

    const [selectedProject, setSelectedProject] = useState({})
    const [dialogOpen, setDialogOpen] = useState(false)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <>
            <Container component="section" sx={{ mt: 8, mb: 4, minHeight: '70vh' }}>
                <ProjectDetail
                    data={selectedProject}
                    open={dialogOpen}
                    handleClose={closeDialog}
                />
                <Box
                    sx={{
                        mt: '4rem',
                        padding: 2
                    }}
                >
                    <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }}>
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
                                    src={item.url}
                                    layout="fill"
                                    objectFit="cover"
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center 40%',
                                        // backgroundImage: `url(${item.url})`,
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
                </Box>
            </Container>
        </>
    )
}

export default withRoot(Projects)