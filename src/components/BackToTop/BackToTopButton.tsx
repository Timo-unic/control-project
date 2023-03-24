import { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { brown } from '@mui/material/colors';

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
                <button
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '50px',
                        // height: '40px',
                        // width: '50px',
                        // fontSize: "30px",
                    }}
                    onClick={scrollUp}
                >
                    <KeyboardArrowUpIcon sx={{color: 'chocolate', fontSize: "50px"}} />
                </button>
            )}
        </div>
    )
}

export default BackToTopButton
