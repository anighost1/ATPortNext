"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import Toolbar from './Toolbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Stack,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography
} from '@mui/material';
import withRoot from '@/theme/withRoot';

import MenuDrawer from './MenuDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const pathname = usePathname()

    const triggerDrawer = () => {
        setIsDrawerOpen(state => !state)
    }

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    overflow:'hidden'
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: {
                            xs: 'space-between',
                            sm: 'space-around'
                        }
                    }}
                >
                    <Box
                        component={Link}
                        href={'/'}
                        sx={{
                            fontSize: 24,
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        <Box component='h1' sx={{ color: 'secondary.main' }}>AT</Box>
                    </Box>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex'
                            },
                            height: '100%'
                        }}
                    >
                        <ListItemButton component={Link} href='/' className={pathname === '/'?'active':''} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                        <ListItemButton component={Link} href='/about' className={pathname === '/about'?'active':''} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'About'} />
                        </ListItemButton>
                        <ListItemButton component={Link} href='/projects' className={pathname === '/projects'?'active':''} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Projects'} />
                        </ListItemButton>
                        <ListItemButton component={Link} href='/contact' className={pathname === '/contact'?'active':''} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Contact'} />
                        </ListItemButton>
                    </Stack>
                    <IconButton
                        sx={{
                            display: {
                                sm: 'none'
                            }
                        }}
                        onClick={triggerDrawer}
                    >
                        {isDrawerOpen ? <CloseIcon fontSize='large' sx={{ color: 'white' }} /> : <MenuIcon fontSize='large' sx={{ color: 'white' }} />}
                    </IconButton>
                    <MenuDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRoot(NavBar);
