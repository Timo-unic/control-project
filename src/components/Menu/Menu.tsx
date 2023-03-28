import MenuItem from './MenuItem'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/adventures">Adventures</MenuItem>
            <MenuItem to="/pLaces">PLaces</MenuItem>
            <MenuItem to="/guides">Guides</MenuItem>
            <MenuItem to="/joinus">Join us</MenuItem>
            <MenuItem to="/favorits">
                <FavoriteBorderIcon />
            </MenuItem>
        </>
    )
}

export default Menu
