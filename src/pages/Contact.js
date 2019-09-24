import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    text-align: center;
    font-size: 1em;
  }
  .main {
    padding-bottom: 20px;
    font-size: 38px;
  }
  .fas,
  .far {
    font-size: 40px;
    color: #e63946;
    padding-bottom: 22px;
  }
  a {
    color: black;
    &:hover {
      color: #1a535c;
    }
  }
`;
export const Contact = () => (
  <Styles>
    <p className="main">Kontakt</p>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="d-flex flex-row justify-content-center">
            {" "}
            <i className="fas fa-phone-alt "></i>
          </div>
          <p>Telefon: 728 559 ***</p>
          <p>
            <a href="mailto:someone@yoursite.com">krzysztof.butryn@gmail.com</a>
          </p>
        </div>
        <div className="col-sm">
          <div className="d-flex flex-row justify-content-center">
            {" "}
            <i className="far fa-clock"></i>
          </div>
          <p>
            {" "}
            poniedziałek – piątek:
            <br /> 8.00 – 18.00
          </p>
          <p>
            {" "}
            sobota – niedziela:
            <br /> nieczynne
          </p>
        </div>
        <div className="col-sm">
          <div className="d-flex flex-row justify-content-center">
            {" "}
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p>
            {" "}
            Krzysztof Butryn
            <br /> ul. Na Barciach X/Y <br /> 34-000 Kraków
          </p>
        </div>
      </div>
    </div>
  </Styles>
);
