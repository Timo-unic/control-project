import { Container } from '@mui/material'
import AdventureHomeSection from 'components/AdventureHome/AdventureHomeSection'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <AdventureHomeSection />
        </Container>
    )
}

export default Home
