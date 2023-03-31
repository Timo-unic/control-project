import { Typography } from '@mui/material'
import JoinUsHome from 'components/JoinUsComponents/JoinUsHome'
import './About.scss'
import aboutimagesection from 'assets/about-mountains.jpg'
import abouticonsection from 'assets/about-icons.png'
import AboutEmployees from 'components/AboutCopmonents/AboutEmployees'
import logo from 'assets/Logo-connect.svg'
import lady from 'assets/about-lady.jpg'
import minilady from 'assets/home-mini-lady.png'
import iconquotes from 'assets/about-quotes.png'
import { Container } from '@mui/system'
import Reviews from 'components/Reviews/Reviews'
import { Link } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Typography variant="h3" component="div" className="about-title-bg">
                <div className="about-title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </div>
                <div className="about-title-text">
                    Lorem ipsum dolor sit amet, consectetur lorem adipisicing
                    elit, sed dolor sit amet
                </div>
            </Typography>
            <Typography variant="h5" component="div" className="about-section">
                <div className="about-section-title">
                    <img
                        src={abouticonsection}
                        alt="abouticonsection"
                        className="about-icon-section"
                    />
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                    <div className="about-section-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labor
                    </div>
                    <div className="about-section-link">
                        <Link
                            to={'/about'}
                            className="about-section-link"
                            onClick={scrollUp}
                        >
                            Discover more
                        </Link>
                    </div>
                </div>
                <img
                    src={aboutimagesection}
                    alt="aboutimagesection"
                    className="about-image-section"
                />
            </Typography>
            <AboutEmployees />
            <Container maxWidth="xl" className="about-topic-container">
                <Container maxWidth="lg" className="about-topic-content">
                    <div className="about-topic-leftfield">
                        <img src={logo} alt="connect-world" />
                        <div className="about-topic-title">
                            Lorem ipsum dolor sit amet tetur adipis icing elit
                        </div>
                        <p className="about-topic-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. <br /> <br /> Duis aute
                            irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Sed
                            ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </p>
                    </div>
                    <div className="about-topic-rightfield">
                        <div className="about-topic-content-image">
                            <img
                                src={lady}
                                alt="lady"
                                className="about-topic-image"
                            />
                        </div>
                        <div>
                            <img src={iconquotes} alt="iconquotes" />
                            <p className="about-topic-review-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqu enim
                                ad minim veniam.
                            </p>
                        </div>
                        <div className="about-topic-review">
                            <img
                                src={minilady}
                                alt="minilady"
                                className="about-topic-review-avatar"
                            />
                            <div className="about-topic-review-name">
                                Jenny Penny
                                <span className="about-topic-review-mail">
                                    CEO @ Pandolum
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
                <Reviews />
            </Container>
            <JoinUsHome />
        </>
    )
}

export default About
