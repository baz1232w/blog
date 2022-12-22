import React, {useEffect} from 'react';
import {MainPage} from "./components/MainPage/MainPage";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AddPostPage} from "./components/AddPostPage/AddPostPage";
import {gapi} from "gapi-script";

const clientId = '637900693793-2pulg9dlm188k5mjvgcpl4vp5grulubq.apps.googleusercontent.com'

export const App: React.FC = () => {

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId: clientId,
                scope:""
            })
        }

        gapi.load('client:auth2',start)
    })

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/main'} element={<MainPage/>}/>
                <Route path={'/post'} element={<AddPostPage/>}/>
            </Routes>
        </>
    );

}

