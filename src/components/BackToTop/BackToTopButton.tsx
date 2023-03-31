import { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './BackToTopButton.scss'

type Props = {}

const BackToTopButton = (props: Props) => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {backToTopButton && (
                <KeyboardArrowUpIcon
                    className="arrowupicon"
                    onClick={scrollUp}
                />
            )}
        </div>
    )
}

export default BackToTopButton
