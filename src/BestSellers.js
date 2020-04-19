import React from 'react';
import './BestSellers.css';
import Header from './Header';
import NYTApiKey from './apiKey';

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'The New York Times Best Sellers',
      display: null,
      bookLists: {}
    }
    this.renderBookRow = this.renderBookRow.bind(this);
  }

  componentDidMount() {
    this.fetchPictureBooks();
    this.fetchSeriesBooks();
    this.fetchMiddleGradeHardcover();
    this.fetchYoungAdultHardcover();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.bookLists !== prevState.bookLists) {
      this.setState({
        display: 'main'
      });
    }
  }

  fetchPictureBooks() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/picture-books.json?api-key=' + NYTApiKey;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState(prevState => ({
        bookLists: {
          ...prevState.bookLists,
          pictureBooks: {
            list: json.results,
            top5: top5
          }
      }}));
    })
    .catch(error => console.log(error));
  }

  fetchSeriesBooks() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=' + NYTApiKey;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log('loaded series books');
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState(prevState => ({
        bookLists: {
          ...prevState.bookLists,
          seriesBooks: {
            list: json.results,
            top5: top5
          }
      }}));
    })
    .catch(error => console.log(error));
  }

  fetchMiddleGradeHardcover() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/childrens-middle-grade-hardcover.json?api-key=' + NYTApiKey;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log('loaded middle grade books');
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState(prevState => ({
        bookLists: {
          ...prevState.bookLists,
          middleGradeHardcover: {
            list: json.results,
            top5: top5
          }
      }}));
    })
    .catch(error => console.log(error));
  }

  fetchYoungAdultHardcover() {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/young-adult-hardcover.json?api-key=' + NYTApiKey;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log('loaded young adult books');
      const books = json.results.books;
      const top5 = books.filter(book => book.rank <= 5);
      this.setState(prevState => ({
        bookLists: {
          ...prevState.bookLists,
          youngAdultHardcover: {
            list: json.results,
            top5: top5
          }
      }}));
    })
    .catch(error => console.log(error));
  }

  renderBookRow(bookList) {
    const list = bookList.list;
    const top5 = bookList.top5;
    return (
      <div className='bookRow'>
        <div className='rowTitle'>
          {list.display_name}
        </div>
        <div className='flexRow'>
          {top5.map(book => {
            return (
              <div className='bookInfo' key={book.rank}>
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
    const display = this.state.display;
    const pictureBooks = this.state.bookLists.pictureBooks;
    const seriesBooks = this.state.bookLists.seriesBooks;
    const middleGradeHardcover = this.state.bookLists.middleGradeHardcover;
    const youngAdultHardcover = this.state.bookLists.youngAdultHardcover;
    console.log(this.state);
    return (
      <>
        <Header title={this.state.heading} />
        {(display === 'main' && pictureBooks) ? this.renderBookRow(pictureBooks) : null}
        {(display === 'main' && seriesBooks) ? this.renderBookRow(seriesBooks) : null}
        {(display === 'main' && middleGradeHardcover) ? this.renderBookRow(middleGradeHardcover) : null}
        {(display === 'main' && youngAdultHardcover) ? this.renderBookRow(youngAdultHardcover) : null}
      </>
    );
  }
  
}

export default BestSellers;
