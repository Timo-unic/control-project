import { Container } from '@mui/material'
import AdventureHomeArticles from './AdventureHomeArticles'
import './AdventureHome.scss'
import { Link } from 'react-router-dom'
import instagram from 'assets/instagram-logo.svg'
import twitter from 'assets/twitter-logo.svg'

type Props = {}

const AdventureHomeSection = (props: Props) => {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const scrollToSocial = () => {
        window.scrollTo({
            top: 1300,
            behavior: 'smooth',
        })
    }

    return (
        <Container maxWidth="xl" className="section-adv-container">
            <div className="social-content">
                <div className="instagram-content">
                    <div>
                        <img
                            src={instagram}
                            alt="instagram"
                            className="instagram-image"
                        />
                    </div>
                    <Link to="/about" className="instagram-link" onClick={scrollToSocial}>
                        Instagram
                    </Link>
                </div>
                <div className="twitter-content">
                    <div>
                        <img
                            src={twitter}
                            alt="twitter"
                            className="twitter-image"
                        />
                    </div>
                    <Link to="/about" className="twitter-link" onClick={scrollToSocial}>
                        Twitter
                    </Link>
                </div>
            </div>
            <AdventureHomeArticles />
            <div className="section-adv-home-link">
                <Link to="/adventures" className="section-adv-home-link-style" onClick={scrollUp}>
                    Discover more
                </Link>
            </div>
        </Container>
    )
}

export default AdventureHomeSection
