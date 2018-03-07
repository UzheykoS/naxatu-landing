import * as React from 'react';

export class Intro extends React.Component<any, any> {
    render() {
        return (
            <section className="section -intro intro" id="intro">
                <div className="intro-background">
                    <img src="/image/bg-intro.jpg" className="intro-background__image" alt=""
                         title="Собираю вот на такую хату"/>
                </div>
                <div className="section-content intro-content">
                    <div className="intro-logo__container">
                        <img src="/image/logo-white.svg" title="XATA" className="intro-logo"/>
                    </div>

                    <div className="topic intro-topic">
                        <h1 className="topic-title">Собираю на Хату</h1>
                        <h2 className="topic-desc intro-topic-desc">
                            Каждый мечтает о прекрасном.<br/>
                            Я же мечтаю о прекрасной Хате в Киеве на которую можно собрать с помощью ICO.
                        </h2>
                    </div>

                    <div className="intro-buttons">
                        <a href="#ico" className="button btn -yellow intro-btn -ico anchor">Подкинуть на Хату</a>
                        <a href="#about" className="button btn -inline intro-btn anchor">О том как на Хату собирать</a>
                    </div>
                </div>

                <div className="intro-disclaimer">
                    Серьезно, краудсел на квартиру фиг знает кому, через продажу ERC20 токенов в Ethereum.<br/>
                    Я предупреждал! <a href="#ico" className="anchor link">Дать ему ></a>
                </div>
            </section>
        )
    }
}