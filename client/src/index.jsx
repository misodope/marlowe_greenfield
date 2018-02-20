import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/form.jsx'

// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (
      <div>
        <Form/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));