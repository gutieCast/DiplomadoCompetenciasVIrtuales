import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { inscriptionButton } from '../../../../helpers/images'
import { wordBalloon } from '../../../../helpers/images'
import './buttonFixed.scss'

const ButtonFixed = () => {

    const buttonFixedRef = useRef(null);
    const firstRender = useRef(true);

    const [showBalloon, setShowBalloon] = useState(true)
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setTimeout(() => setShowBalloon(false), 5000)
    }, [])

    const onMouseEnter = () => {
        setHovered(true)
    }

    const onMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div className="button-fixed">
            {
                showBalloon &&
                <span className="uk-animation-shake word-balloon" style={{ backgroundImage: `url(${wordBalloon})`, display: `${hovered ? 'block' : 'none'}` }}>
                </span>
            }
            <Link className="button-icon" ref={buttonFixedRef} style={{ bottom: '100px', right: '100px' }} to={`${process.env.PUBLIC_URL}/inscribirse`} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
                <img src={inscriptionButton} alt="botón fijo inscripción" />
            </Link>
        </div >
    )
}

export { ButtonFixed }