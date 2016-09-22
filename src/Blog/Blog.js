import React from 'react'
import BlogCard from '../components/BlogCard'
import { getBlogData } from '../utils/helps'



class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      wait:true,
      data:[]
    }
  }
  componentDidMount(){
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

    return(
      <div style={{width:"100%",height:"100%"}}>
        {this.state.wait ? '正在加载中...' : arrData.map((items,i) => <BlogCard {...items} key={i} />)}
      </div>
    )
  }
}

export default Blog ;
