import React from 'react';
import './Header.css';

class Header extends React.Component {

  renderMainLink() {
    if (this.props.title !== 'The New York Times Best Sellers') {
      return (
        <h2 className='mainLink'>BEST SELLERS</h2>
      )
    } else return (
      <h2 className='mainLink'>BOOKS</h2>
    );
  }

  renderTagline() {
    if (this.props.title === 'The New York Times Best Sellers') {
      return (
        <h2 className='tagline'>Ranked lists of children's books sold in the United States.</h2>
      )
    } else {
      return (
        <h2 className='tagline'>The most popular books this week.</h2>
      )
    }
  }


  render() {
    return (
      <>
        <div className='topHeading'>
          <h1 className='heading'>Best Sellers in Children's Books</h1>
        </div>
        <div className='menu'>
          {this.renderMainLink()}
          <h1 className='title'>
            {this.props.title}
          </h1>
          {this.renderTagline()}
        </div>
      </>
    );
  }
  
}

export default Header;
