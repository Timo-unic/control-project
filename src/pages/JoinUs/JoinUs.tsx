import { Container } from '@mui/material'
import './JoinUs.scss'
import joinusgrad from 'assets/join-gradient.png'
import iconusefulinfo from 'assets/contact-icon.png'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

type Props = {}

const JoinUs = (props: Props) => {
    return (
        <>
            <Container maxWidth="xl" className="joinus-title-bg">
                <Container>
                    <div className="joinus-title-content">
                        <div className="joinus-title">
                            <p>
                                Like adventures and writing? <br /> Contact and
                                join us today
                            </p>
                        </div>
                        <div className="joinus-title-phone">
                            +45 566 509 004
                        </div>
                        <div className="joinus-title-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed <br /> do <br /> eiusmod
                                tempor incididunt ut labor.
                            </p>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container maxWidth="xl" className="joinus-main-bg">
                <img src={joinusgrad} alt="" className="joinus-main-bg-grad" />
                <Container>
                    <div className="joinus-main-submit">
                        <div className="joinus-main-submit-title">
                            Lorem ipsum dolor sit amet tetur
                            <div className="joinus-main-submit-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labor
                            </div>
                        </div>
                        <div className="joinus-main-submit-form">
                            form submit
                        </div>
                    </div>
                    <div className="joinus-main-useful">
                        <div className="joinus-main-info">
                            <div className="joinus-main-info-title">
                                Useful info
                            </div>
                            <div className="joinus-main-info-item">
                                <div>
                                    <img src={iconusefulinfo} alt="" />
                                </div>
                                <span className="joinus-main-useful-text">
                                    Poster pentolum quantum pored dolor sit
                                    aisicing elit
                                </span>
                            </div>
                            <div className="joinus-main-info-item">
                                <div>
                                    <img src={iconusefulinfo} alt="" />
                                </div>
                                <span className="joinus-main-useful-text">
                                    Lorem ipsum dolor sit amet tetur adipisicing
                                </span>
                            </div>
                            <div className="joinus-main-info-item">
                                <div>
                                    <img src={iconusefulinfo} alt="" />
                                </div>
                                <span className="joinus-main-useful-text">
                                    Estrop pner valanti osteromus elit via
                                    modore erondero patern
                                </span>
                            </div>
                        </div>
                        <div className="joinus-main-contacts">
                            <div className="joinus-main-contacts-title">
                                Contact us
                            </div>
                            <div className="joinus-main-contacts-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labor
                            </div>
                            <div className="joinus-main-contacts-icon">
                                <PhoneIcon sx={{ margin: '0 10px' }} />
                                <span className="joinus-main-useful-text">
                                    +01 203 4040 3333
                                </span>
                            </div>

                            <div className="joinus-main-contacts-icon">
                                <EmailIcon sx={{ margin: '0 10px' }} />
                                <span className="joinus-main-useful-text">
                                    noreply@envato.com
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default JoinUs
