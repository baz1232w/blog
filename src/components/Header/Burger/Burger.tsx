import React from 'react';
import Drawer from "@mui/material/Drawer";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    handleDrawerToggle: () => void
    container: (() => HTMLElement) | undefined
    mobileOpen: boolean
    isLogin: boolean
}

export const Burger: React.FC<Props> = ({container, mobileOpen, handleDrawerToggle,isLogin}) => {
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Blog
            </Typography>
            <Divider/>
            <Stack>
                <Link to='/main'><Button sx={{my:1, color:'#000'}}>Home</Button></Link>
                <Link to='/post'><Button sx={{my:1, color:'#000'}}>Add post</Button></Link>
                <Link to='/contact'><Button sx={{my:1, color:'#000'}}>Contact</Button></Link>
            </Stack>
        </Box>
    );

    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

