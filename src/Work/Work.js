import React from 'react'
import WorkCard from '../components/WorkCard'
class Work extends React.Component {
  render () {
    return(
      <div className="work-container">
        <WorkCard src={"https://github.com/no-one-89/9-20project--template/blob/master/sources/pjzs.png?raw=true"}
        title={'作品一：品匠装饰'}
        date={'2016/05/09'}
        href={'http://www.qhdpjzs.com/'} />
        <WorkCard src={"https://github.com/no-one-89/9-20project--template/blob/master/sources/mozan.png?raw=true"}
        title={'作品二：魔赞'}
        date={'2016/08/10'}
        href={'http://morethan.cc/index.php?c=index&a=index'} />
        <WorkCard src={"https://github.com/no-one-89/9-20project--template/blob/master/src/images/PC.jpg?raw=true"}
        title={'作品三：Codester'}
        date={'2016/07/09'}
        href={'#'} />
        <WorkCard src={"https://github.com/no-one-89/9-20project--template/blob/master/src/images/EagleTroop.png?raw=true"}
        title={'作品四：EagleTroop'}
        date={'2016/06/21'}
        href={'#'} />
      </div>
    )
  }
}

export  default Work;
