import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './GuidesHome.scss'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const GuidesHomeArticlesList = ({
    id,
    category,
    title,
    paragraph,
    author,
    date,
    image,
}: Props) => {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Card variant="outlined" className="guides-content">
            <CardContent>
                <div className="guides-image">
                    <img src={image} alt="" className="guides-image-style" />
                </div>
            </CardContent>
            <CardContent className="guides-block">
                <CardActions>
                    <Button variant="outlined" className="guides-btn" onClick={scrollUp}>
                        <Link to="/guides" className="guides-btn-link">
                            {category}
                        </Link>
                    </Button>
                </CardActions>
                <div className="guides-title">
                    <Link to={`/articles/${id}`} className="guides-title-link" onClick={scrollUp}>
                        {title}
                    </Link>
                </div>
                <div className="guides-paragraph">{paragraph}</div>
                <div className="guides-footer">
                    <div className="guides-footer-blogger">
                        <AccountCircleIcon color="action" />
                        <span className="guides-footer-style">
                            <Link
                                to={`/author/muffin`}
                                className="group-muffin-link"
                                onClick={scrollUp}
                            >
                                {author}
                            </Link>
                        </span>
                    </div>
                    <div className="guides-footer-date">
                        <AccessTimeIcon />
                        <span className="guides-footer-style">{date}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default GuidesHomeArticlesList
