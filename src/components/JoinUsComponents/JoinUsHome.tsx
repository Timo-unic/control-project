import { Button, Container, Typography } from '@mui/material'
import joinicon from 'assets/location-joinus-icon.png'
import footergrad from 'assets/home-gradient.png'
import './JoinUsHome.scss'
import { Link } from 'react-router-dom'

type Props = {}

const JoinUsHome = (props: Props) => {
    return (
        <Container maxWidth="xl" className="joinus-section">
            <Typography variant="h3" component="div">
                <img src={joinicon} alt="joinicon" className="joinus-icon" />
                <div className="joinus-text">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </div>
            </Typography>
            <Button variant="outlined" className="joinus-btn">
                <Link to="/joinus" className="joinus-btn-link">
                    Join us today
                </Link>
            </Button>
            <img src={footergrad} alt="" />
        </Container>
    )
}

export default JoinUsHome
