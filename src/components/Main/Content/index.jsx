import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './Profile';

import "./contentStyles.css"

export default function Content() {

    const selected = useSelector(state=> state.navigation);

    let componentToRender = <></>;

    switch(selected){
        case "profile":
            componentToRender = <Profile/>
            break;
        default:
    }

    return (
        <div className="content">
            {componentToRender}
        </div>
    )
}
