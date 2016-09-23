import React from 'react'
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from '../components/CircularProgress'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }

  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/no-one-89/demodata/master/intro.md")
    .then((data) => {
      this.setState({
        data:data.data,
        wait:false
      })
    })
     .catch(function (error) {
       alert(error);
     });

  }
  render () {

    let progress = (
      <div className="progress">
        <MuiThemeProvider>
          <CircularProgress />
        </MuiThemeProvider>
    </div>
    )

    // let content = progress
    marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div style={{padding:"0 30px",lineHeight:"2em",height:"100%"}}>
         {this.state.wait ? progress :  <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}

      </div>
    )
  }
}

export  default About;
