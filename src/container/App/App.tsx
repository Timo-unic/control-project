import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header/>
    <Main/>
    <Footer/>
    </StyledEngineProvider>
  )
}

export default App