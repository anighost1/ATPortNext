import withRoot from "@/theme/withRoot"

import {
    Box,
    Stack,
    Container,
    Divider,
    Typography,
    IconButton,
    Tooltip,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function About() {
    return (
        <>
            <Container component="section" sx={{ mt: 8, mb: 4, minHeight: '70vh' }}>
                <Stack
                    spacing={2}
                    sx={{
                        mt: '4rem',
                        padding: 5
                    }}
                >
                    <Typography variant='h4'> Anil Tigga </Typography>
                    <Divider />
                    <Typography
                        variant='body'
                        sx={{
                            lineHeight: '2rem',
                            wordSpacing: '0.2rem',
                            textAlign: 'justify'
                        }}
                    >
                        A software engineer who is skilled in MERN stack.
                        He has experience working with Laravel and SQL as well while developing a CRM.
                        He transforms innovative ideas into top-tier software solutions,
                        specializing in front-end development with React.js and Next.js, while also proficient in building robust back-end systems using Node.js and Laravel.
                        His expertise drives dynamic web application development.
                    </Typography>
                    <Stack
                        direction={'row'}
                    >
                        <Tooltip title={'LinkedIn'} arrow>
                            <IconButton
                                href='https://www.linkedin.com/in/anil-tigga-44a830205/'
                                target="_blank"
                            >
                                <LinkedInIcon
                                    fontSize='large'
                                    color='secondary'
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Git Hub'} arrow>
                            <IconButton
                                href='https://github.com/anighost1'
                                target="_blank"
                            >
                                <GitHubIcon
                                    fontSize='large'
                                    color='secondary'
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Instagram'} arrow>
                            <IconButton
                                href='https://www.instagram.com/ani_ghost/'
                                target="_blank"
                            >
                                <InstagramIcon
                                    fontSize='large'
                                    color='secondary'
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'X (Twitter)'} arrow>
                            <IconButton
                                href='https://twitter.com/AnilTig63565827'
                                target="_blank"
                            >
                                <XIcon
                                    fontSize='large'
                                    color='secondary'
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default withRoot(About)