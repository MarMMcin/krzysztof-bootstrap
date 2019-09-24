import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import boatImage from "../assets/geodezja.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #003a55;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  h1 {
    font-weight: bold;
    color: #e63946;
  }
  p {
    color: white;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Krzysztof Butryn</h1>
        <p>rzeczoznawca oraz wycena nierychomosci</p>
      </Container>
    </Jumbo>
  </Styles>
);