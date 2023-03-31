import { Grid, Typography } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './PlacesHome.scss'
import Container from '@mui/material/Container'
import placeicon from 'assets/home-places-icon.png'
import PlacesHomeArticlesList from './PlacesHomeArticlesList'

type Props = {}

const PlacesHomeArticles = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg" className="section-places-container">
                <Typography
                    variant="h5"
                    component="div"
                    align="justify"
                    className="section-places-title"
                >
                    <span>
                        <img src={placeicon} alt="placeicon" />
                    </span>
                    <span className="section-places-title-text">Places</span>
                </Typography>
                <Typography variant="h3" className="section-places-text">
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
                            }) => category === 'Places'
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
                                    <PlacesHomeArticlesList
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

export default PlacesHomeArticles
