import React, {useEffect} from 'react';
import {Alert, AlertTitle, Box, CircularProgress, Container, Stack} from "@mui/material";
import {BlogsItems} from "./BlogsItems/BlogsItems"
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import {Empty} from "./Empty/Empty";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

export const MainPage: React.FC = () => {
    const {blogs, loading, error,isLogin,user} = useTypeSelector(state => state.mainPage)
    const {fetchBlogsItems,deleteBlogItem} = useActions()

    useEffect(() => {
        fetchBlogsItems()
    }, [])

    if (error) {
        return <>
            <Box component="main" sx={{marginTop: 10, marginBottom: 2}}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>{error}</strong>
                </Alert>
             </Box>
        </>
    }

    if (loading) {
        return <CircularProgress sx={style}/>
    }
    return (
        <Container maxWidth="sm">
            <Box component="main" sx={{marginTop: 10, marginBottom: 2}}>
                {blogs.length ?
                    <Stack direction="column" alignItems="center"
                           spacing={5}>
                        <BlogsItems deleteBlogItem={deleteBlogItem} userId={user?.googleId} isLogin={isLogin} blogs={blogs}/>
                    </Stack>
                    :
                    <Empty/>
                }
            </Box>
        </Container>
    );
};