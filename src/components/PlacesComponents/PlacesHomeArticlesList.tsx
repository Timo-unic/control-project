import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './PlacesHome.scss'
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

const PlacesHomeArticlesList = ({
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
        <Card variant="outlined" className="places-content">
            <CardContent>
                <div className="places-image">
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
                    <img src={image} alt="" className="places-image-style" />
                </div>
            </CardContent>
            <CardContent className="places-block">
                <CardActions>
                    <Button
                        variant="outlined"
                        className="places-btn"
                        onClick={scrollUp}
                    >
                        <Link to="/places" className="places-btn-link">
                            {category}
                        </Link>
                    </Button>
                </CardActions>
                <div className="places-title">
                    <Link
                        to={`/articles/${id}`}
                        className="places-title-link"
                        onClick={scrollUp}
                    >
                        {title}
                    </Link>
                </div>
                <div className="places-paragraph">{paragraph}</div>
                <div className="places-footer">
                    <div className="places-footer-blogger">
                        <AccountCircleIcon color="action" />
                        <span className="places-footer-style">
                            <Link
                                to={`/author/muffin`}
                                className="group-muffin-link"
                                onClick={scrollUp}
                            >
                                {author}
                            </Link>
                        </span>
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

export default PlacesHomeArticlesList
