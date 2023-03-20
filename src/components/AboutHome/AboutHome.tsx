import { Typography } from '@mui/material'
import abouthead from 'assets/image-about-3image.jpg'
import './AboutHome.scss'

type Props = {}

const AboutHome = (props: Props) => {
    return (
        <Typography variant="inherit" component="div" >
            <img src={abouthead} alt="abouthead" className='about-image' />
        </Typography>
    )
}

export default AboutHome
