import { Container, Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import articlesArray, { Article } from 'utils/articlesArray'
import FavoritArticlesList from './FavoritArticlesList'
import './FavoritArticles.scss'

type Props = {}

const FavoritArticles = (props: Props) => {
    const likedArticles = useAppSelector((state) => state.articlesLikeState)

    const likedArticlesArray = articlesArray.filter(
        ({ id }: Article) => likedArticles[id]
    )

    return (
        <Container maxWidth="md" className="category-article-container">
            <Grid container spacing={40}>
                {likedArticlesArray.map(
                    ({
                        id,
                        linkpage,
                        category,
                        title,
                        paragraph,
                        author,
                        date,
                        image,
                    }) => (
                        <Grid item xs={12} sm={12} key={id}>
                            <FavoritArticlesList
                                id={id}
                                linkpage={linkpage}
                                category={category}
                                title={title}
                                paragraph={paragraph}
                                author={author}
                                date={date}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    )
}

export default FavoritArticles
