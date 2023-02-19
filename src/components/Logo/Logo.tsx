import Typography from '@mui/material/Typography'
import logo from 'assets/logo-Mountain.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="mountain-project" />
        </Typography>
    )
}

export default Logo
