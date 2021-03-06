import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { ContentBox } from '../ContentBox'
import './cardModule.scss'

ReactModal.setAppElement('#root')

const CardModule = ({ id, src, titleImg, item, title, teacher, date, content }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="card-container-module" onClick={() => setModalIsOpen(true)}>
                <div className="uk-card uk-card-default module-card">
                    <div className="uk-card-media-top card-img">
                        <img src={src} alt={titleImg} />
                    </div>
                </div>
            </div>

            <ReactModal
                id={`info-module${id}`}
                className="modal"
                inset="15px"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalIsOpen(false)}
                preventScroll={false}
            >
                <ContentBox
                    theme={'dark'}
                    title={`Modulo ${item}`}
                    hideDiv={true}
                >
                    <div className="modal-body">
                        <button uk-icon="icon: close; ratio: 2" className="uk-modal-close modal-close-btn" onClick={() => setModalIsOpen(false)}></button>
                        {/* <p className="modal-text">{`Fecha: ${date}`}</p> */}
                        <div className="content-modal">
                            <h4 className="modal-subtitle">Temas:</h4>
                            <ul className="sillabus">
                                {
                                    content.map((item, i) => {
                                        return (
                                            <li key={`topic-${i}`} className="topic">
                                                <p className="modal-text">
                                                    {item}
                                                </p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </ContentBox>
            </ReactModal>
        </>
    )
}

export { CardModule }