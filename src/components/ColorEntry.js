import React from 'react'

// const props_color = {
//   t.string :hex
//   t.string :group
//   t.boolean :starred
//   t.string :website_placement
//   t.string :status
//   t.text :notes
//   t.boolean :as_gradient
//   t.string :gradient_css
// }


class ColorEntry extends React.Component {

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

        <div className='color-edit'>
          <button className='color-edit-button'>
            edit
          </button>
        </div>

      </div>
    )
  }
}

export default ColorEntry
