import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        display:'flex',
        flexDirection:'column',
        margin:'0 auto',
        width:'80%',
        boxShadow:'0 0 12px #ccc',
        borderRadius:'10px',
        marginTop:'20px',
      },
      h4:{
          textAlign:'center'
      },
      p:{
        textIndent:'2em',
        padding:'0 10px'
      },
      a:{
        textDecoration:'none',
        cursor:'pointer',
        marginLeft:'10px',
        marginBottom:'10px'
      },
      div:{
        height:'40px',
        backgroundColor:'#00bca9',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
      },
      span:{
        display:'block',
        width:'34px',
        lineHeight:'34px',
        textAlign:'center',
        margin:'0 auto',
        backgroundColor:'#fff',
        borderRadius:'50%',
        marginTop:'3px',
        fontWeight:'800'
      }
    }
    let addr = `item/${this.props.url}`
    return(
      <div style={styles.root}>
          <div style={styles.div}><span style={styles.span}>{this.props.index}</span></div>
          <h4 style={styles.h4}>{this.props.title}</h4>
          <p style={styles.p}>{this.props.desc}</p>
          <Link style={styles.a} to={addr}>阅读更多... </Link>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:'1',
  title:'我的博客',
  desc:'这里是内容。。。'
}
BlogCard.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
export default BlogCard;
