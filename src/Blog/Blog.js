import React from 'react'
import BlogCard from '../components/BlogCard'
import { getBlogData } from '../utils/helps'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from '../components/CircularProgress'

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      wait:true,
      data:[]
    }
  }
  componentWillMount(){
    getBlogData()
      .then((data) => {
        this.setState({
          data:data.data,
          wait:false
        })
      })
  }
  render () {
    var arrData = this.state.data
    let progress = (
      <div className="progress">
        <MuiThemeProvider>
          <CircularProgress />
        </MuiThemeProvider>
    </div>
    )
    return(
      <div style={{width:"100%",height:"100%"}}>
         {this.state.wait ? progress : arrData.map((items,i) => <BlogCard {...items} key={i} />)}

      </div>
    )
  }
}

export default Blog ;
