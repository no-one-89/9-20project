import React, { PropTypes } from 'react'
import { getBlogContent } from '../utils/helps'
import marked from 'marked';
import hljs from 'highlight.js';

class BlogItem extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    getBlogContent(this.props.params.url)
      .then((data) => {
        this.setState({
          data:data.data,
          wait:false
        })

      })
  }
  render () {
    let content = this.state.wait ? '请稍等' : marked(this.state.data)
    marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div style={{width:"90%",margin:"0 auto"}}>
         <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    )
  }
}

export default BlogItem;
