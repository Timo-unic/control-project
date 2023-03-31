import { Container, Grid } from '@mui/material'
import PlacesArticlesList from 'components/PlacesComponents/PlacesArticlesList'
import { useAppSelector } from 'redux/hooks'
import articlesArray, { Article } from 'utils/articlesArray'

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
                        category,
                        title,
                        paragraph,
                        author,
                        date,
                        image,
                    }) => (
                        <Grid item xs={12} sm={12} key={id}>
                            <PlacesArticlesList
                                id={id}
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
