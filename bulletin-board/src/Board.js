import React from 'react'
//inside Board render signle note
import Note from'./Note'
import {FaPlus} from 'react-icons/fa'

class Board extends React.Component {
  //render notes based on state data
  constructor (props) {
    super(props)
    this.state = {
      //notes array contains list of notes
      notes: [ 
        {
          id: 0,
          note: 'Call Lisa'
        },
        {
          id: 1,
          note: 'Email John'
        },
        {
          id: 2,
          note: 'Print note'
        }
      ]
    }
    this.add = this.add.bind(this) 
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this) 
    this.nextId = this.nextId.bind(this)
  }

  //render notes based on data
  eachNote(note, i) {
    return (
      <Note key = {i}
            index = {i}
            onChange = {this.update}
            onRemove = {this.remove}>
            {note.note}
            </Note>
    )
  }

  //arrow function maps each note in notes
  //check if the id matches input i, if matches, 
  //keep the key and update conent with newText
  //  ... is the ES6 spread operator  (all of the notes already in state)
  update(newText, i) {
      console.log('updating item at index', i, newText)
      this.setState (prevState => ({
        notes: prevState.notes.map (
          note => (note.id !== i) ? note : {...note, note: newText}
        )
      }))
  }

  //passing in id and use filter to check and return a new array
  //[remaining notes] without removed item
  remove(id) {
    console.log('removing item at', id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  //  ... is the ES6 spread operator  (all of the notes already in state)
  // push them into this new array
  add(text) {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }))
  }

  //function generate id
  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  render() {
    return(
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, "New Note")} id="add">
        <FaPlus/>
        </button>
      </div>
    )
  }
}

export default Board