import { Container, Typography } from '@mui/material'
import AdventuresArticles from 'components/AdventureComponents/AdventuresArticles'
import GuidesArticles from 'components/GuidesComponents/GuidesArticles'
import PlacesArticles from 'components/PlacesComponents/PlacesArticles'
import './GroupMuffin.scss'

type Props = {}

const GroupMuffin = (props: Props) => {
    return (
        <Container maxWidth="xl" className="category-container">
            <Typography variant="h1" component="div" className="category-title">
                Muffin Group
            </Typography>
            <AdventuresArticles />
            <PlacesArticles />
            <GuidesArticles />
        </Container>
    )
}

export default GroupMuffin
