import { Container } from '@mui/material'
import AdventureHomeArticles from './AdventureHomeArticles'
import './AdventureHome.scss'
import { Link } from 'react-router-dom'

type Props = {}

const AdventureHomeSection = (props: Props) => {
    return (
        <Container maxWidth="xl" className="section-adv-container">
            <AdventureHomeArticles />
            <div className="section-adv-home-link">
                <Link to="/adventures" className="section-adv-home-link-style">
                    Discover more
                </Link>
            </div>
        </Container>
    )
}

export default AdventureHomeSection
