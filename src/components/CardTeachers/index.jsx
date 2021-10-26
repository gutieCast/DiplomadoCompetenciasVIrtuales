import React, { useState } from 'react'
import './cardTeacher.scss'


const CardTeacher = ({ src, nameTeacher, description }) => {

    const [infoIsExpanded, setInfoIsExpanded] = useState(false);

    const handleClick = () => {
        if (infoIsExpanded) {
            setInfoIsExpanded(false)
        } else {
            setInfoIsExpanded(true)
        }
    }

    const onMouseEnter = () => {
        setInfoIsExpanded(true)
    }

    const onMouseLeave = () => {
        setInfoIsExpanded(false)
    }

    return (
        <div className="card-container-teacher" tabIndex="0" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} onClick={() => handleClick()} >
            <div className="uk-card uk-card-default teacher-card">
                <div className="uk-animation-toggle uk-card-media-top card-img" tabIndex="1">
                    <img src={src} alt={`${nameTeacher} card`} />
                    <div
                        className={`uk-animation-slide-bottom-medium info-module-spread-out ${infoIsExpanded ? 'shown' : 'hide'}`}
                    >
                        {/* <h3 className="title-spread-out">{nameTeacher}</h3> */}
                        <p className="text-spread-out">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardTeacher }
