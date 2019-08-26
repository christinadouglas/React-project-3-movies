import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'


class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      actors: '',
      writers:''
    }

  }
  updateMovie = (e) => {
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
  }
  render(){
    return (
      <form onSubmit={this.props.addMovie.bind(null, this.state)}>
        <Segment color='black'>
        <label htmlFor="title">Movie:
          <input type="text" name="title" onChange={this.updateMovie} value={this.state.title}/>
        </label>
        </Segment>
        <Segment>
        <label htmlFor="writers">Writers:
          <input type="text" name="writers" onChange={this.updateMovie} value={this.state.writers}/>
        </label>
        </Segment>
        <Segment>
        <label htmlFor="Actors">Actors:
          <input type="text" name="actors" onChange={this.updateMovie} value={this.state.actors}/>
        </label>
        </Segment>
        <Segment>
        <label htmlFor="Stars">Stars:
          <input type="text" name="stars" onChange={this.updateMovie} value={this.state.stars}/>
        </label>
        </Segment>
        <button type='submit'>
          Create Movie
        </button>
      </form>
      )
  }
}

export default CreateMovie;
