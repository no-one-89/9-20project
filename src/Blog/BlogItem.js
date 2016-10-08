import React, { PropTypes } from 'react'
import { getBlogContent } from '../utils/helps'
import marked from 'marked';
import hljs from 'highlight.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from '../components/CircularProgress'

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
    let progress = (
      <div className="progress">
        <MuiThemeProvider>
          <CircularProgress />
        </MuiThemeProvider>
    </div>
    )
    let content =  marked(this.state.data)
    marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div style={{width:"100%",height:"100%"}}>
        {this.state.wait ? progress : (<div style={{width:"90%",margin:"0 auto"}}>
                                        <div dangerouslySetInnerHTML={{__html: content}} />
                                      </div>)}
      </div>



    )
  }
}

export default BlogItem;
