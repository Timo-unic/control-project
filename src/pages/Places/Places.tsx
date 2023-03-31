import { Container, Typography } from '@mui/material'
import PlacesArticles from 'components/PlacesComponents/PlacesArticles'
import './Places.scss'

type Props = {}

const Places = (props: Props) => {
    return (
        <Container maxWidth="xl" className="category-container">
            <Typography variant="h1" component="div" className="category-title">
                Places
            </Typography>
            <PlacesArticles />
        </Container>
    )
}

export default Places
