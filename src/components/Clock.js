import React from 'react';

class Clock  extends React.Component {    
    constructor(props){
        super(props);
        
        var today = new Date();
        this.state={
            time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        var today = new Date();
        this.setState({
          time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds().toLocaleString()
        });
      }
    render() { 
        
        return ( 
            <p>
                {this.state.time}
            </p>
            );
    }
}
 
export default Clock;