import { Container } from '@mui/material'
import SliderSwipe from 'components/SliderSwipe/SliderSwipe'
import Home from 'pages/Home/Home'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <SliderSwipe />
            <Home />
        </Container>
    )
}
export default Main
