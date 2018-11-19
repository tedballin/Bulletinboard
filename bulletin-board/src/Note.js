import React from 'react'
import {FaTrash,FaPen} from 'react-icons/fa'

class Note extends React.Component {
    //constructor 
    constructor(props) {
      super(props)
      this.edit = this.edit.bind(this)
      this.remove = this.remove.bind(this)
    }

    //methods
    edit() {
      alert ('editing note')
    }

    remove() {
      alert ('remove note')
    }
  
    render() {
      return (
        <div className="note"> 
            <p>Learn React</p>
            <span>
              <button onClick={this.edit} id="edit"><FaPen /></button>
              <button onClick={this.remove} id="remove"><FaTrash /></button>
            </span>
        </div>
      )
    }
}

export default Note
