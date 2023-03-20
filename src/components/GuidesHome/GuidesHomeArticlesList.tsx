import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './GuidesHome.scss'

type Props = {
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const GuidesHomeArticlesList = ({
    category,
    title,
    paragraph,
    author,
    date,
    image,
}: Props) => {
  return (
    <Card variant="outlined" className="guides-content">
    <CardContent>
        <div className="guides-image">
            <img src={image} alt="" className="guides-image-style" />
        </div>
    </CardContent>
    <CardContent className="guides-block">
        <CardActions>
            <Button variant="outlined" className="guides-btn">
                {category}
            </Button>
        </CardActions>
        <div className="guides-title">{title}</div>
        <div className="guides-paragraph">{paragraph}</div>
        <div className="guides-footer">
            <div className="guides-footer-blogger">
                <AccountCircleIcon color="action" />
                <span className="guides-footer-style">{author}</span>
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