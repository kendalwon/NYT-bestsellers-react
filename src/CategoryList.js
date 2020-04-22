import React from 'react';
import './CategoryList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.decideArrow = this.decideArrow.bind(this);
  }

  decideArrow(book) {
    if (book.rank_last_week === 0) {
      return 'up';
    }
    if (book.rank <= book.rank_last_week) {
      return 'up';
    }
    if (book.rank > book.rank_last_week) {
      return 'down';
    }
  }

  renderBookInfo(book) {
    const arrow = this.decideArrow(book);
    console.log(arrow);
    return (
      <div className='categoryRow' key={book.rank}>
        <div className='categoryFlex'>
          <div className='rankFlex'>
            <h1 className='categoryRank'> 
              {book.rank}
            </h1>
            <p className='arrow'>
              <FontAwesomeIcon icon={(arrow === 'up') ? faArrowUp : faArrowDown} />
            </p>
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
          </div>       
          
        </div>
        <a className='imageLink' href={book.amazon_product_url} target='_blank' rel='noopener noreferrer'>
          <img className='categoryImage'
            src={book.book_image}
            alt={book.title} />
        </a>
      </div>
    )
  }

  render() {
    console.log(this.props.books);
    return (
      <div className='categoryList'>  
        {this.props.books.map(book => this.renderBookInfo(book)
        )}
      </div>
    )  
  }
}

export default CategoryList;