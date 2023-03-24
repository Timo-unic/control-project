import { Container } from '@mui/material'
import './PlacesHome.scss'
import PlacesHomeArticles from './PlacesHomeArticles'

type Props = {}

const PlacesHomeSection = (props: Props) => {
    return (
        <Container maxWidth="xl" className="section-places-container">
            <PlacesHomeArticles />
        </Container>
    )
}

export default PlacesHomeSection
