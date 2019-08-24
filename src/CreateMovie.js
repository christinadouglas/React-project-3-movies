import React, { Component } from 'react';


class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: ''
    }

  }
  updateMovie = (e) => {
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
  }
  render(){
    return (
      <form onSubmit={this.props.addMovie.bind(null, this.state)}>
        <label htmlFor="title">Movie:
          <input type="text" name="title" onChange={this.updateMovie} value={this.state.title}/>
        </label>
        <label htmlFor="description">description:
          <input type="text" name="description" onChange={this.updateMovie} value={this.state.description}/>
        </label>
        <button type='submit'>
          Create Movie
        </button>
      </form>
      )
  }
}

export default CreateMovie;
