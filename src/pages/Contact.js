import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  * {
    box-sizing: border-box;
  }
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
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
    }
  }
  a {
    color: black;
    &:hover {
      color: #e63946;
    }
  }
  .icon {
    width: 40px;
    height: 60px;
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
            <div className="icon">
              <i className="fas fa-phone-alt "></i>
            </div>
          </div>
          <p>Telefon: 728 559 ***</p>
          <p>
            <a href="mailto:someone@yoursite.com">krzysztof.butryn@gmail.com</a>
          </p>
        </div>
        <div className="col-sm">
          <div className="d-flex flex-row justify-content-center">
            {" "}
            <div className="icon">
              <i className="far fa-clock"></i>
            </div>
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
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
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
