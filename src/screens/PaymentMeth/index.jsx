import React, { useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { ContentBox } from '../../components/ContentBox'
import { validations } from '../../helpers/validations'
import { Button } from '../../components/Button'
import { qrPay } from '../../helpers/images'
import './paymentMeth.scss'

export const ProofInput = ({ setGoFinished }) => {
    const [file, setFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const fileInput = useRef(null)

    const onChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            console.log('selectFile');
            setFile(e.target.files[0])
            setIsFilePicked(true)
        }
    }

    const sendFile = (file) => {
        fetch("/comprobante-de-pago.php", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: file
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendFile(file)
        console.log('upload ' + file.name);
        setGoFinished(true)
    }
    return <>
        <input
            type='file'
            multiple={false}
            name='cargar documento'
            ref={fileInput}
            onChange={onChange}
            style={{ display: 'none' }}
        />

        {
            isFilePicked
                ?
                <>
                    <div className="text-container">
                        <p className="info">
                            Nombre: {file.name}
                            <br />
                        </p>
                        <p className="info">
                            Al verificar la información, se le enviará un correo electrónico para coordinar los datos de facturación
                            <br />
                        </p>
                    </div>
                    <Button
                        btn={true}
                        text={'enviar'}
                        type={'submit'}
                        onClick={(e) => handleSubmit(e)}
                    />
                </>
                :
                <>
                    <Button
                        btn={true}
                        text={'cargar archivo'}
                        onClick={() => fileInput.current.click()}
                    />
                </>
        }
    </>
}


const PaymentMeth = () => {

    const [email, setEmail] = useState('')
    const { errors, validateEmail } = validations

    const handleInput = (e, validate, set) => {
        validate(e.target.value);
        set(e.target.value);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [goFinished, setGoFinished] = useState(false);
    return (
        <section id="payment-method">
            {
                goFinished && (<Redirect to={`${process.env.PUBLIC_URL}/finalizado`} />)
            }
            <ContentBox
                theme={'ligth inscription'}
                title={'modo de pago'}
                hideDiv={true}
                flowContent={'center'}
            >
                <label className="label-section blue">
                    Paso 2 de 2
                </label>
                <div className="text-container">
                    <div className="uk-margin">
                        <input className="uk-input" name="email" id="email" type="email" placeholder="*Confirmar correo electrónico" value={email} onChange={(e) => handleInput(e, validateEmail, setEmail)} />
                        {errors.email !== '' ? <span>{errors.email}</span> : ''}
                    </div>
                    <p>
                        Puedes realizar el pago por transferencia bancaria simple o escanear nuestro código QR, luego adjunta tu comprobante bancario
                    </p>
                </div>
                <div className="payment-container">
                    <div className="qr-container">
                        <img id="QR-Pay" src={qrPay} alt="QR para pago" />
                        <p className="label-payment">
                            Escanea el QR para realizar la transferencia
                        </p>
                    </div>
                    <div className="info-container">
                        <h4 className="main-info">
                            Cuenta corriente Banco Unión
                        </h4>
                        <div>
                            <label className="info">
                                Número de cuenta:
                            </label>
                            <p className="number-info">
                                10000033396991 (Bs.)
                            </p>
                        </div>
                        <div>
                            <label className="info">
                                A nombre de:
                            </label>
                            <p className="main-info">
                                INNOVAPAX STUDIO S.R.L.
                            </p>
                            <label className="info">
                                Cuenta corporativa iPAX Studio
                            </label>
                        </div>
                    </div>
                </div>
                <div className="receipt-input-file">
                    <h4 className="title-input-file">
                        Adjuntar comprobante
                    </h4>
                    <ProofInput setGoFinished={setGoFinished} />
                </div>
            </ContentBox>
        </section>
    )
}

export { PaymentMeth }