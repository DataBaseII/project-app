import React, { useState } from "react";
import { useFormik } from 'formik';
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

import { createMovie } from "services/movies";

export default function ModalAdd({movie}) {
  const [open, setOpen] = useState(false);

  const movieForm = useFormik({
    initialValues: {
      name: '',
      genreId: 1,
    },
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}. 
        Age: ${values.age}`);
    }
  });

  function handleSubmit() {
    createMovie(movie);
    console.log(movie);
    setOpen(false)
  }


  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button>
          Agregar <Icon style={{ marginLeft: "8px" }} name="add" />
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content="Agregar Pelicula" />
      <Modal.Content>

        <Form onSubmit={movieForm.handleSubmit}>
          <Form.Field name="name">
            <label>Name</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field name="genreId">
            <label>Categoria</label>
            <input placeholder="Categoria" />
          </Form.Field>
        </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => handleSubmit()}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
