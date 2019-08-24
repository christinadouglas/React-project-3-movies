import React from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditMovie = (props) =>  {

  return (
    <div>
      <h4> Edit Movie</h4>
      <Form onSubmit={props.closeAndEdit}>
        <Label>
          Edit Movie:
          <Form.Input type="text" name="title" onChange={props.handleFormChange} value={props.movieToEdit.title}/>
        </Label>
        <Label>
          Edit Actors:
          <Form.Input type="text" name="actors" onChange={props.handleFormChange} value={props.movieToEdit.actors}/>
        </Label>
        <Label>
          Edit Writers:
          <Form.Input type="text" name="writers" onChange={props.handleFormChange} value={props.movieToEdit.writers}/>
        </Label>
        <Button type='Submit'>Edit</Button>
      </Form>
    </div>

    )
  }

export default EditMovie;
