import React from 'react'
import BlogCard from '../components/BlogCard'
import { getBlogData } from '../utils/helps'

// let blogData = [
//   {index:'1',title:'武林秘籍第一章',desc:'你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！',url:'a'},
//   {index:'2',title:'武林秘籍第二章',desc:'你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！',url:'b'},
//   {index:'3',title:'武林秘籍第三章',desc:'你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！',url:'c'},
//   {index:'4',title:'武林秘籍第四章',desc:'你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！',url:'d'},
//   {index:'5',title:'武林秘籍第五章',desc:'你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！你值得拥有！',url:'e'}
// ]

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
        {arrData.map((items,i) => <BlogCard {...items} key={i} />)}
      </div>
    )
  }
}

export default Blog ;
