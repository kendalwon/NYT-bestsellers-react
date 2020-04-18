import React from 'react';
import './BestSellers.css';
import Header from './Header';
import NYTApiKey from './apiKey';
import { getByTestId } from '@testing-library/react';

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'The New York Times Best Sellers',
      pictureBooks: {},
      seriesBooks: {},
      middleGradeHardcover: {},
      youngAdultHardcover: {},
    }
    this.renderBookRow = this.renderBookRow.bind(this);
  }

  componentDidMount() {
    this.fetchPictureBooks();
    this.fetchSeriesBooks();
    this.fetchMiddleGradeHardcover();
    this.fetchYoungAdultHardcover();
  }

  fetchPictureBooks() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/picture-books.json?api-key=' + NYTApiKey;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState({
        pictureBooks: {
          list: json.results,
          top5: top5
        }
      });
    })
    .catch(error => console.log(error));
  }

  fetchSeriesBooks() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=' + NYTApiKey;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState({
        seriesBooks: {
          list: json.results,
          top5: top5
        }
      });
    })
    .catch(error => console.log(error));
  }

  fetchMiddleGradeHardcover() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/childrens-middle-grade-hardcover.json?api-key=' + NYTApiKey;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState({
        middleGradeHardcover: {
          list: json.results,
          top5: top5
        }
      });
    })
    .catch(error => console.log(error));
  }

  fetchYoungAdultHardcover() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/young-adult-hardcover.json?api-key=' + NYTApiKey;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState({
        youngAdultHardcover: {
          list: json.results,
          top5: top5
        }
      });
    })
    .catch(error => console.log(error));
  }

  renderBookRow(list, top5) {
    console.log(list);
    console.log(top5);
    return (
      <div className='bookRow'>
        <div className='rowTitle'>
          {list.display_name}
        </div>
        <div className='flexRow'>
          {top5.map(book => {
            return (
              <div className='bookInfo'>
                <div className='bookFlex'>
                  <h1 className='bookRank'> 
                    {book.rank}
                  </h1>
                  <img className='bookImage'
                    src={book.book_image}
                    alt={book.title} />
                </div> 
                <div className='bottom'>
                  <h2 className='bookWeeks'>
                    {(book.weeks_on_list === 1) ? 'NEW THIS WEEK' : `${book.weeks_on_list} WEEKS ON LIST`}
                  </h2>
                  <h1 className='bookTitle'>{book.title}</h1>
                  <h2 className='bookAuthor'>by {book.author}</h2>
                  <button className='amazonButton'>
                    <a className='amazonLink' href={book.amazon_product_url} target='_blank' rel="noopener noreferrer">BUY</a>
                  </button>
                </div>
              </div>
            )
          })}    
        </div>
      </div>
    ) 
  }

  render() {
    const pictureBooks = this.state.pictureBooks;
    const seriesBooks = this.state.seriesBooks;
    const middleGradeHardcover = this.state.middleGradeHardcover;
    const youngAdultHardcover = this.state.youngAdultHardcover;
    console.log(pictureBooks);
    return (
      <>
        <Header title={this.state.display} />
        {(pictureBooks.list) ? this.renderBookRow(pictureBooks.list, pictureBooks.top5) : null}
        {(seriesBooks.list) ? this.renderBookRow(seriesBooks.list, seriesBooks.top5) : null}
        {(middleGradeHardcover.list) ? this.renderBookRow(middleGradeHardcover.list, middleGradeHardcover.top5) : null}
        {(youngAdultHardcover.list) ? this.renderBookRow(youngAdultHardcover.list, youngAdultHardcover.top5) : null}
      </>
    );
  }
  
}

export default BestSellers;
