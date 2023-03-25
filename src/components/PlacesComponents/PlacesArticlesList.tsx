import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './PlacesHome.scss'

type Props = {
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const PlacesArticlesList = ({
    category,
    title,
    paragraph,
    author,
    date,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="places-article-content">
            <CardContent>
                <div className="places-image">
                    <img src={image} alt="" className="places-image-style" />
                </div>
            </CardContent>
            <CardContent className="places-article-block">
                <CardActions>
                    <Button variant="outlined" className="places-btn">
                        {category}
                    </Button>
                </CardActions>
                <div className="places-title">{title}</div>
                <div className="places-paragraph">{paragraph}</div>
                <div className="places-footer">
                    <div className="places-footer-blogger">
                        <AccountCircleIcon color="action" />
                        <span className="places-footer-style">{author}</span>
                    </div>
                    <div className="places-footer-date">
                        <AccessTimeIcon />
                        <span className="places-footer-style">{date}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PlacesArticlesList
