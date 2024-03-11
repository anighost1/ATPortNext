import React from 'react'

import {
    Drawer,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuDrawer({ isDrawerOpen, setIsDrawerOpen }) {

    const pathname = usePathname()

    return (
        <>
            <Drawer
                anchor={'right'}
                open={isDrawerOpen}
                onClose={() => { setIsDrawerOpen(false) }}
                sx={{
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: '80vw',
                        boxSizing: 'border-box',
                        backgroundColor: 'primary.main'
                    },
                }}
            >
                <Stack
                    direction={'column'}
                    justifyContent={'flex-start'}
                    sx={{
                        display: {
                            xs: 'flex',
                            sm: 'none'
                        },
                        height: '100%',
                        mt: '4rem'
                    }}
                >
                    <ListItemButton
                        component={Link}
                        href='/'
                        className={pathname === '/' ? 'active' : ''}
                        sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}
                        onClick={() => { setIsDrawerOpen(false) }}
                    >
                        <ListItemText primary={'Home'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        href='/about'
                        className={pathname === '/about' ? 'active' : ''}
                        sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}
                        onClick={() => { setIsDrawerOpen(false) }}
                    >
                        <ListItemText primary={'About'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        href='/projects'
                        className={pathname === '/projects' ? 'active' : ''}
                        sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}
                        onClick={() => { setIsDrawerOpen(false) }}
                    >
                        <ListItemText primary={'Project'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        href='/contact'
                        className={pathname === '/contact' ? 'active' : ''}
                        sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}
                        onClick={() => { setIsDrawerOpen(false) }}
                    >
                        <ListItemText primary={'Contact'} sx={{ color: 'white' }} />
                    </ListItemButton>
                </Stack>
            </Drawer>
        </>
    )
}
