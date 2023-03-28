import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import articlesArray, { Article, getArticlesObject } from 'utils/articlesArray'
import './ArticlePage.scss'
import articleicon from 'assets/single-quote.png'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    const { id } = useParams()

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h3"
                component="div"
                className="article-content-title-bg"
            >
                <div className="article-content-title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </div>
                <div className="article-content-title-text">
                    Lorem ipsum dolor sit amet, consectetur lorem adipisicing
                    elit, sed dolor sit amet
                </div>
            </Typography>
            <Typography
                variant="h3"
                component="div"
                className="article-content-slogan"
            >
                <div className="article-content-slogan-text">
                    „Lorem modi tempora incidunt ut labore et dolore magnam
                    moditeora incidunt ut labore et dolore magnam.”
                </div>
            </Typography>
            <Container maxWidth="xl" className="article-content-fieldone">
                <div className="article-content-title">
                    {articlesObject[parseInt(id!)].title}
                </div>
                <Container
                    maxWidth="sm"
                    className="article-content-fieldone-text"
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: articlesObject[parseInt(id!)].textfieldone,
                        }}
                    ></div>
                </Container>
            </Container>
            <Container maxWidth="xl" className="article-content-fieldtwo">
                <Container
                    maxWidth="sm"
                    className="article-content-fieldtwo-text"
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: articlesObject[parseInt(id!)].textfieldtwo,
                        }}
                    ></div>
                </Container>
                <div className="article-content-footer">
                    <img
                        src="/images/single-gallery.jpg"
                        alt="single-gallery"
                        className="article-content-image"
                    />
                    <img
                        src={articleicon}
                        alt="articleicon"
                        className="article-content-footer-icon"
                    />
                    <div className="article-content-footer-text">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default ArticlePage
