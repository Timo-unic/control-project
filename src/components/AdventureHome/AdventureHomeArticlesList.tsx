import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

type Props = {}

const AdventureHomeArticlesList = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardActions>
               <Button variant='outlined'>Adventures</Button> 
            </CardActions>
            <CardContent>
                <div className="article-title">Donec tempor pur</div>
                <div className='article-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquum.
                </div>
                <div className='article-footer'>
                    <div className='article-footer-blogger'>
                        <AccountCircleIcon color="action" />
                        Muffin Group
                    </div>
                    <div className='article-footer-date'>
                        <AccessTimeIcon />
                        October 23, 2019
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default AdventureHomeArticlesList
