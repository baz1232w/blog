import React, {useState} from 'react';
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useActions} from "../../hooks/useActions";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const validationSchema = yup.object({
    imageUrl: yup
        .string()
        .url('Enter a valid Url')
        .required('Url is required'),
    title: yup
        .string()
        .min(3, 'Post text should be of minimum 3 characters length')
        .max(30, 'Post text should be of maximum 30 characters length ')
        .required(),
    content: yup
        .string()
        .min(10, 'Post text should be of minimum 10 characters length')
        .max(300, 'Post text should be of maximum 200 characters length ')
        .required()
})

export const AddPostPage: React.FC = () => {
    const {totalItems, user, isLogin} = useTypeSelector(state => state.mainPage)
    const [isAdded, setIsAdded] = useState(false)
    const {addBlogItem} = useActions()

    const formik = useFormik({
        initialValues: {
            imageUrl: '',
            title: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            if (user) {
                addBlogItem({
                    ...values,
                    id: String(totalItems + 1),
                    username: user.name,
                    googleId: user.googleId,
                    date: String(new Date().toDateString())
                })
            }
            resetForm()
        },
    });

    return (
        <Container maxWidth="sm">
            <Box component="main" sx={{marginTop: 11, marginBottom: 2}}>
                {isAdded && <Alert severity="success">Post is added</Alert>}
                {!isLogin && <Alert severity="error">Login first please</Alert>}
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        disabled={!isLogin}
                        id="imageUrl"
                        name="imageUrl"
                        label="Image Url"
                        value={formik.values.imageUrl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                        helperText={formik.touched.imageUrl && formik.errors.imageUrl}
                    />
                    <TextField
                        fullWidth
                        disabled={!isLogin}
                        sx={{marginTop: 3}}
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        sx={{marginY: 3}}
                        fullWidth
                        disabled={!isLogin}
                        id="content"
                        name="content"
                        label="Post text"
                        type="text"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.content && Boolean(formik.errors.content)}
                        helperText={formik.touched.content && formik.errors.content}
                    />
                    <Button disabled={!isLogin} onClick={() => setIsAdded(true)} color="primary" variant="contained"
                            fullWidth type="submit">
                        Add Post
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

