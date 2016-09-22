import React, { PropTypes } from 'react'

class BlogItem extends React.Component {
  render () {
    return(
      <div>

        {this.props.params.url}
      </div>
    )
  }
}

export default BlogItem;
