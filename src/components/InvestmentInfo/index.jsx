import React from 'react'
import { ContentBox } from '../ContentBox'
import { infoCourse } from '../../helpers/data'
import { Card } from './components/Card'
import { bannerInscription } from '../../helpers/images'
import { Button } from '../Button'
import './investmentInfo.scss'

const InvestmentInfo = () => {
    const { inversion } = infoCourse;

    return (
        <section id="inversion">
            <ContentBox
                theme="ligth"
                title="inversión"
                hideDiv={true}
                flowContent={"center"}
            >
                <ul className="cards-grid">
                    {
                        inversion.map(({ recomended, title, price, label, description, optionSelected }) => {
                            return (
                                <li key={title} className="card-item">
                                    <Card
                                        recomended={recomended}
                                        title={title}
                                        price={price}
                                        label={label}
                                        description={description}
                                        linkButton={optionSelected}
                                    />
                                </li>

                            )
                        })
                    }

                </ul>

                <div className="uk-content uk-expand investment-content">
                    <p className="investment-text">A tomar en cuenta:</p>
                    <ul className="investment-list">
                        <li>Derecho académico: Bs. 200</li>
                        <li>El derecho académico debe cancelarse hasta máx. 5 días antes del inicio del primer módulo.</li>
                        <li>El pago de cada cuota debe realizarse hasta máx. el día 5 de cada mes e inicio del módulo.</li>
                    </ul>
                </div>

                <div className="banner-container-inscription">
                    <div className="banner-inscription" style={{ backgroundImage: `url(${bannerInscription})` }}>
                        <h2 className="banner-text"> ¡inscríbite ahora! </h2>
                        <Button classStyle={'btn-dark'} link={`${process.env.PUBLIC_URL}/inscribirse`} anim={'uk-animation-kenburns'} text={'haz click aquí'} />
                    </div>
                </div>

            </ContentBox>
        </section>
    )
}

export { InvestmentInfo }