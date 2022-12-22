import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom'
import {Login} from "../Login/Login";
import {Logout} from "../Login/Logout";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

interface Props {
    handleDrawerToggle: () => void
    isLogin: boolean
}

export const Navigation: React.FC<Props> = ({handleDrawerToggle, isLogin}) => {
    const {user} = useTypeSelector(state => state.mainPage)

    return (
        <AppBar sx={{backgroundColor: '#1A2027'}} component="nav">
            <Container maxWidth={"md"}>
                <Toolbar sx={{display: {sm: 'flex'}, justifyContent: 'space-between'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Blog
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Link to='/main'><Button sx={{color: '#fff'}}>Home</Button></Link>
                        <Link to='/post'><Button sx={{color: '#fff'}}>Add post</Button></Link>
                        <Link to='/contact'><Button sx={{color: '#fff'}}>Contact</Button></Link>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        {isLogin ?
                            <Logout/>
                            : <Login/>
                        }
                        {isLogin && <Avatar alt={user?.name} src={user?.imageUrl}/>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};

