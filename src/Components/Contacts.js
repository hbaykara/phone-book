import React, {Component} from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {
  state = {
    contacts : [{
      name : 'Ahmet',
      phone : '121313154'
    },{
      name : 'Behçet',
      phone : '146543315'
    }]
  }

  static defaultProps = {

  }

  static propTypes = {}

  render(){
    return(
      <div>
        <List contacts={this.state.contacts}/>
        <Form />
      </div>
    );
  }
}

export default Contacts;