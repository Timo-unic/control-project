import { Typography } from '@mui/material'
import logo from 'assets/Logo-connect.svg'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <Typography
                variant="h5"
                component="div"
                align="center"
                className="footer-container"
            >
                <img src={logo} alt="connect-project" className="footer-logo" />
                <div className="footer-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                    <br />
                    labore et dolore magna aliquum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium
                    <br />
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo s et quasi
                </div>
                <div className="footer-rights">
                    © 2023 Betheme by <span className='footer-text-mark'>SkillUp</span>  | All Rights Reserved | Powered by <span className='footer-text-mark'>React</span>
                    
                </div>
            </Typography>
        </>
    )
}

export default Footer
