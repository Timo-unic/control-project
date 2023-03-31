import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './PlacesHome.scss'
import Container from '@mui/material/Container'
import PlacesArticlesList from './PlacesArticlesList'

type Props = {}

const PlacesArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="md" className="category-article-container">
                <Grid container spacing={40}>
                    {articlesArray
                        .filter((article) => article.category === 'Places')
                        .map(
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
        </>
    )
}

export default PlacesArticles
