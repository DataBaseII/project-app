import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Header, Icon, Modal, Form, Dropdown } from "semantic-ui-react";
import { getAllCategories } from "../../../../services/categories";

export default function ModalAdd({
  movie,
  button,
  icon,
  title,
  action,
  update,
}) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const movieForm = useFormik({
    initialValues: movie,
    enableReinitialize: true,
    onSubmit: (formData) => {
      setOpen(false);
      if (movie._id !== null) {
        console.log("Update: ", formData);
        action(movie._id, formData);
        alert(`Pelicula Actualizada!`);
        update(false);
      } else {
        console.log("Create: ", formData);
        update(false);
        action(formData);
        alert(`Pelicula ${formData.name} Registrada!`);
      }
    },
  });

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button>
          {button} <Icon style={{ marginLeft: "8px" }} name={icon} />
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content={title} />
      <Modal.Content>
        <Form onSubmit={movieForm.handleSubmit}>
          <Form.Input
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
            value={movieForm.values.name}
            onChange={movieForm.handleChange}
          />

          <Form.Input
            type="text"
            label="Año"
            placeholder="Año"
            name="year"
            value={movieForm.values.year}
            onChange={movieForm.handleChange}
          />

          <Form.Input
            type="text"
            label="Imagen BG"
            placeholder="http://..."
            name="imageBG"
            value={movieForm.values.imageBG}
            onChange={movieForm.handleChange}
          />
          <Form.Input
            type="text"
            label="Imagen Card"
            placeholder="http://..."
            name="imageCard"
            value={movieForm.values.imageCard}
            onChange={movieForm.handleChange}
          />
          <Form.Input
            type="text"
            label="Video"
            placeholder="http://..."
            name="video"
            value={movieForm.values.video}
            onChange={movieForm.handleChange}
          />
          <Form.Input
            type="text"
            label="Duracion"
            placeholder="00:00"
            name="duration"
            value={movieForm.values.duration}
            onChange={movieForm.handleChange}
          />
          <Form.Field >
            <label>Categoria</label>
            <Dropdown
              label="Categoria"
              fluid
              selection
              placeholder="Selecciona Categoria"
              options={categories}
              value={movieForm.values.genreId}
              onChange={(_, { value }) =>
                movieForm.setFieldValue("genreId", value)
              }
            />
          </Form.Field>

          <Form.Input
            type="text"
            label="Sinopsis"
            placeholder="Sinopsis"
            name="sinopsis"
            value={movieForm.values.sinopsis}
            onChange={movieForm.handleChange}
          />
          <Form.Input
            type="text"
            label="Director"
            placeholder="Director"
            name="director"
            value={movieForm.values.director}
            onChange={movieForm.handleChange}
          />

          <Form.Input
            type="text"
            label="Idiomas"
            placeholder="Español, Ingles"
            name="idioms"
            value={movieForm.values.idioms}
            onChange={movieForm.handleChange}
          />

          <Form.Input
            type="text"
            label="Actores"
            placeholder="Actor1, Actor2"
            name="actors"
            value={movieForm.values.actors}
            onChange={movieForm.handleChange}
          />

          <Modal.Actions>
            <Button color="red" onClick={() => setOpen(false)}>
              <Icon name="remove" /> No
            </Button>

            <Button color="green" type="submit">
              <Icon name="checkmark" /> Si
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
