import { Grid, Typography } from '@mui/material'
import AdventureHomeArticlesList from './AdventureHomeArticlesList'
import articlesArray from 'utils/articlesArray'
import './AdventureHome.scss'
import Container from '@mui/material/Container'
import adicon from 'assets/adventure-icon.png'

type Props = {}

const AdventureHomeArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg" className="section-article-container">
                <Typography
                    variant="h5"
                    component="div"
                    align="justify"
                    className="section-adv-title"
                >
                    <span>
                        <img src={adicon} alt="adicon" />
                    </span>
                    <span className="section-adv-title-text">Adventures</span>
                </Typography>
                <Typography variant="h3" className="section-adv-text">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </Typography>
                <Grid container spacing={4}>
                    {articlesArray
                        .filter((article) => article.category === 'Adventures')
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
                                <Grid item xs={12} sm={6} key={i}>
                                    <AdventureHomeArticlesList
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

export default AdventureHomeArticles
