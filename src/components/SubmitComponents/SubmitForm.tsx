import './SubmitForm.scss'
import axios from 'axios'
import { useState } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize'

type Props = {}

type Order = {
    name: string
    mail: string
    subject: string
    details: string
    message: string
}

const SubmitForm = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        mail: '',
        subject: '',
        details: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({ ...prevState, name: e.target.value }))

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({ ...prevState, mail: e.target.value }))

    const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({ ...prevState, subject: e.target.value }))

    const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({ ...prevState, details: e.target.value }))

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setOrderData((prevState) => ({ ...prevState, message: e.target.value }))

    const orderSend = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    mail: orderData.mail,
                    subject: orderData.subject,
                    details: orderData.details,
                    message: orderData.message,
                }
            )
            .then((res) => res.data)
            .then(({ name, mail, subject, details, message }) => {
                setOrderData({
                    name,
                    mail,
                    subject,
                    details,
                    message,
                })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend} className="joinus-form-content">
                <div className="joinus-form-name">
                    <input
                        type="text"
                        placeholder="Name"
                        value={orderData.name}
                        onChange={handleName}
                        className="joinus-form-name-field"
                    />
                </div>
                <div className="joinus-form-section">
                    <div className="joinus-form-section-mail">
                        <input
                            type="text"
                            placeholder="Email"
                            value={orderData.mail}
                            onChange={handleMail}
                            className="joinus-form-mail-field"
                        />
                    </div>
                    <div className="joinus-form-section-subject">
                        <input
                            type="text"
                            placeholder="subject"
                            value={orderData.subject}
                            onChange={handleSubject}
                            className="joinus-form-subject-field"
                        />
                    </div>
                </div>
                <div className="joinus-form-details">
                    <input
                        type="text"
                        placeholder="Details"
                        value={orderData.details}
                        onChange={handleDetails}
                        className="joinus-form-details-field"
                    />
                </div>
                <div className="joinus-form-message">
                    <TextareaAutosize
                        placeholder="Your message"
                        minRows={10}
                        value={orderData.message}
                        onChange={handleMessage}
                        className="joinus-form-message-field"
                    />
                </div>
                <button type="submit" className="joinus-form-btn">
                    Send
                </button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div className="joinus-form-message-callback">
                <div>
                    Dear, {orderData.name} <br /> Thank you for joining us!
                </div>
                <div>
                    Your subject: {orderData.subject} will be acquainted
                    shortly.
                </div>
                <div>
                    We will contact you at Your e-mail address: {orderData.mail}
                    <br />
                    Have a Nice Day!
                </div>
            </div>
        )
    }

    return <>{isOrderSend ? renderMessage() : renderForm()}</>
}

export default SubmitForm
