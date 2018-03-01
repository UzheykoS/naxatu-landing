import * as React from 'react';
import {sample} from 'lodash';

import {Emojify} from '../../Utils/Emojify';

export class Citation extends React.Component {

    render() {
        return (
            <section className="section -citation citation" id="citation">
                <div className="section-content">
                    <article className="citation-body">
                        <p className="citation-quote">
                            Если ты живешь на съемной хате и нет возможности купить собственную,
                            то заявляй, что собираешь на Хату через ICO - и все у тебя будет хорошо.
                        </p>

                        <span className="citation-author">
                            вот так бы мог сказать {' '}
                            <a href="https://www.facebook.com/dubilet/posts/10156243052293552" target="_blank" className="link">
                                Дмитрий Дубилет
                            </a>
                        </span>
                    </article>
                </div>
            </section>
        )
    }
}