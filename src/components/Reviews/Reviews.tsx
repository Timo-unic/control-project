import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Lenny Fox',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam.',
        },
        {
            name: 'Cristofer Lambert',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam.',
        },
        {
            name: 'Claude Olivier',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert(`All fields are requaired please!`)
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <form onSubmit={onSend} className='reviews-form' >
                <h3>Please leave a review</h3>
                <div className='reviews-form-name'>
                    <TextField
                        label="Name"
                        size="small"
                        className='reviews-form-name-field'
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div className='reviews-form-text'>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Text"
                        className='reviews-form-name-field'
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" type="submit" className='reviews-form-btn'>
                    Send
                </Button>
            </form>
            {reviews.map((item, i) => (
                <Card variant="outlined" sx={{ margin: '20px 250px' }} key={i}>
                    <CardContent className='review-style'>
                        <div className='review-style-name'>{item.name}:</div>
                        <div className='review-style-text'>{item.text}</div>
                    </CardContent>
                </Card>
            ))}
            
        </>
    )
}

export default Reviews
