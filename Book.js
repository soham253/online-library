import React from 'react'
import './Book.css'

const Book = (props) => {
    return (<>
         
        <div className='book'>
<div className='book-image'>
            <img src={props.image}alt='sale' />
        </div><div className='book-info'>
                <h2>{props.title}</h2>
                <p className='book-author'>by {props.author}</p>
                <p className='book-price'> ${props.price}</p>
                <button>Add to Cart</button>
            </div>

        </div></>



    )
}

export default Book
