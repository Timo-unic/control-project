import { Container } from '@mui/material'
import minilady from 'assets/home-mini-lady.png'
import { Link } from 'react-router-dom'
import './AboutHome.scss'

type Props = {}

const AboutHome = (props: Props) => {
    const scrollToReview = () => {
        window.scrollTo({
            top: 2500,
            behavior: 'smooth',
        })
    }

    return (
        <Container maxWidth="xl" className="about-home-content">
            <div className="about-home-section">
                <div className="about-home-review">
                    <div>
                        <p className="about-topic-review-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqu enim ad minim veniam.
                        </p>
                    </div>
                    <div className="about-topic-review">
                        <img
                            src={minilady}
                            alt="minilady"
                            className="about-topic-review-avatar"
                        />
                        <div className="about-topic-review-name">
                            <Link
                                to={'/about'}
                                onClick={scrollToReview}
                                className="about-topic-review-link"
                            >
                                Jenny Penny
                            </Link>
                            <span className="about-topic-review-mail">
                                <Link
                                    to={'/about'}
                                    onClick={scrollToReview}
                                    className="about-topic-review-link"
                                >
                                    CEO @ Pandolum
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutHome
