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

                <div className="buttons-place">
                    <div className="button"><span>В 1 клік</span></div>
                    <div className="button"><span>По Email</span></div>
                    <div className="button"><span>Соц. мережі</span></div>
                </div>
                <div className="apply">
                    <form>
                        <input placeholder="Email"></input>
                    </form>
                </div>
                <div className="promocode">
                    <span>Додати промокод</span><span className="promocode-button">&#43;</span>
                </div>
                <div className="agreement">
                    <label className="container">
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                    <div className="agreement-text"><p>Я Підтверджую, що я ознайомлений і повністю згоден з <span>Умовами Угоди про використання сайту ualuck</span></p></div>
                </div>
                <div className="sign-up">
                    <div className="button">
                        <span>ЗАРЕЄСТРУВАТИСЯ</span>
                    </div>
                    <span className="or">Або</span>
                    <div className="log-in">
                        <span>Увійти</span>
                    </div>
                </div>
            </div>
            <div className="img-place">
            </div>
        </main>
    );
}

export default Main;
