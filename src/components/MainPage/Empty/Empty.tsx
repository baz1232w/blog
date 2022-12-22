import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Empty: React.FC = () => {
    return (
        <>
            <Box component='div'>
                <Stack direction='column' alignItems='center' spacing={5}>
                    <Typography variant='h5' component='h2' sx={{textAlign: 'center'}}>
                        Here is empty now :(
                    </Typography>
                    <Link to={'/post'}><Button color="primary" variant="contained">Add Post</Button></Link>
                </Stack>
            </Box>
        </>
    );
};

