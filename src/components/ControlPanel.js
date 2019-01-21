import React from 'react'


// starred: false
// as_gradient: false
// group: "blue"
// status: "considering"
// website_placement: "text"

const ControlPanel = (props) => {
  const boolFilters = {
    starred: {
      label: 'Stars',
      options: [
        {val: true, display: 'starred'},
        {val: false, display: 'unstarred'}
      ]
    },
    as_gradient: {

    }
  }

  const filters = {
    group: {
      label: 'Color Family',
      options: ['red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'purple', 'pink', 'grey', 'black']
    },
    status: {
      label: 'Status',
      options: ['final','considering', 'recycled'],
    },
    website_placement: {
      label: 'Usage',
      options: ['background', 'text', 'highlight', 'secondary', 'primary', 'other'],
    },


  }

  return (
    <div className='control-panel-wrapper'>
      <div className='sort-select'>
        <div className='form-field-label'>
          Sort
        </div>
        <select onChange={props.onSelectSort} value={props.sortSelection}>
          <option value=''>Select..</option>
          <option value='starred'>Starred</option>
          <option value='hex'>Hex</option>
          <option value='group'>Group</option>
          <option value='website_placement'>Usage</option>
          <option value='status'>Status</option>
        </select>
      </div>

      <div className='filter-wrapper'>
        <div className='form-field-label'>
          Filters
        </div>

        <div className='filter-section-bool'>
          <div className='filter-field-select'>
            <div className='filter-field-label'>
              Color Type
            </div>

            <select value={props.filters.as_gradient} name='as_gradient' onChange={props.onSelectFilter}>
              <option value="">Select..</option>
              <option value={false}>Solid</option>
              <option value={true}>Gradient</option>
            </select>
          </div>
        </div>

        <div className='filter-section-reg'>
          {Object.keys(filters).map((f) => {
            if (f != 'as_gradient') {
              return (
                <div key={f} className='filter-field-select'>
                  <div className='filter-field-label'>
                    {filters[f].label}
                  </div>

                  <select value={props.filters[f]} name={f} onChange={props.onSelectFilter}>
                    <option value=''>Select..</option>
                    {filters[f].options.map((o) => {
                      return (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      )
                    })}
                  </select>

                </div>
              )
            }

          })}
        </div>
      </div>
    </div>
  )
}

export default ControlPanel
