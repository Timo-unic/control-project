import { Container } from '@mui/material'
import SliderSwipe from 'components/SliderSwipe/SliderSwipe'
import AboutHome from 'components/AboutHome/AboutHome'
import AdventureHomeSection from 'components/AdventureHome/AdventureHomeSection'
import GuidesHomeSection from 'components/GuidesHome/GuidesHomeSection'
import JoinUsHome from 'components/JoinUsHome/JoinUsHome'
import PlacesHomeSection from 'components/PlacesHome/PlacesHomeSection'
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
