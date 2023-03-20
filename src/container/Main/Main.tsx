import { Container } from '@mui/material'
import SliderSwipe from 'components/SliderSwipe/SliderSwipe'
import Home from 'pages/Home/Home'
import './Main.scss'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="xl" className="picture-bg">
            <SliderSwipe />
            <Home />
        </Container>
    )
}
export default Main
