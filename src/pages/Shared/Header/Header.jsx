import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container} from "react-bootstrap";


const Header = () => {
  
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favor</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <div className=" bg-light px-2">
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text...I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Header;
