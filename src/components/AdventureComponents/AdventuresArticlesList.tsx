import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './AdventureHome.scss'

type Props = {
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const AdventuresArticlesList = ({
    category,
    title,
    paragraph,
    author,
    date,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="adventures-article-content">
            <CardContent>
                <div className="article-image">
                    <img src={image} alt="" className="article-image-style" />
                </div>
            </CardContent>
            <CardContent className="adventures-article-block">
                <CardActions>
                    <Button variant="outlined" className="article-btn">
                        {category}
                    </Button>
                </CardActions>
                <div className="article-title">{title}</div>
                <div className="article-paragraph">{paragraph}</div>
                <div className="article-footer">
                    <div className="article-footer-blogger">
                        <AccountCircleIcon color="action" />
                        <span className="article-footer-style">{author}</span>
                    </div>
                    <div className="article-footer-date">
                        <AccessTimeIcon />
                        <span className="article-footer-style">{date}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default AdventuresArticlesList
