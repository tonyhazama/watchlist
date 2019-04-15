import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="menu active">
          <div className="icon"></div>
          <div className="label">Lowe</div>
        </div>
        <div className="menu">
          <div className="icon"></div>
          <div className="label">Options</div>
        </div>
        <div className="menu">
          <div className="icon"></div>
          <div className="label">Other Options</div>
        </div>
      </div>
    )
  }
}
