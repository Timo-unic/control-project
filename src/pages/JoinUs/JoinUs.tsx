import { Container, Typography } from '@mui/material'
import './JoinUs.scss'
import joinusgrad from 'assets/join-gradient.png'

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
                        <div className="joinus-main-info">Useful info</div>
                        <div className="joinus-main-contacts">Contact us</div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default JoinUs
