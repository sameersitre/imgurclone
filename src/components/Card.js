import React, { Component } from 'react';
import './Card.css'
import VerticalContainer from './VerticalContainer';
class Card extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [
                'ImageName', 'Gulab jamun', 'fijeifj', 'goirejgi'
            ]
        }
    }
    render() {
        return (
            //{this.state.recipes.map(name => (<li id='container' key={name}><b>{name}</b></li>))}
            <div id='container' >
                {this.state.recipes.map(name => (<div class='card' key={name}>{this.state.ImageName}</div>))}
            </div>

        );
    }
}
export default Card;