import { Button, Container, Typography } from '@mui/material'
import joinicon from 'assets/location-joinus-icon.png'
import './JoinUsHome.scss'

type Props = {}

const JoinUsHome = (props: Props) => {
    return (
        <Container maxWidth="xl" className="joinus-section">
            <Typography variant="h3" component="div">
                {' '}
                <img src={joinicon} alt="joinicon" className="joinus-icon" />
                <div className="joinus-text">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </div>
            </Typography>
            <Button variant="outlined" className="joinus-btn">
                Join us today
            </Button>
        </Container>
    )
}

export default JoinUsHome
