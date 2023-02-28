import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './AdventureHomeSection.scss'

type Props = {
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const AdventureHomeArticlesList = ({category, title, paragraph, author, date, image}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="article-image">
                    <img src={image} alt=''/>
                </div>
            </CardContent>
            <CardActions>
               <Button variant='outlined'>{category}</Button> 
            </CardActions>
            <CardContent>
                <div className="article-title">{title}</div>
                <div className='article-paragraph'>
                    {paragraph}
                </div>
                <div className='article-footer'>
                    <div className='article-footer-blogger'>
                        <AccountCircleIcon color="action" />
                        {author}
                    </div>
                    <div className='article-footer-date'>
                        <AccessTimeIcon />
                        {date}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default AdventureHomeArticlesList
