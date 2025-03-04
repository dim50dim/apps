import React from "react";

class Test extends React.Component{
    
    buttonHandler = () => {
        console.log('buttonHandler - worked');
        
    }

     render() {
 console.log('render-1');
 
    return (
        <div>
            <div>
                <button onClick={this.buttonHandler} > Push</button>
            </div>
        </div>
    )
     }
}