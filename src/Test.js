import React from "react";

class Test extends React.Component{
    constructor() {
        super();
        this.state = {
            s1 : 0,
        }
    }
    buttonHandler = () => {
        console.log('buttonHandler - worked');
        
    }

     render() {
 console.log('render-1');
 
    return (
        <div>
            {/* {console.log('render-2')} */}
            <div>
                <button onClick={this.buttonHandler} > Push</button>
            </div>
        </div>
    )
     }
}

export default Test;