import React from 'react';
import {useGoogleLogin} from "react-google-login";
import {Button} from "@mui/material";
import {useActions} from "../../../hooks/useActions";
import {useDispatch} from "react-redux";

const clientId = '637900693793-2pulg9dlm188k5mjvgcpl4vp5grulubq.apps.googleusercontent.com'

export const Login = () => {
    const {signInOut,getUserProfile} = useActions()
    const dispatch = useDispatch()

    function onSuccess(res:any){
        dispatch(signInOut(true))
        dispatch(getUserProfile(res.profileObj))
    }

    function onFailure(res:any){
        console.log('Login failed',res)
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn:true
    })


    return (
        <>
            <Button sx={{color: '#fff'}} onClick={signIn}>Login</Button>
        </>
    );
};

