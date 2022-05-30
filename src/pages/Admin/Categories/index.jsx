import React from "react";
import Navbar from "components/Navbar";
import { Header, Divider } from "semantic-ui-react";

export default function Categories() {
  return (
    <>
      <Navbar />
      <Header as="h2" className="header-title font-title">
        <Header.Content>Categorias</Header.Content>
      </Header>
      <Divider />
    </>
  );
}
