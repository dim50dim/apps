import React from 'react';


class Homework1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {brand : 'Ford'}
    }
    render() {
        return <h2> hi there {this.props.brand} </h2>
    }
}

export default Homework1;