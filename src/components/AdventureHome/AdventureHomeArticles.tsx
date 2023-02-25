import { Grid, Typography } from '@mui/material'
import AdventureHomeArticlesList from './AdventureHomeArticlesList'

type Props = {}

const AdventureHomeArticles = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="div">
                Lorem ipsum dolor sit amet tetur adipis icing elit
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    {' '}
                    <AdventureHomeArticlesList />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {' '}
                    <AdventureHomeArticlesList />
                </Grid>
            </Grid>
        </>
    )
}

export default AdventureHomeArticles
