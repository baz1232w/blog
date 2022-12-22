import React, {useState} from "react";
import {IBlog} from "../../../models/mainPageTypes"
import {Card, CardActionArea, CardMedia, Typography, Box, Stack, CircularProgress} from "@mui/material";
import {DeleteForever} from '@mui/icons-material'

interface props {
    blogs: IBlog[]
    userId: string | undefined
    isLogin: boolean
    deleteBlogItem: (id:string)=> void
}


export const BlogsItems: React.FC<props> = ({blogs,isLogin,userId,deleteBlogItem}) => {
    const [isDeleting,setIsDeleting] = useState(false)

    const deleteItem = (itemId:string) => {
        if(itemId !== userId){
            return console.log('You cat delete not your post!')
        }
        setIsDeleting(true)
        deleteBlogItem(itemId)
    }

    return (
        <>
            {blogs.map(el => {
                return (
                    <Card key={String(el.id)} sx={{maxWidth: 500, width: 1}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={el.imageUrl}
                                alt="Post image"
                            />
                            <Box sx={{padding: 1}}>
                                <Typography variant="h5" component="h2">
                                    {el.title}
                                </Typography>
                                <Typography sx={{marginY: 1}} variant="body2" component="p">
                                    {el.content}
                                </Typography>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography variant="caption" component="p">
                                        By {el.username} Posted:{el.date}
                                    </Typography>
                                    {isLogin &&
                                        (isDeleting ? <CircularProgress/> : <DeleteForever onClick={()=>deleteItem(el.googleId)}/> )
                                    }
                                </Stack>
                            </Box>
                        </CardActionArea>
                    </Card>
                )
            })}
        </>
    )
}