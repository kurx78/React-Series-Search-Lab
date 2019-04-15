import React, { Component } from 'react'
class SingleSeries extends Component {
    state = {  }
    render() { 
        console.log(this.props);
        const { id } = this.props.match.params;
        if(id)
        {
            console.log("A value was defined");
        }
        return ( <div><p>Single Series</p></div> );
    }
}
 
export default SingleSeries;