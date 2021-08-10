import './App.css';

import React from 'react';
import { ParkTECmain } from './components/ParkTECmain';
import { ParkTECmain2 } from './components/ParkTECmain2';
import { ParkTECclient } from './clients/ParkTECclient';

export class App extends React.Component {
  ParkTECclient = new ParkTECclient();
  showa=false
  constructor()  {
    super();
    this.state = {
      data: [],
      showHide1: false,
      showHide2: false,
      showHide3: false,
      showHide4: false,
      showHide5: false,
      value:''

    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    
  }

  async loadData(rq, st) {
    switch(rq){
      case 1:
        const newData = await this.ParkTECclient.getParkTECData(st);
        this.setState({
        data: newData
        });
        break;
      case 2:
        const newData2 = await this.ParkTECclient.getParkTECData(st);
        this.setState({
        data: newData2
        });
        break;
      case 3:
        const newData3 = await this.ParkTECclient.postParkTECDataPT(st);
        this.setState({
        data: newData3
        });
        break;
      default:
        break;
    }
    
  }

  hideComponent(cmp) {
    switch(cmp){
      case 1:
        this.loadData(1,'free');
        this.setState({ showHide1: !this.state.showHide1 });
        break;
      case 2:
        this.loadData(1,'in-use');
        this.setState({ showHide1: !this.state.showHide1 });
        break;
      case 3:
        this.setState({ showHide3: !this.state.showHide3 });
        break;
      case 4:
        this.loadData(4,'in-use');
        this.setState({ showHide4: !this.state.showHide4 });
        break;
      default:
        break;
    }
    
        
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A plate was submitted: ' + this.state.value);
    this.loadData(3,this.state.value);
    event.preventDefault();
  }

  render() {
    const {showHide1,showHide2,showHide3,showHide4} = this.state;
    return (
      <div className="App">
        <div>
          <h1>Consult the spaces on the ParkTEC</h1>
        <button onClick={() => this.hideComponent(1)}>Show free spaces</button>
        <button onClick={() => this.hideComponent(2)}>Show in-use spaces</button> 
        { showHide1 && <ParkTECmain dt= {this.state.data}/> }
        </div>
        <hr size="2px" color="black" />
        <div>
        <h1>Spaces Reservation</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Plate:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        
      </div>
    );
  }
}

