import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'winter hats',
                    name: 'Winter Hats'
                },
                {
                    key: 'cylinder hats',
                    name: 'Cylinders'
                },
                {
                    key: 'berets',
                    name: 'Berets'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>{this.state.categories.map(el => (
        <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
      ))}
      </div>
    )
  }
}

export default Categories