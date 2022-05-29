import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default function ModalDelete({ title, action, id }) {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      
      basic
      size="small"
      closeIcon
      open={open}
      trigger={
        <Button color="red">
          Eliminar <Icon style={{ marginLeft: "8px" }} name="trash" />
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon>
        <Icon name="trash" />
        {title}
      </Header>
      <Modal.Content style={{justifyContent:'center', display:'flex'}} >¿Estas seguro que quieres Eliminarlo?</Modal.Content>
      <Modal.Actions>
        <Button inverted color="green" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Link to={`/admin-movies`}>
          <Button
            inverted
            color="red"
            onClick={() => {
              action(id);
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
}
