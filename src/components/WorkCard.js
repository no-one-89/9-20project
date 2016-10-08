import React, { PropTypes } from 'react'

class WorkCard extends React.Component {
  render () {
    return(
        <div className="work-card">
          <div>
            <a href={this.props.href}>
              <img src={this.props.src} alt="" />
            </a>
          </div>
          <div className="work-content">
            <p>{this.props.title}</p>
            <span>{this.props.date}</span>
          </div>
        </div>
    )
  }
}
WorkCard.defaultProps={
  src:'https://github.com/no-one-89/9-20project--template/blob/master/sources/pjzs.png?raw=true',
  title:'我的作品',
  date:'2016/00/00'
}
WorkCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
export default WorkCard;
