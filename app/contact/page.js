"use client"

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import withRoot from "@/theme/withRoot"
import {
    Box,
    Container,
    TextField,
    Typography,
    CircularProgress,
    Backdrop,
    Alert
} from '@mui/material';
import Button from '@/components/Button';


const DisplayAlert = ({ severity, message, alertOpen }) => {
    return (
        <Alert
            severity={severity}
            variant='filled'
            sx={{
                position: 'relative',
                top: '2rem',
                display: alertOpen ? 'flex' : 'none',
                transition: 'ease 2s',
                mt: 5
            }}
        >
            {message}
        </Alert>
    )
}


function Contact() {
    const [formData, setFormData] = useState({});
    const [inProgress, setInProgress] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertData, setAlertData] = useState({});
    const form = useRef();

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((state) => ({
            ...state,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const dataToSend = {
            ...formData,
            to_name: 'Anil Tigga'
        }
        if (formData) {
            setInProgress(true)
            emailjs.send(process.env.NEXT_PUBLIC_APP_SERVICE_ID, process.env.NEXT_PUBLIC_APP_TEMPLATE_ID, dataToSend, process.env.NEXT_PUBLIC_APP_PUBLIC_KEY)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setAlertData({
                        severity: 'success',
                        message: 'Message sent successfully'
                    })
                    setAlertOpen(true)
                    setInProgress(false)
                }, function (error) {
                    console.log('FAILED...', error);
                    setAlertData({
                        severity: 'error',
                        message: 'Error while sending message'
                    })
                    setAlertOpen(true)
                    setInProgress(false)
                });
        }
    };

    return (
        <>
            {inProgress && (<Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={inProgress}
            >
                <CircularProgress color="inherit" />
            </Backdrop>)}
            <Container component="section" sx={{ mt: 2, mb: 0, minHeight: '70vh' }}>
                <DisplayAlert severity={alertData.severity} message={alertData.message} alertOpen={alertOpen} />
                {/* <DisplayAlert severity={'success'} message={'bhfbekbv'} alertOpen={alertOpen} /> */}
                <Box
                    sx={{
                        padding: 2
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                        }}
                    >
                        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                            <Typography variant="h4" align="center" mb={2}>
                                Drop a message
                            </Typography>
                            <form ref={form} onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={formData.name || ''}
                                    name='name'
                                    onChange={onChangeHandler}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={formData.email || ''}
                                    name='email'
                                    onChange={onChangeHandler}
                                    margin="normal"
                                    required
                                    type="email"
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    value={formData.message || ''}
                                    name='message'
                                    onChange={onChangeHandler}
                                    margin="normal"
                                    required
                                    multiline
                                    rows={4}
                                />
                                <Button variant="contained" color='secondary' type="submit" sx={{ mt: 2 }}>
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default withRoot(Contact)