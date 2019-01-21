import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      id: null,
      hex: "",
      starred: false,
      group: "",
      as_gradient: false,
      website_placement: "",
      status: "",
      notes: ""
    }
  }

  componentDidMount() {
    if (this.props.color != "new") {
      const {color} = this.props
      this.setState(color)
    }
  }

  onUpdateField = (event) => {
    let field = event.target.name
    let val = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [field]: val
    })
  }

  onSaveColor = () => {
    this.props.onSaveColor(this.state)
  }

  render() {
    return (
      <div className='form-container'>
        <h3 className='form-header'>Add New Color </h3>
        <div className='form-wrapper'>
          <div className='field'>
            <label>
              <h4>
                <span className='form-field-label'>
                  Gradient?
                </span>

                <input type='checkbox' name='as_gradient' checked={this.state.as_gradient} onChange={this.onUpdateField} />
              </h4>
            </label>
          </div>

{/*          {!!this.state.as_gradient ? (
            <div className='field'>
              <label>
                <h4>
                  <span className='form-field-label'>
                    Gradient Css:
                  </span>

                  <input type='text' name='gradient_css' value={this.state.gradient_css} onChange={this.onUpdateField} />
                </h4>
              </label>
            </div>
          ): ( */}
            <div className='field'>
              <label>
                <h4>
                  <span className='form-field-label'>
                    Hex:
                  </span>

                  <input type='text' name='hex' value={this.state.hex} onChange={this.onUpdateField} />
                </h4>
              </label>
            </div>
    {/*      )
    }*/}

        <div className='field'>
          <label>
            <h4>
              <span className='form-field-label'>
                Star?
              </span>
              <input type='checkbox' name='starred' checked={this.state.starred} onChange={this.onUpdateField} />
            </h4>
          </label>
        </div>



        <div className='field'>
          <label>
            <h4>
              <span className='form-field-label'>
                Color Group:
              </span>
              <select value={this.state.group} name='group' onChange={this.onUpdateField}>
                <option value="red">red</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="turquoise">turquoise</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="pink">pink</option>
                <option value="grey">grey</option>
                <option value="black">black</option>
              </select>
            </h4>
          </label>
        </div>


        <div className='field'>
          <label>
            <h4>
              <span className='form-field-label'>
                Usage:
              </span>
              <select value={this.state.website_placement} name='website_placement' onChange={this.onUpdateField}>
                <option value="background">background</option>
                <option value="text">text</option>
                <option value="highlight">highlight</option>
                <option value="secondary">secondary</option>
                <option value="primary">primary</option>
                <option value="other">other</option>
              </select>
            </h4>
          </label>
        </div>


        <div className='field'>
          <label>
            <h4>
              <span className='form-field-label'>
                Status:
              </span>

              <select value={this.state.status} name='status' onChange={this.onUpdateField}>
                <option value="final">Final</option>
                <option value="considering">Considering</option>
                <option value="recycled">recycled</option>
              </select>
            </h4>


          </label>
        </div>

        <div className='field'>
          <label>
            <h4>
              <span className='form-field-label'>
                Notes:
              </span>

              <textarea type='text' name='notes' value={this.state.notes} onChange={this.onUpdateField} />
            </h4>
          </label>
        </div>

        <div className='field'>
          <h4>
            <button onClick={this.onSaveColor} className='form-button save-color-button'>
              Save
            </button>

            <button className='form-button save-color-button'>
              delete
            </button>
          </h4>
        </div>



      </div>
    </div>
  )
}
}

export default Form
