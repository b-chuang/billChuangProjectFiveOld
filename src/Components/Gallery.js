import React from 'react'

import teeth1 from '../assets/teeth1.png'
import teeth2 from '../assets/teeth2.png'
import teeth3 from '../assets/teeth3.png'
import teeth4 from '../assets/teeth4.png'
import teeth5 from '../assets/teeth5.png'
import teeth6 from '../assets/teeth6.png'
import teethFinal from '../assets/teethFinal.png'

        
        
class Gallery extends React.Component {
    constructor () {
        super();
    }


    showImage() {

        if (this.props.count < 20) {
            return (<img src={teeth1} />)
        
        }
        else if (this.props.count >= 20 && this.props.count < 40) {
            return (<img src={teeth2} />)
        }
        else if (this.props.count >= 40 && this.props.count < 60) {
            return (<img src={teeth3} />)
        }
        else if (this.props.count >= 60 && this.props.count < 80) {
            return (
                (<img src={teeth4} />)
            )
        }
        else if (this.props.count >= 80 && this.props.count < 100) {
            return (
                (<img src={teeth5} />)
            )
        }
        else if (this.props.count >= 100 && this.props.count < 120) {
            return (
                (<img src={teeth6} />)
            )
        }

        else if (this.props.count > 120) {
            return (
                (<img src={teethFinal} />)
            )
        }
    }

    render (){
        return (
        
            <div className="Gallery"> 
            {this.showImage()}
            </div>
        )
    }
}
    




export default Gallery;