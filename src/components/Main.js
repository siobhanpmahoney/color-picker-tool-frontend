import React from 'react'
import ControlPanel from './ControlPanel'
import Form from './Form'
import ColorList from './ColorList'
import {fetchColors, createColor, updateColor, deleteColor} from '../service'

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: null,
      isRenderingForm: false,
      sortSelection: "",
      filters: {
        starred: '',
        as_gradient: '',
        group: '',
        status: '',
        website_placement: ''
      },
      filterStars: "",
      filterGroup: "",
      filterUse: "",
      filterStatus: "",
    }
  }

  componentDidMount() {
    this.onFetchColors()
  }


  // begin color CRUD methods

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

  onUpdateColor = (color_data) => {
    let colorState = this.state.colors.slice(0)
    updateColor(color_data)
    .then(json => {
      let idx = colorState.indexOf(colorState.find((c) => c.id === color_data.id))

      this.setState({
        colors: [...colorState.slice(0, idx), json,...colorState.slice(idx+1)]
      })
    })
  }

  onDeleteColor = (color_data) => {
    let colorState = this.state.colors.slice(0)
    deleteColor(color_data)
    .then(json => {
      let idx = colorState.indexOf(colorState.find((c) => c.id === color_data.id))
      this.setState({
        colors: [...colorState.slice(0, idx),...colorState.slice(idx+1)]
      })
    })
  }

  // end color CRUD methods


  onRenderColors = () => {
    let colors = this.state.colors.slice(0)

    if (!!this.state.sortSelection) {

      const {sortSelection} = this.state
      if (sortSelection == "starred" || sortSelection=="as_gradient") {
        colors.sort((a,b) => Number(b) - Number(a))
      } else {
        colors.sort((a,b) => a[sortSelection].localeCompare(b[sortSelection]))
      }

    }

    // console.log("BEGIN looping through filters")
    const filterTypes = Object.keys(this.state.filters)
    filterTypes.forEach((f) => {
      console.log("current filter type: ", f)
      if (this.state.filters[f] !== "") {
        console.log("filter value", this.state.filters[f])
        colors = colors.filter((c) => {
          console.log("current color: ", c)
          console.log("filter and current color's value: ", c[f])
          console.log("filter value saved in state: ", this.state.filters[f])
          return c[f] == this.state.filters[f]})
        }
      })

      return colors
    }


    onSelectSort = (event) => {
      let val = event.target.value
      this.setState({
        sortSelection: val
      })
    }

    onSelectFilter = (event) => {
      let filterState = Object.assign({}, this.state.filters)
      let filter = event.target.name

      let val = (event.target.value == "true" || event.target.value == "false") ? JSON.parse(event.target.value) : event.target.value
      filterState[filter] = val

      this.setState({
        filters: filterState
      }, this.onRenderColors)
    }



    onToggleForm = () => {
      this.setState({
        isRenderingForm: !this.state.isRenderingForm
      })
    }

    render() {
      if (!!this.state.colors && this.state.colors.length > 0 ) {
        console.log(this.state.colors[0])
      }
      return (
        <div className='main'>
          <h2>
            Project Color Picker
          </h2>

          <ControlPanel onSelectSort={this.onSelectSort} onSelectFilter={this.onSelectFilter} sortSelection={this.state.sortSelection} filters={this.state.filters} />

          {!!this.state.isRenderingForm ? (
            <Form color="new" onToggleForm={this.onToggleForm} onSaveColor={this.onCreateColor}/>
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
            <ColorList onDeleteColor={this.onDeleteColor} onUpdateColor={this.onUpdateColor} colors={this.onRenderColors()} />
          )}
        </div>
      )
    }
  }

  export default Main
