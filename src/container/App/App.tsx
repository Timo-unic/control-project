import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import About from 'pages/About/About'
import BackToTopButton from 'components/BackToTop/BackToTopButton'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
})

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="xl" className="picture-bg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Routes>
                </Container>
                <Footer />
                
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
