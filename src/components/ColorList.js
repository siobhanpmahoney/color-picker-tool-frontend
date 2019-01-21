import React from 'react'
import ColorEntry from './ColorEntry'

const ColorList = (props) => {
  if (props.colors.length == 0) {
    return <div>No Colors Added Yet!</div>
  } else {
    return (
      <div className='color-list-wrapper'>
        {props.colors.map((color) => {
          return <ColorEntry color={color} key={color.id} onDeleteColor={props.onDeleteColor} onUpdateColor={props.onUpdateColor}/>
        })}

      </div>
    )
  }
}

export default ColorList
