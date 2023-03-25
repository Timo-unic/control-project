import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './AdventureHome.scss'
import Container from '@mui/material/Container'
import AdventuresArticlesList from './AdventuresArticlesList'

type Props = {}

const AdventuresArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="md" className="category-article-container">
                <Grid container spacing={40}>
                    {articlesArray
                        .filter((article) => article.category === 'Adventures')
                        .map(
                            (
                                {
                                    category,
                                    title,
                                    paragraph,
                                    author,
                                    date,
                                    image,
                                },
                                i
                            ) => (
                                <Grid item xs={12} sm={12} key={i}>
                                    <AdventuresArticlesList
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

export default AdventuresArticles
