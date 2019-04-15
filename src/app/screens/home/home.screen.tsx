import React, { Component } from 'react'
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';

export default class Home extends Component {
  render() {
    return (
      <div className="structure">
        <Header />
        <Sidebar />
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Commodi rerum tempore aut, ratione ab magnam sequi illo alias ut saepe atque totam facere. 
          Quia id est dolore, temporibus excepturi ut?
        </div>
      </div>
    )
  }
}
