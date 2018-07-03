import React, { Component } from 'react';

class Link extends Component {
  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

  render() {
    const { link } = this.props;
    return (
      <div className='list pt3'>
        {link.description} ({link.url})
      </div>
    );
  }
}

export default Link;