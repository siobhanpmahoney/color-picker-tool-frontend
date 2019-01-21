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

  onDeleteColor = () => {
    this.props.onDeleteColor(this.state)
  }

  onClearAndCloseForm = () => {
    this.setState({
      id: null,
      hex: "",
      starred: false,
      group: "",
      as_gradient: false,
      website_placement: "",
      status: "",
      notes: ""
    }, this.props.onToggleForm)
  }

  render() {
    return (
      <div className='form-container'>
        <button className='form-close-button' onClick={this.onClearAndCloseForm}>
          close
        </button>
        <div className='form-wrapper'>
          <div className='form-col-wrapper'>
            <div className='form-col-1'>
              <div className='field'>
                <label>
                  <div className='form-field-label'>
                    <span className='form-field-label'>
                      Gradient?
                    </span>

                    <input type='checkbox' name='as_gradient' checked={this.state.as_gradient} onChange={this.onUpdateField} />
                  </div>
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

                    <div className='form-field-label'>
                      Hex:


                      <input type='text' name='hex' value={this.state.hex} onChange={this.onUpdateField} />
                    </div>
                  </label>
                </div>
                {/*      )
                }*/}

                <div className='field'>
                  <label>

                    <div className='form-field-label'>
                      Star?

                      <input type='checkbox' name='starred' checked={this.state.starred} onChange={this.onUpdateField} />
                    </div>
                  </label>
                </div>

              </div>
              <div className='form-col-2'>

                <div className='field'>
                  <label>
                    <div className='form-field-label'>
                      Color Group

                    </div>
                    <select value={this.state.group} name='group' onChange={this.onUpdateField}>
                      <option value="">select...</option>
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

                  </label>
                </div>


                <div className='field'>
                  <label>

                    <div className='form-field-label'>
                      Usage
                    </div>
                    <select value={this.state.website_placement} name='website_placement' onChange={this.onUpdateField}>
                      <option value="">select...</option>
                      <option value="background">background</option>
                      <option value="text">text</option>
                      <option value="highlight">highlight</option>
                      <option value="secondary">secondary</option>
                      <option value="primary">primary</option>
                      <option value="other">other</option>
                    </select>

                  </label>
                </div>


                <div className='field'>
                  <label>

                    <div className='form-field-label'>
                      Status
                    </div>

                    <select value={this.state.status} name='status' onChange={this.onUpdateField}>
                      <option value="">select...</option>
                      <option value="final">final</option>
                      <option value="considering">considering</option>
                      <option value="recycled">recycled</option>
                    </select>


                  </label>
                </div>

              </div>

              <div className='form-col-3'>
                <div className='field'>
                  <label>

                    <div className='form-field-label'>
                      Notes
                    </div>

                    <textarea type='text' name='notes' value={this.state.notes} onChange={this.onUpdateField} />

                  </label>
                </div>
              </div>
            </div>
            <div className='field'>
              <h4>
                <button onClick={this.onSaveColor} className='form-button save-color-button'>
                  Save
                </button>

                {this.props.color != "new" &&
                  <button onClick={this.onDeleteColor} className='form-button delete-color-button'>
                    delete
                  </button>
                }




              </h4>
            </div>



          </div>
        </div>
      )
    }
  }

  export default Form
