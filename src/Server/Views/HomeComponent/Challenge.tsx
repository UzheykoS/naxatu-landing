import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

const challengeLink = "https://www.instagram.com/explore/tags/собираюнахату/";
const hashTag = '#собираюнахату';
const instagramLinkComponent = <a href={challengeLink} className="link" target="_blank">{hashTag}</a>;

export class Challenge extends React.Component<any, any> {
    render() {
        return (
            <section className="section -challenge challenge" id="challenge">
                <div className="section-content challenge-content">

                    <div className="challenge-square -text">
                        <div className="topic -left -small">
                            <h2 className="topic-title">{instagramLinkComponent} челендж</h2>
                        </div>
                        <p className="paragraph">Помогите мне выбрать интерьер квартиры!</p>
                        <ul>
                            <li> - какого же цвета положить паркет?</li>
                            <li> - как выбрать рисунок настенного ковра?</li>
                            <li> - чем закрасить окна?</li>
                        </ul>
                        <br/>
                        <p className="paragraph">
                            Подскажите с помощью инстаграма! <br/>
                            Публикуй себя с крутым интерьером и хештегом <u>{hashTag}</u>.
                            Каждую неделю буду репостить 3 лучшие фотографии,
                            а счасливчики получат по 10 XATA-токенов<span className="text-red">*</span>
                        </p>

                        <p className="paragraph">
                            <b>Помни! Интерьер найденный в гугле &mdash; это не прикольно.</b> Важно то что видел
                            своими глазами, то от чего волосы на ногах стали дыбом!
                        </p>
                        <div className="paragraph-special">
                            <div className="paragraph-special__item">
                                <Emojify>
                                    * только если укажут кошелек Ethereum :smiling_imp:
                                    или хотя бы ответят в личку, ведь это целых 2000грн!
                                </Emojify>
                            </div>
                        </div>
                    </div>

                    <div className="challenge-square -image">
                        <img src="/image/insta-image.png"
                             title="Настенный ковер, это лучшее что может быть в квартире. Но не бойся, ковер не будет закрывать твое имя на коллаже."
                             alt="Настенный ковер в хате"
                        />
                    </div>

                </div>
            </section>
        )
    }
}