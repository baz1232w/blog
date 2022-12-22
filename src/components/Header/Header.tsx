import React, {useEffect} from 'react';
import {Navigation} from "./Navigation/Navigation";
import {Burger} from "./Burger/Burger";
import {useTypeSelector} from "../../hooks/useTypeSelector";

interface Props {
    window?: () => Window;
}

export const Header: React.FC<Props> = (props) => {
    const {isLogin} = useTypeSelector(state=>state.mainPage)

    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <Navigation isLogin={isLogin} handleDrawerToggle={handleDrawerToggle}/>
            <Burger isLogin={isLogin} handleDrawerToggle={handleDrawerToggle}
                    container={container} mobileOpen={mobileOpen}/>
        </>
    );
};

