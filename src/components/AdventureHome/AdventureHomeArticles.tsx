import { Grid, Typography } from '@mui/material'
import AdventureHomeArticlesList from './AdventureHomeArticlesList'
import articlesArray from 'utils/articlesArray'
import './AdventureHomeSection.scss'

type Props = {}

type ArticleProps = {
    title: string
    paragraph: string
    author: string
    date: string
}

const AdventureHomeArticles = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="div">
                Lorem ipsum dolor sit amet tetur adipis icing elit
            </Typography>
            <Grid container spacing={4}>
                {articlesArray.map(({title, paragraph, author, date}: ArticleProps) => (
                    <Grid item xs={12} sm={6}>
                        <AdventureHomeArticlesList
                            title={title}
                            paragraph={paragraph}
                            author={author}
                            date={date}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default AdventureHomeArticles
