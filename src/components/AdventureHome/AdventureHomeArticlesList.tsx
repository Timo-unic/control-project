import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './AdventureHomeSection.scss'

type Props = {
    title: string
    paragraph: string
    author: string
    date: string
}

const AdventureHomeArticlesList = ({title, paragraph, author, date}: Props) => {
    return (
        <Card variant="outlined">
            <CardActions>
               <Button variant='outlined'>Adventures</Button> 
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
