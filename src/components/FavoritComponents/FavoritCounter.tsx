import { Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const FavoritCounter = (props: Props) => {
    const likedArticle = useAppSelector((state) => state.articlesLikeState)

    const countLikes = Object.values(likedArticle).filter((item) => {
        return item === true
    })

    return (
        <>
            <Typography component={'h6'} sx={{ display: 'inline-block' }}>
                {countLikes.length === 0 ? '' : countLikes.length}
            </Typography>
        </>
    )
}

export default FavoritCounter
