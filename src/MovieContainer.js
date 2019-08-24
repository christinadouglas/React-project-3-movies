import React, { Component } from 'react';
import CreateMovie from '../CreateMovie';
import MovieList from '../MovieList';
import EditMovie from '../EditMovie';
import './style.css'

class MovieContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      showEditModal: false,
      movieToEdit: {
        _id: null,
        title: '',
        description: ''
      }
    }
  }
  componentDidMount(){
    this.getMovies();
  }
  addMovie = async (movie, e) => {
    e.preventDefault(); 
    console.log(movie, e, ' inside of addMovie')

    try {
      const createMovie = await fetch('http://localhost:8000/movies',{
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json' /

          // know that the contents of the request is json
        }
      })
      console.log(createMovie, "<createMovie fetch")
      if(createMovie.status !== 200){
        // from the fetch request itself seeing if its a successful request

        throw Error('Resource not found')
      }

      const createMovieResponse = await createMovie.json();
      console.log(createMovieResponse.data, ' createMovieResponse');
      // we only want to add teh movie to the movies array, if it has
      // its mongo id, and it should because thats what are express
      // api is sending back
      this.setState({
        movies: [...this.state.movies, createMovieResponse.data]
      })


    } catch(err) {
      console.log(err, ' addMovie');
      return err
    }
  }
  getMovies = async () => {

    try {

      const responseGetMovies = await fetch('http://localhost:8000/movies', {
        credentials: 'same-origin',
        method: 'GET'
      });

      console.log(responseGetMovies, ' responseGetMovies')

      if(responseGetMovies.status !== 200){
        // before we parse

        // fetch won't reject a 404
        // throw errow ends the try and sends
        // the error to the catch
        throw Error('404 from server');
      }

      // parse the json from a string into a js object we
      // can manipulate
      const moviesResponse = await responseGetMovies.json();
      // in the browser console
      console.log(moviesResponse, ' moviesResponse <')

      this.setState({
        movies: [...moviesResponse.data]
      });


    } catch(err){
      console.log(err, ' getMovies errors');
      return err
    }


  }
  handleFormChange = (e) => {

    this.setState({
      movieToEdit: {
        ...this.state.movieToEdit, // spread the previous contents of
        // the object in the movie to edit
        // then use the computational properties to edit
        // the input you're typing in
        [e.target.name]: e.target.value
      }
    })

  }
  showModal = (movie) => {
    console.log(movie, ' movieID in show Modal')
    this.setState({
      movieToEdit: movie,
      showEditModal: !this.state.showEditModal
    })
  }
  closeAndEdit = async (e) => {
    e.preventDefault();

    try {
      const editRequest = await fetch('http://localhost:8000/movies' + this.state.movieToEdit._id, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(this.state.movieToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(editRequest.status !== 200){
        throw Error('editResquest not working')
      }

      const editResponse = await editRequest.json();

      const editedMovieArray = this.state.movies.map((movie) => {
        // remember map creates a brand new array
        if(movie._id === editResponse.data._id){
        // comparing every movie in the array, the
        // movie we edited
        // and if they match update the movie with response
        // data from the api
          movie = editResponse.data
        }

        return movie
      });

      this.setState({
        movies: editedMovieArray,
        showEditModal: false
      })

      console.log(editResponse, ' editResponse');

    } catch(err){
      console.log(err, ' error closeAndEdit');
      return err
    }
  }
  deleteMovie = async (id) => {
    console.log(id, ' delete movie ID')

    try {

      const deleteMovie = await fetch('http://localhost:8000/api/v1/movies/' + id, {
        method: 'DELETE',
        credentials: 'same-origin'
      });

      if(deleteMovie.status !== 200){
        throw Error('Something happend on delete')
      }

      // this object is the actual response from the api
      const deleteMovieJson = await deleteMovie.json();

      this.setState({
        movies: this.state.movies.filter((movie) => movie._id !== id)
      })

    } catch(err){
      console.log(err);
      return err
    }
  }
  render(){
    console.log(this.state, "< state in render");
    return (
      <div className='movie-container'>
        <CreateMovie addMovie={this.addMovie}/>
        <MovieList movies={this.state.movies} showModal={this.showModal} deleteMovie={this.deleteMovie}/>
        {this.state.showEditModal ? <EditMovie closeAndEdit={this.closeAndEdit} movieToEdit={this.state.movieToEdit} handleFormChange={this.handleFormChange}/> : null}
      </div>
      )
  }
}

export default MovieContainer;