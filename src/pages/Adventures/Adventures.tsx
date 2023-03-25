import { Container, Typography } from '@mui/material'
import AdventuresArticles from 'components/AdventureComponents/AdventuresArticles'
import './Adventures.scss'

type Props = {}

const Adventures = (props: Props) => {
    return (
        <Container maxWidth="xl" className="category-container">
            <Typography
                variant="h1"
                component="div"
                className="category-title"
            >
                Adventures
            </Typography>
            <AdventuresArticles />
        </Container>
    )
}

export default Adventures
