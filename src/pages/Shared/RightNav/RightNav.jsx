import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2 px-5" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="px-5" variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-5 mb-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook className="text-primary"></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className="text-primary"></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className="text-danger"></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-3">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
