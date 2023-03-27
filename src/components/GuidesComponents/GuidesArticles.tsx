import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './GuidesHome.scss'
import Container from '@mui/material/Container'
import GuidesArticlesList from './GuidesArticlesList'

type Props = {}

const GuidesArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="md" className="category-article-container">
                <Grid container spacing={40}>
                    {articlesArray
                        .filter(
                            ({
                                id,
                                category,
                                title,
                                paragraph,
                                author,
                                date,
                                image,
                            }) => category === 'Guides'
                        )
                        .map(
                            (
                                {
                                    id,
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
                                    <GuidesArticlesList
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

export default GuidesArticles
