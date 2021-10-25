import React from 'react'
import { ContentBox, SlideNav } from '../../components'
import './teachers.scss'

const Teachers = () => {
    return (
        <section id="docentes">
            <ContentBox
                hideDiv={true}
                theme={'ligth'}
                title={'Docentes'}
                flowContent={'center'}>
                <SlideNav teachers={true} />
            </ContentBox>
        </section>
    )
}

export { Teachers }