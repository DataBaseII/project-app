import React from "react";
import { Image, Header, Icon, Divider } from "semantic-ui-react";
import Navbar from "components/Navbar";
import Movies from "pages/Admin/Movies";
import BG from "assets/bg_db.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header as="h2" className="header-title font-title">
        <Icon name="home" />
        <Header.Content> Netflix </Header.Content>
      </Header>
      <Divider/>
      <div>
        <Image style={{ height: "100%", width: "100%" }} src={BG}></Image>
      </div>
      <Movies title={"Movies"} />
    </>
  );
}
