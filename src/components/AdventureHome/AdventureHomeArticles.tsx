import { Grid, Typography } from '@mui/material'
import AdventureHomeArticlesList from './AdventureHomeArticlesList'
import articlesArray from 'utils/articlesArray'
import './AdventureHomeSection.scss'

type Props = {}

const AdventureHomeArticles = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="div">
                Lorem ipsum dolor sit amet tetur adipis icing elit
            </Typography>
            <Grid container spacing={4}>
                {articlesArray.map(({category, title, paragraph, author, date, image}, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                        <AdventureHomeArticlesList
                            category={category}
                            title={title}
                            paragraph={paragraph}
                            author={author}
                            date={date}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default AdventureHomeArticles
