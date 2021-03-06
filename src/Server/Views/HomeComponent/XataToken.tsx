import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class XataToken extends React.Component<any, any> {
    render() {
        return (
            <section className="section -xata xata" id="xata">
                <div className="section-content">
                    <div className="topic -left">
                        <h2 className="topic-title">Немного фактов о XATA-токене</h2>
                    </div>

                    <article className="xata-article">
                        <h3>Гарантия его ценности</h3>
                        <p className="paragraph">
                            Он бесполезен.
                            <br/><br/>
                            XATA-токен &mdash; это контракт по стандарту ERC20, разработанный специально, что бы вы,
                            мои дорогие, получили что-то взамен за Ethereum.
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>Возможно безопасен, но это не точно</h3>
                        <p className="paragraph">
                            Я выучил Solidit ровно на столько, что бы можно было написать этот контракт. Большая часть
                            кода была скопирована с других контрактов и не факт что все работает хорошо. Хотя..
                            Там нечему ломаться.
                            <br/><br/>
                            Еще ни один эксперт не смотрел этот контракт. Надеюсь, вы станете первым и сообщите,
                            вдруг что не так. Ведь еще можно что-то поправить? Правда?
                            <br/><br/>
                            А вообще, его исходный код открыт, а помыслы чисты.
                            Все на <a href="https://github.com/naxatu" className="link" target="_blank">GitHub</a>.
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>Бонусы</h3>
                        <p className="paragraph">
                            Курс, по котором раздаются XATA: <b>1 ETH = 100 XATA</b>
                            <br/><br/>
                            Еще есть бонус, который начисляется автоматически, при вкладе от <b>0.01 Ether</b>.
                            Сумма бонуса в XATA составляет сумму всего вклада в Ether на момент транзакции.
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>Возможно от XATA будет толк. Возможно!</h3>
                        <p className="paragraph"><i>
                            Если вы придумаете, что можно сделать с токенами XATA, то не стесняйтесь и сообщите мне.
                            Контакты в самом низу.
                            <br/>
                            Пока есть одна идея, но о ней заговорю после успешного завершения «Собираю на Хату».
                        </i></p>
                    </article>
                    <div>
                        <a className="btn anchor" href="#ico">Получить XATA</a>
                    </div>
                </div>
            </section>
        )
    }
}
