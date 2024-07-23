import React from 'react';
import Book from './Book';

const books=[
    {
      author: "Chinua Achebe",
      
      image: 
      "https://m.media-amazon.com/images/I/41WGucr54qL._SX322_BO1,204,203,200_.jpg",
      
      title: "Things Fall Apart",
      
      price:"550",
    },
    {
      author: "Hans Christian Andersen",
      
      image: 
      "https://m.media-amazon.com/images/P/B006GR37OC.01._SCLZZZZZZZ_SX500_.jpg",
      
      
    
      title: "Fairy tales",
      
      price:"150",
    },
    {
      author: "Dante Alighieri",
      "country": "Italy",
      image: "https://m.media-amazon.com/images/P/0451208633.01._SCLZZZZZZZ_SX500_.jpg",

     
      title: "The Divine Comedy",
    
      price:"180",
    },
    {
      author: "Unknown",
      
      image: "https://m.media-amazon.com/images/I/41RfLb55WUL._SX324_BO1,204,203,200_.jpg",
      
      
      title: "The Epic Of Gilgamesh",
      price:"250",
    },
    
    
]


const Bookans = () => {
  return (<>
    <h3 className='header' >Book Store</h3>
    <div>
      {books.map((ele)=>{
         return <Book
        image={ele.image}
        title={ele.title}
        author={ele.author}
        price={ele.price}
            />
      })}
    </div>
    </>
  )
}

export default Bookans
