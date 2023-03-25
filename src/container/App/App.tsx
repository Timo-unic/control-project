import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import About from 'pages/About/About'
import Adventures from 'pages/Adventures/Adventures'
import Places from 'pages/Places/Places'
import Guides from 'pages/Guides/Guides'
import JoinUs from 'pages/JoinUs/JoinUs'

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
                        <Route path="adventures" element={<Adventures />} />
                        <Route path="pLaces" element={<Places />} />
                        <Route path="guides" element={<Guides />} />
                        <Route path="joinus" element={<JoinUs />} />
                    </Routes>
                </Container>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
