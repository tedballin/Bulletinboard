import React from 'react'
import {FaTrash,FaPen, FaSave} from 'react-icons/fa'

class Note extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDispaly = this.renderDisplay.bind  (this)
	}

    //methods
    edit() {
      this.setState({
        editing: true
      })
    }

    remove() {
      this.props.onRemove(this.props.index)
    }

    //onChange refers to update, passing in _newText and index
    //then setState back to false to update the UI
    save(e) {
      e.preventDefault()
      this.props.onChange(this._newText.value, this.props.index)
      this.setState({
        editing: false
      })
    }
  
      //render form
      // ref is the reference of content
    renderForm() {
      return (
        <div className="note">
          <form onSubmit={this.save}>
            <textarea ref={input => this._newText = input}/>
            <button id="save"><FaSave /></button>
          </form>
        </div>
      )
    }

    //passing in JSX expression
    renderDisplay() {
      return (
        <div className="note"> 
            <p>{this.props.children}</p>
            <span>
              <button onClick={this.edit} id="edit"><FaPen /></button>
              <button onClick={this.remove} id="remove"><FaTrash /></button>
            </span>
        </div>
      )
    }

    render() {
      //inline if else statement
      return this.state.editing ? this.renderForm() : this.renderDispaly()
      }
    }

export default Note
