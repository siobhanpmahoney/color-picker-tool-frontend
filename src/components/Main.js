import React from 'react'
import Form from './Form'
import ColorList from './ColorList'
import {fetchColors} from '../service'

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: null,
      isRenderingForm: false
    }
  }

  componentDidMount() {
    this.fetchColors()
  }

  fetchColors = () => {
    fetchColors()
    .then(json => this.setState({
      colors: json
    }))
  }

  onToggleForm = () => {
    this.setState({
      isRenderingForm: !this.state.isRenderingForm
    })
  }

  render() {
    return (
      <div className='main'>
        <h2>
          Project Color Picker
        </h2>

        <h4>
          Colors

          <button onClick={this.onToggleForm} className='new-color-form-button'>
             +
           </button>
        </h4>

        {!!this.state.isRenderingForm ? (
          <Form />
        ) : null}


        {!this.state.colors ? (
          <div>Loading...</div>
        ) : (
          <ColorList colors={this.state.colors} />
        )}
      </div>
    )
  }
}

export default Main
