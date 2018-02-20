import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      address: null,
      city: null,
      state: null,
      zipcode: null
    }
  }

  render() {
    return (
      <form>
        Username:
        <input value={props.username} type="text" placeholder="Username"></input>
        Title:
        <input value={this.state.title} type="text" placeholder="Title"></input>
        Description:
        <input value={this.state.description} type="text" placeholder="Description"></input>
        Address:
        <input value={this.state.address} type="text" placeholder="Address"></input>
        City:
        <input value={this.state.city} type="text" placeholder="City"></input>
        State:
        <input value={this.state.state} type="text" placeholder="State"></input>
        Zipcode:
        <input value={this.state.zipcode} type="text" placeholder="Zip Code"></input>
      </form>
    )
  }
}

export default Form; 
