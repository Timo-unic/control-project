import Typography from '@mui/material/Typography'
import adicon from 'assets/adventure-icon.png'
import AdventureHomeArticles from './AdventureHomeArticles'
import './AdventureHomeSection.scss'

type Props = {}

const AdventureHomeSection = (props: Props) => {
  return (
    <>
    <Typography variant="h5" component="div" align='justify'><img src={adicon} alt="adicon" /> Adventures</Typography>
    <AdventureHomeArticles/>
    </>
  )
}

export default AdventureHomeSection