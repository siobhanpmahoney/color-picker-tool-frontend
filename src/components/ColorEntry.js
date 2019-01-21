import React from 'react'
import Form from './Form'


class ColorEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isRenderingForm: false
    }
  }

  onToggleForm = () => {
    let val = !this.state.isRenderingForm

    this.setState({
      isRenderingForm: val
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color != this.props.color) {
      this.onToggleForm()
    }
  }





  render() {
    const {color} = this.props
    return (
      <div className='color-entry-wrapper'>

        <div className='color-star'>
          {!!color.starred ? (
            <i className="material-icons">
              star
            </i>
          ) : (
            <i className="material-icons">
              star_border
            </i>
          )}
        </div>

        <div className='color-square' style={!!color.as_gradient ? {background: `${color.gradient_css}`} : {backgroundColor: `${color.hex}`}} />




        {!!color.as_gradient ? (
          <div className='color-hex'>
            {color.gradient_css}
          </div>
        ) : (
          <div className='color-hex'>
            {color.hex}
          </div>
        )}



        <div className='color-group'>
          {color.group}
        </div>

        <div className='color-website-placement'>
          {color.website_placement}
        </div>

        <div className='color-status'>
          <span className={color.status}>{color.status}</span>
        </div>

        {!this.state.isRenderingForm ? (
          <div className='color-edit'>
            <button className='color-edit-button' onClick={this.onToggleForm}>
              edit
            </button>
          </div>
        ) : (
          <div className='color-entry-form-container'>
            <Form onSaveColor={this.props.onUpdateColor} onDeleteColor={this.props.onDeleteColor} color={color}/>
          </div>
        )

      }
    </div>
  )
}
}



export default ColorEntry
