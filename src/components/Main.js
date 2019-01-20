import React from 'react'
import Form from './Form'
import ColorList from './ColorList'
import {fetchColors, createColor} from '../service'

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: null,
      isRenderingForm: false
    }
  }

  componentDidMount() {
    this.onFetchColors()
  }

  onFetchColors = () => {
    fetchColors()
    .then(json => this.setState({
      colors: json
    }))
  }

  onCreateColor = (color_data) => {
    let colorState = this.state.colors.slice(0)
    createColor(color_data)
    .then(json => this.setState({
      colors: [...colorState, json]
    }, this.onToggleForm))
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



        {!!this.state.isRenderingForm ? (
          <Form color="new" onCreateColor={this.onCreateColor}/>
        ) : (
          <div className='header'>
            <h4>
              Colors

              <button onClick={this.onToggleForm} className='new-color-form-button'>
                +
              </button>
            </h4>
          </div>
        )}


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
