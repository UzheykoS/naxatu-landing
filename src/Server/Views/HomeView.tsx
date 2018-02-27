import * as React from 'react';
import {Button} from './Components/Button';
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
import {Emojify} from '../Utils/Emojify';

import {Intro} from './HomeComponent/Intro'

export interface IHomeViewProps {
}
export interface IHomeViewState {
}

export class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {

    renderQuiteEmoji() {
        return <span className="quite">🤫</span>;
    }

    render() {
        const layoutProps: IMainLayoutProps = {
            title: ":house: Первое в мире ICO по сбору на Хату в Киеве - Собираю на Хату",
            description: "Время тикает :watch:. "
        };

        return (
            <MainLayout {...layoutProps}>
                <Intro />


                <section className="section -why why" id="why">

                    <div className="section-content">
                        <div className="topic">
                            <h2 className="topic-title">Почему краутфандинг на Хату в блокчейне имеет смысл?</h2>
                        </div>

                        <h3><Emojify>Это самое честное ICO :yum:</Emojify></h3>
                        <p>
                            <Emojify>
                                Очень многие проекты в ICO и на Kickstarter обманывают :sob:, обещают золотые горы и
                                очень крутой продукт :scream:, а как соберут средства - исчезнут и накупят Ferrari :car:
                                или еще чего бесполезного.
                            </Emojify>
                        </p>
                        <p>
                            <Emojify>
                                Я же не хочу ни кого обманывать и покупать Ferrari :car:. Все собранные средства
                                будут потрачены исключительно на покупку крутой Хаты в Киеве и её крутой ремонт.
                            </Emojify>
                        </p>

                        <p>
                            Все события будут транслироваться в канале
                            в телеграмме <a href="https://t.me/@naxatu" target="_blank">@naxatu</a>.
                        </p>

                        <h3>Вы получаете токены XATA</h3>
                        <p>
                            <Emojify>
                                Возможно, с первого взгляда, токены XATA покажутся бесполезными. Но уверяю, если дело
                                выгорит - после окончания "Собираю на Хату", будет запущен другой краудсел в реальном
                                секторе :circus_tent: в Киеве. Там можно будет оплачивать ХАТА-й.
                            </Emojify>
                        </p>

                        <p><a href="#xata" className="anchor">Подробнее о ХАТА токенах</a></p>

                        <p>Но пока это секрет, никому не говори. Тссс… {this.renderQuiteEmoji()}</p>

                        <h3>Блокчейн это круто</h3>
                        <p><Emojify>Но блокчейна тут не будет :smiling_imp:</Emojify></p>
                        <p>
                            Будут токены ХАТА. Они на блокчейне и ими можно будет что-то платить или куда-то продать.
                            Но это не точно.
                        </p>
                        <p>
                            Если достигну цели, то напичкаю Хату всякими приблудами от "умного дома" и заставлю работать
                            робота-пылесоса. Но не факт что и там где-нибудь будет блокчейн.
                        </p>
                        <p>Так-же токены можно получить на <a href="#chalange" className="anchor">#челендже</a></p>
                    </div>
                </section>


            </MainLayout>
        );
    }
}