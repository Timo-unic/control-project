import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import employeesArray from 'utils/employeesArray'
import AboutEmployeesList from './AboutEmployeesList'

type Props = {}

const AboutEmployees = (props: Props) => {
    return (
        <>
            <Container maxWidth="xl" className="about-employees-container">
                <Container
                    maxWidth="lg"
                    className="about-employees-container-content"
                >
                    <Typography
                        variant="h2"
                        component="div"
                        className="about-employees-title"
                    >
                        Our team
                    </Typography>
                    <Grid container spacing={3}>
                        {employeesArray.map(
                            (
                                {
                                    photo,
                                    name,
                                    position,
                                    textperson,
                                    socialf,
                                    socialt,
                                    socialin,
                                },
                                i
                            ) => (
                                <Grid item xs={12} sm={4} key={i}>
                                    <AboutEmployeesList
                                        photo={photo}
                                        name={name}
                                        position={position}
                                        textperson={textperson}
                                        socialf={socialf}
                                        socialt={socialt}
                                        socialin={socialin}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default AboutEmployees
