import React from 'react'
import Content from './Content'
import SideBar from './SideBar'

import "./styles.css"


export default function Main() {
    return (
        <div className="main">
            <SideBar/>
            <Content/>
        </div>
    )
}