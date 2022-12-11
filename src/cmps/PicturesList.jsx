import  { Component } from 'react'


export  class PicturesList extends Component {
  
  state={
  }
  
  componentDidMount(){
    const {getPics}=this.props
    getPics()
  }
  
  render() {
    const {getPics,pics,startIdx,diff,endIdx} = this.props
    const picArray = Object.values(pics)

   

    return (
      <>
      

      <div className='picture-list simple-cards-grid'>
       {picArray.slice(this.props.startIdx ,this.props.endIdx+1).map(pic =>
        <img key={pic.id} src={pic.webformatURL}/>
        )}
        
      </div>
      </>
    )
  }
}
