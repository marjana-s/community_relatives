import React, { useState } from 'react';
import "./header.css";
const Header = () => {
    return (
        <body className='body'>
            <main className="main">
                <h1>
                «Спільнота - Рідні»
                </h1>
                <h2 className="mainDownTitle">
                Проєкт Благодійного фонду «Рідні» 
                </h2>
                <a href="/Donate">
                <button className="mainButt">Donate</button>
                </a>
            </main>
        </body>
    )
}
export default Header