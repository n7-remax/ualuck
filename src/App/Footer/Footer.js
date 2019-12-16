import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="quality">
                <div className="standard-mark"></div>
                <div>
                    <span className="verified">Перевірено</span>
                    <span>«рейтингом букмекерів»</span>
                </div>
            </div>
            <div className="payment">
            </div>
        </footer>
    );
}

export default Footer;
