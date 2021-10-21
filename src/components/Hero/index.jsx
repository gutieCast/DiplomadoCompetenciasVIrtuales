import React from 'react'
import { imgHero } from '../../helpers/images'
import { logoCourse } from '../../helpers/images'
import { SponsorsLogos } from '../SponsorsLogos'
import './hero.scss'

const Hero = () => {
    return (
        <div id="hero">
            <div id="img-hero" style={{ backgroundImage: `url(${imgHero})` }}>
                <div className="logo-course-container"
                    uk-parallax="opacity: 1,0; y: -100, 0; viewport: 0.5"
                >
                    <div className="logo-course" style={{ backgroundImage: `url(${logoCourse})` }}></div>
                </div>

                <SponsorsLogos />
            </div>
        </div>
    )
}

export { Hero }