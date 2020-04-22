import React from 'react';
import './BestSellers.css';
import NYTApiKey from './apiKey';
import Header from './Header';
import CategoryList from './CategoryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'The New York Times Best Sellers',
      display: null,
      bookLists: {}
    }
    this.renderBookRow = this.renderBookRow.bind(this);
    this.renderCategoryList = this.renderCategoryList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadMain = this.loadMain.bind(this);
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

  handleClick(e) {
    const listName = e.target.dataset.list;
    const heading = e.target.dataset.heading;
    this.setState({
      heading: heading,
      display: listName
    })
  }

  loadMain() {
    this.setState({
      heading: 'The New York Times Best Sellers',
      display: 'main',
    })
  }

  renderCategoryList() {
    const display = this.state.display;
    const pictureBooks = this.state.bookLists.pictureBooks;
    const seriesBooks = this.state.bookLists.seriesBooks;
    const middleGradeHardcover = this.state.bookLists.middleGradeHardcover;
    const youngAdultHardcover = this.state.bookLists.youngAdultHardcover;
    if (display === 'pictureBooks') {
      return <CategoryList 
        books={pictureBooks.list.books}
      />
    }
    if (display === 'seriesBooks') {
      return <CategoryList 
        books={seriesBooks.list.books}
      />
    }
    if (display === 'middleGradeHardcover') {
      return <CategoryList 
        books={middleGradeHardcover.list.books}
      />
    }
    if (display === 'youngAdultHardcover') {
      return <CategoryList 
        books={youngAdultHardcover.list.books}
      />
    }
  }

  renderBookRow(bookList, listName) {
    const list = bookList.list;
    const top5 = bookList.top5;
    return (
      <div className='bookRow'>
        <div className='rowTitle'
          data-list={listName}
          data-heading={list.display_name}
          onClick={e => this.handleClick(e)}>
          {list.display_name} <span className='chevronRight'><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
        <div className='flexRow'>
          {top5.map(book => {
            return (
              <div className={(book.rank === 5) ? 'bookInfo noBorder' : 'bookInfo'} key={book.rank}>
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
                    <a className='amazonLink' href={book.amazon_product_url} target='_blank' rel="noopener noreferrer">BUY</a> <span className='chevronDown'><FontAwesomeIcon icon={faChevronDown} /></span>
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
        <Header 
          title={this.state.heading}
          loadMain={this.loadMain} />
        {(display === 'main' && pictureBooks) ? this.renderBookRow(pictureBooks, 'pictureBooks') : null}
        {(display === 'main' && seriesBooks) ? this.renderBookRow(seriesBooks, 'seriesBooks') : null}
        {(display === 'main' && middleGradeHardcover) ? this.renderBookRow(middleGradeHardcover, 'middleGradeHardcover') : null}
        {(display === 'main' && youngAdultHardcover) ? this.renderBookRow(youngAdultHardcover, 'youngAdultHardcover') : null}
        {(display !== 'main') ? this.renderCategoryList() : null}
      </>
    );
  }
  
}

export default BestSellers;
