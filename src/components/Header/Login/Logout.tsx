import {useGoogleLogout} from "react-google-login";
import {Button} from "@mui/material";
import {useActions} from "../../../hooks/useActions";
import {useDispatch} from "react-redux";

const clientId = '637900693793-2pulg9dlm188k5mjvgcpl4vp5grulubq.apps.googleusercontent.com'

export const Logout = () => {
    const {signInOut} = useActions()
    const dispatch = useDispatch()

    function onSuccess() {
        dispatch(signInOut(false))
    }

    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess: onSuccess
    })

    return (
        <>
            <Button sx={{color: '#fff'}} onClick={signOut}>Logout</Button>
        </>
    );
};

