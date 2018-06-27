import React, { Component } from 'react';
import './VerticalContainer.css';
import imagejson from '../DataJson/imagedata.json';
//import Card from './Card'
class VerticalContainer extends Component {
    constructor() {
        super();
        this.state = {
            imagedata: imagejson,
        }
    }
    render() {
        return (
            <div>

                <div class="bar"> Popular </div>
                <div className='ver-slide-container'  >

                    {this.state.imagedata.map((person, i) => <Recipetemp key={i} imagedata={person} />)}

                </div>
            </div>

        );
    }
}

class Recipetemp extends Component {

    btnImageClick(event){

    }
    render() {
        return (

            <div className='card'>

                <img className='cardsmall' src={require("../assets/" + this.props.imagedata.ImageAddress)} alt="dish horizontal" width="350px" align-content="center" />
                <div class="info" onClick={this.btnImageClick.bind(this)}>
                    {this.props.imagedata.id}<br />
                    Name:       {this.props.imagedata.ImageName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    Type:       {this.props.imagedata.ImageType}<br />
                    Uploaded By:        {this.props.imagedata.Username}<br />
                    Likes:      {this.props.imagedata.Likes}
                </div>

            </div>
        );

    }
}
export default VerticalContainer;
