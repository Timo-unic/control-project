import Typography from '@mui/material/Typography'
import logo from 'assets/Logo-connect.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginTop: 1 }}
        >
            <img src={logo} alt="connect-world" />
        </Typography>
    )
}

export default Logo
