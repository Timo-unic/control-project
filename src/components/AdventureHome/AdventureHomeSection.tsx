import { Container } from '@mui/material'
import AdventureHomeArticles from './AdventureHomeArticles'
import './AdventureHome.scss'

type Props = {}

const AdventureHomeSection = (props: Props) => {
    return (
        <Container maxWidth="xl" className="section-adv-container">
            <AdventureHomeArticles />
            <div className="section-adv-home-link">Discover more</div>
        </Container>
    )
}

export default AdventureHomeSection
