import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

  renderMainLink = () => {
    if (this.props.title !== 'The New York Times Best Sellers') {
      return (
        <h2 className='mainLink link'
          onClick={this.props.loadMain}>BEST SELLERS</h2>
      )
    } else return (
      <h2 className='mainLink'>BOOKS</h2>
    );
  }

  renderTagline = () => {
    if (this.props.title === 'The New York Times Best Sellers') {
      return (
        <h2 className='tagline'>Ranked lists of children's books sold in the United States.</h2>
      )
    } else return null;
  }


  render() {
    return (
      <>
        <div className='topHeading'>
          <h1 className='heading'>Best Sellers in Children's Books</h1>
        </div>
        <div className='menu'>
          {this.renderMainLink()}
          <div className='titleFlex'>
              <h1 className='title'>
                {this.props.title}
              </h1>
              <div className='socialFlex'>
              <button className='socialButton'>
                <a className='socialLink' href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </button>
              <button className='socialButton'>
                <a className='socialLink' href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </button>
              <button className='socialButton'>
                <a className='socialLink' href='https://www.gmail.com' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  </a>
              </button>
              </div>
          </div>
          {this.renderTagline()}
        </div>
      </>
    );
  }
  
}

export default Header;
