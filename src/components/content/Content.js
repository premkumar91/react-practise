import React from 'react';
class Content extends React.Component{
    
    constructor(props){
      super(props);        
      this.supportedBreakPoints = [320,576,768,1024,1200,1440];
      this.activeBreakPoint = '';
      this.state = {
          slides:[{
            "id":1,  
            "320":["flight1_576x324.jpeg"],  //array to support diffrent dpi later
            "576":["flight1_576x324.jpeg"],
            "768":["flight1_768x308.jpeg"],
            "1024":["flight1_1024x410.jpeg"],
            "1200":["flight1_1200x480.jpeg"],
            "1440":["flight1_1440x576.jpeg"]
          },
          {
            "id":2,  
            "320":["truck2_576x324.jpeg"],  //array to support diffrent dpi later
            "576":["truck2_576x324.jpeg"],
            "768":["truck2_768x308.jpeg"],
            "1024":["truck2_1024x410.jpeg"],
            "1200":["truck2_1200x480.jpeg"],
            "1440":["truck2_1440x576.jpeg"]
          },
          {
            "id":3,  
            "320":["ship3_576x324.jpeg"],  //array to support diffrent dpi later
            "576":["ship3_576x324.jpeg"],
            "768":["ship3_768x308.jpeg"],
            "1024":["ship3_1024x410.jpeg"],
            "1200":["ship3_1200x480.jpeg"],
            "1440":["ship3_1440x576.jpeg"]
          },
          {
            "id":4,  
            "320":["ship2_576x374.jpeg"],  //array to support diffrent dpi later
            "576":["ship2_576x374.jpeg"],
            "768":["ship2_768x308.jpeg"],
            "1024":["ship2_1024x410.jpeg"],
            "1200":["ship2_1200x480.jpeg"],
            "1440":["ship2_1440x576.jpeg"]
          }]
      }
    }
    componentDidMount(){
       this.updateImageByBreakPoints();
    }
    updateImageByBreakPoints(){
        for(let i=0,l=this.supportedBreakPoints.length;i<l;i++){
            if(window.innerWidth <= this.supportedBreakPoints[i]){
                this.activeBreakPoint = this.supportedBreakPoints[i];
                break;
            }
        }
    }

    getSlidesComponents(){        
        return (
            this.state.slides.map((slide,index)=>
                <div key={slide.id} className={index===0?'carousel-item active':'carousel-item'}>
                    <img src={slide[this.activeBreakPoint][0]} className="d-block w-100" alt="..."/>
                </div>
            )
        )
    }
    
    render(){
        this.updateImageByBreakPoints()
      return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {this.getSlidesComponents()}
            </div>
            <div className="carousel-caption">
                <h4>We Freight anywhere in the globe</h4>
                {/* <h2 className="d-block d-sm-block d-md-block">We Freight anywhere in the globe</h2>
                <h2 className="display-4 d-none d-lg-block d-xl-block">We Freight anywhere in the globe</h2> */}
                {/* <p>Caption Description</p> */}
            </div>
        </div>
      )
    }
  }
export default Content;