import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from './Typography';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Stack,
    Tooltip,
    IconButton,
} from '@mui/material';
import withRoot from '@/theme/withRoot';
import Link from 'next/link';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Anil Tigga
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function Footer() {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex', bgcolor: 'secondary.light' }}
        >
            <Container sx={{ my: 8, display: 'flex', justifyContent: 'center' }}>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={1}>
                    <Stack
                        direction={'row'}
                    >
                        <Tooltip title={'LinkedIn'} arrow>
                            <IconButton
                                href='https://www.linkedin.com/in/anil-tigga-44a830205/'
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Git Hub'} arrow>
                            <IconButton
                                href='https://github.com/anighost1'
                                target="_blank"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Instagram'} arrow>
                            <IconButton
                                href='https://www.instagram.com/ani_ghost/'
                                target="_blank"
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'X (Twitter)'} arrow>
                            <IconButton
                                href='https://twitter.com/AnilTig63565827'
                                target="_blank"
                            >
                                <XIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Copyright/>
                </Stack>
            </Container>
        </Typography>
    );
}

export default withRoot(Footer)