import React from 'react'

import {
    Drawer,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'

export default function MenuDrawer({ isDrawerOpen, setIsDrawerOpen }) {
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
                    <ListItemButton  sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}>
                        <ListItemText primary={'Home'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton  sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}>
                        <ListItemText primary={'About'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton  sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}>
                        <ListItemText primary={'Project'} sx={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton  sx={{ textAlign: 'center', borderBottom: '1px solid #ffffff11', maxHeight: '4rem' }}>
                        <ListItemText primary={'Contact'} sx={{ color: 'white' }} />
                    </ListItemButton>
                </Stack>
            </Drawer>
        </>
    )
}
