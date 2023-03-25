import { Container } from '@mui/material'
import SliderSwipe from 'components/SliderSwipe/SliderSwipe'
import AboutHome from 'components/AboutCopmonents/AboutHome'
import AdventureHomeSection from 'components/AdventureComponents/AdventureHomeSection'
import GuidesHomeSection from 'components/GuidesComponents/GuidesHomeSection'
import JoinUsHome from 'components/JoinUsComponents/JoinUsHome'
import PlacesHomeSection from 'components/PlacesComponents/PlacesHomeSection'
import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <SliderSwipe />
            <AdventureHomeSection />
            <AboutHome />
            <PlacesHomeSection />
            <GuidesHomeSection />
            <JoinUsHome />
        </Container>
    )
}

export default Home
