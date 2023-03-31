import { Button, Card, CardActions, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import './AdventureHome.scss'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    linkpage: string
    category: string
    title: string
    paragraph: string
    author: string
    date: string
    image: string
}

const AdventuresArticlesList = ({
    id,
    linkpage,
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
        <Card variant="outlined" className="adventures-article-content">
            <CardContent className="adventures-article-container">
                <div className="adventures-article-image">
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
                    <img
                        src={image}
                        alt=""
                        className="adventures-article-image-style"
                    />
                </div>
                <div className="adventures-article-block">
                    <CardActions>
                        <Button
                            variant="outlined"
                            className="adventures-article-btn"
                            onClick={scrollUp}
                        >
                            <Link to={linkpage} className="article-btn-link">
                                {category}
                            </Link>
                        </Button>
                    </CardActions>
                    <div className="adventures-article-title">
                        <Link
                            to={`/articles/${id}`}
                            className="article-title-link"
                            onClick={scrollUp}
                        >
                            {title}
                        </Link>
                    </div>
                    <div className="adventures-article-paragraph">
                        {paragraph}
                    </div>
                    <div className="adventures-article-footer">
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
                </div>
            </CardContent>
        </Card>
    )
}

export default AdventuresArticlesList
