import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './AdventureHome.scss'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const AdventureHomeArticlesList = ({
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

    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="article-content">
            <CardContent>
                <div className="article-image">
                    <Button
                        variant="outlined"
                        className="article-image-likebtn"
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id))
                        }
                    >
                        {isLiked ? (
                            <FavoriteIcon sx={{ color: 'white' }} />
                        ) : (
                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                        )}
                    </Button>
                    <img src={image} alt="" className="article-image-style" />
                </div>
            </CardContent>
            <CardContent className="article-block">
                <CardActions>
                    <Button
                        variant="outlined"
                        className="article-btn"
                        onClick={scrollUp}
                    >
                        <Link to="/adventures" className="article-btn-link">
                            {category}
                        </Link>
                    </Button>
                </CardActions>
                <div className="article-title">
                    <Link
                        to={`/articles/${id}`}
                        className="article-title-link"
                        onClick={scrollUp}
                    >
                        {title}
                    </Link>
                </div>
                <div className="article-paragraph">{paragraph}</div>
                <div className="article-footer">
                    <div className="article-footer-blogger">
                        <AccountCircleIcon color="action" />
                        <span className="article-footer-style">
                            <Link
                                to={`/author/muffin`}
                                className="group-muffin-link"
                                onClick={scrollUp}
                            >
                                {author}
                            </Link>
                        </span>
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

export default AdventureHomeArticlesList
