import React from 'react';
import './CategoryList.css';

class CategoryList extends React.Component {

  renderBookInfo(book) {
    return (
      <div className='categoryRow'>
        <div className='categoryFlex'>
          <div className='categoryRank'>
            <h1 className='categoryBookRank'> 
              {book.rank}
            </h1>
            <p classname='arrow'>arrow</p>
          </div>
          <div className='categoryInfo'>
            <h2 className='categoryWeeks'>
              {(book.weeks_on_list === 1) ? 'NEW THIS WEEK' : `${book.weeks_on_list} WEEKS ON LIST`}
            </h2>
            <h1 className='categoryTitle'>
              {book.title}
            </h1>
            <div className='authorFlex'>
              <h2 className='categoryAuthor'>
                by {book.author}
              </h2>
              <h2 className='publisher'>
                {book.publisher}
              </h2>
            </div>
            <h2 className='description'>
              {book.description}
            </h2>
            <button className='amazonButton'>
              <a className='amazonLink' href={book.amazon_product_url} target='_blank' rel="noopener noreferrer">BUY</a>
            </button>
          </div>       
          <img className='categoryImage'
            src={book.book_image}
            alt={book.title} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <>

      </>
    )  
  }
}

export default CategoryList;