import { Container } from '@mui/material'
import AdventureHomeArticles from './AdventureHomeArticles'
import './AdventureHome.scss'

type Props = {}

const AdventureHomeSection = (props: Props) => {
    return (
        <Container maxWidth="xl" className="section-adv-container">
            <AdventureHomeArticles />
        </Container>
    )
}

export default AdventureHomeSection
