import React, { Component } from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <caption>haku from spirited away</caption>
            </div>
        )
    }
}

export default Image;