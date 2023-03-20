import { Container } from '@mui/material'
import './GuidesHome.scss'
import GuidesHomeArticles from './GuidesHomeArticles'

type Props = {}

const GuidesHomeSection = (props: Props) => {
  return (
    <Container maxWidth="xl" className="section-guides-container">
            <GuidesHomeArticles />
        </Container>
  )
}

export default GuidesHomeSection