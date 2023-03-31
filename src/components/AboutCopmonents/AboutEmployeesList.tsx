import { Card, CardActions, CardContent } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'

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
                    <button className="about-employees-btn-fb">
                        <Link
                            to={socialf}
                            className="about-employees-btn-fb-link"
                        >
                            f
                        </Link>
                    </button>
                    <button className="about-employees-btn-tw">
                        <Link
                            to={socialt}
                            className="about-employees-btn-tw-link"
                        >
                            <TwitterIcon />
                        </Link>
                    </button>
                    <button
                        className="about-employees-btn-in"
                        onClick={() => ({ socialin })}
                    >
                        <Link
                            to={socialin}
                            className="about-employees-btn-in-link"
                        >
                            {' '}
                            in
                        </Link>
                    </button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default AboutEmployeesList
