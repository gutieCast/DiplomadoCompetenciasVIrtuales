import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../../Button'
import './card.scss'

const Card = ({ recomended, title, price, label, description, linkButton }) => {

    const history = useHistory()

    const handleButton = (optionSelected) => {
        sessionStorage.setItem('option', optionSelected)
        history.push(`${process.env.PUBLIC_URL}/inscribirse`)
    }

    return (
        <div className="card-container">
            {
                recomended &&
                <div className="recomended-container">
                    <p className="recomended-tag">
                        opción recomendada
                    </p>
                </div>
            }
            <div className={`uk-card uk-card-default uk-card-body card-investment ${recomended ? 'recomended' : ''}`}>
                <h3 className={`uk-card-title title-card ${recomended ? 'recomended' : ''}`}>
                    {title}
                </h3>
                <span className={`info-price ${recomended ? 'recomended' : ''}`}>
                    <span className={`price ${recomended ? 'recomended' : ''}`}>
                        {` ${price}`}
                    </span>
                    {
                        recomended &&
                        <>
                            <br />
                            <span className="price-label">
                                {label}
                            </span>
                        </>
                    }

                </span>
                <ul className={`description-investment ${recomended ? 'recomended' : ''}`}>
                    {
                        description.map((item, i) => {
                            return (
                                <li key={`plan-item-${i}`} className={`${recomended ? 'recomended' : ''}`}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <Button btn={true} text="inscribirse" classStyle={`${recomended ? 'btn-dark' : 'btn-normal'} `} onClick={() => handleButton(linkButton)} />
            </div>
        </div>
    )
}

export { Card }