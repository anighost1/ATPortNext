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
                        Anil Tigga is a Full Stack Developer with over 1.5 years of experience in building and enhancing web applications using technologies such as Node.js, React.js, PostgreSQL, and Laravel. In his current role, he has been instrumental in developing a Procurement and Inventory Management System, implementing multi-role functionality, and leveraging Prisma ORM for efficient database management. He has also contributed to the development of an HRMS application, focusing on creating scalable and user-centric solutions.
                    </Typography>
                    <Typography
                        variant='body'
                        sx={{
                            lineHeight: '2rem',
                            wordSpacing: '0.2rem',
                            textAlign: 'justify'
                        }}
                    >
                        Previously, Anil worked on a Customer Relationship Management (CRM) system, where he developed APIs using Laravel and created responsive, intuitive user interfaces with React.js and Material UI. Additionally, he has enhanced the UI of multiple React.js projects, delivering seamless and engaging user experiences. Anil's expertise lies in designing and delivering robust, feature-rich applications tailored to meet diverse business needs.
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