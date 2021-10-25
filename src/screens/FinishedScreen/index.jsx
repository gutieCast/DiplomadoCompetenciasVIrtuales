import React from 'react'
import { ContentBox } from '../../components/ContentBox'
import { Button } from '../../components/Button'
import { logo } from '../../helpers/images'
import './finishedPage.scss'

const FinishedScreen = () => {
    return (
        <section id="finished-page">
            <ContentBox
                theme={'dark inscription'}
                title={'¡Inscripción realizada!'}
                hideDiv={true}
                flowContent={'center'}
            >
                <div className="logo-container-finished">
                    <img src={logo.img} alt={logo.alt} />
                </div>
                <div className="text-container">
                    <p className="text-dark">
                        Has finalizado el proceso de inscripción
                        <br />
                        Pronto te escribiremos al correo
                    </p>
                </div>
                <Button classStyle={"btn-dark"} text={"¡Ok!"} link={`${process.env.PUBLIC_URL}/#acerca-de`} />
            </ContentBox>
        </section>
    )
}

export { FinishedScreen }