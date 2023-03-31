import { Grid, Typography } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './GuidesHome.scss'
import Container from '@mui/material/Container'
import guideicon from 'assets/guides-icon.png'
import GuidesHomeArticlesList from './GuidesHomeArticlesList'

type Props = {}

const GuidesHomeArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg" className="section-guides-container">
                <Typography
                    variant="h5"
                    component="div"
                    align="justify"
                    className="section-guides-title"
                >
                    <span>
                        <img src={guideicon} alt="guideicon" />
                    </span>
                    <span className="section-guides-title-text">Guides</span>
                </Typography>
                <Typography variant="h3" className="section-guides-text">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </Typography>
                <Grid container spacing={4}>
                    {articlesArray
                        .filter(
                            ({
                                id,
                                linkpage,
                                category,
                                title,
                                paragraph,
                                author,
                                date,
                                image,
                            }) => category === 'Guides'
                        )
                        .map(
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
                                <Grid item xs={12} sm={4} key={id}>
                                    <GuidesHomeArticlesList
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
        </>
    )
}

export default GuidesHomeArticles
