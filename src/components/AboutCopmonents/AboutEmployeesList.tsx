import { Card, CardActions, CardContent } from '@mui/material'
import TwittIcon from 'assets/twitter_social_icon.svg'
import TwitterIcon from '@mui/icons-material/Twitter'

type Props = {
    photo: string
    name: string
    position: string
    textperson: string
    socialf: string
    socialt: string
    socialin: string
}

const AboutEmployeesList = ({
    photo,
    name,
    position,
    textperson,
    socialf,
    socialt,
    socialin,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent className="about-employees-content">
                <div className="about-employees-photo-field">
                    <img src={photo} alt="" className="about-employees-photo" />
                </div>
                <div className="about-employees-name">{name}</div>
                <div className="about-employees-position">{position}</div>
                <div className="about-employees-line"></div>
                <div className="about-employees-textperson">{textperson}</div>
                <CardActions className="about-employees-field-btns">
                    <button
                        className="about-employees-btn-fb"
                        onClick={() => ({ socialf })}
                    >
                        f
                    </button>
                    <button
                        className="about-employees-btn-tw"
                        onClick={() => ({ socialt })}
                    >
                        <TwitterIcon />
                    </button>
                    <button
                        className="about-employees-btn-in"
                        onClick={() => ({ socialin })}
                    >
                        in
                    </button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default AboutEmployeesList
