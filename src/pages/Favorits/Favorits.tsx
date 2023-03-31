import { Container, Typography } from '@mui/material'
import FavoritArticles from 'components/FavoritComponents/FavoritArticles'

type Props = {}

const Favorits = (props: Props) => {
    return (
        <Container maxWidth="xl" className="category-container">
            <Typography variant="h1" component="div" className="category-title">
                Favorits
            </Typography>
            <FavoritArticles />
        </Container>
    )
}

export default Favorits
