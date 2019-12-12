import React from 'react';

import './main.scss';

function Main() {
    return (
        <main className="main">
            <div className="registration-block">
                <div className="action">
                    <p>Бонус до <span>10 000 &#8372;</span></p>
                    <p>всім клієнтам</p>
                </div>
                <div className="registration-buttons">
                    <div className="buttons-place">
                        <div className="button"><span>в 1 клік</span></div>
                        <div className="button"><span>По Email</span></div>
                        <div className="button"><span>Соц. мережі</span></div>
                    </div>
                </div>
            </div>
            <div className="img-place">
                <img src={require('../../common/images/soccer-player.png')} alt="soccer player"></img>
            </div>
        </main>
    );
}

export default Main;
