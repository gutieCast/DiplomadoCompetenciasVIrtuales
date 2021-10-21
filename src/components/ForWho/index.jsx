import React from 'react'
import { ContentBox } from '../ContentBox'
import { infoCourse } from '../../helpers/data'
import { imgForWho, bgMethodology } from '../../helpers/images'
import './for-who.scss'

const ForWho = () => {
    const { para_quien } = infoCourse
    return (
        <section id="para-quien">
            <ContentBox
                theme={'ligth'}
                title={'¿Para quién?'}
                imgRoute={imgForWho}
                body={para_quien}
                flowContent={'normal'}>
            </ContentBox>

            <section id="methodology">
                <div id="banner-meth" uk-parallax="opacity: 0,1; y: -50, 0; viewport: 0.5" tabIndex="0" style={{ backgroundImage: `url(${bgMethodology})` }}>
                </div>
            </section>
        </section>
    )
}

export { ForWho }
