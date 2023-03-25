import { Container, Typography } from '@mui/material'
import GuidesArticles from 'components/GuidesComponents/GuidesArticles'
import './Guides.scss'

type Props = {}

const Guides = (props: Props) => {
    return (
        <Container maxWidth="xl" className="category-container">
            <Typography variant="h1" component="div" className="category-title">
                Guides
            </Typography>
            <GuidesArticles />
        </Container>
    )
}

export default Guides
