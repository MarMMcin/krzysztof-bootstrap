import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    text-align: center;
  }
  .fas,
  .far {
    font-size: 30px;
    color: orange;
  }
`;
export const Contact = () => (
  <Styles>
    <div>
      <h2>Kontakt</h2>
      <div className="container">
        <div>
          <div className="col-md-auto">
            <div className="d-flex flex-row justify-content-center bd-highlight mb-2">
              <i class="fas fa-phone-alt"></i>
            </div>
            <p>Telefon: 728 559 ***</p>
          </div>
          <div className="col-md-auto">
            <div className="d-flex flex-row justify-content-center bd-highlight mb-2">
              <i class="far fa-clock"></i>
            </div>
            <p>
              {" "}
              poniedziałek – piątek:
              <br /> 8.00 – 18.00
            </p>
          </div>

          <div className="col-md-auto">
            <div className="d-flex flex-row justify-content-center bd-highlight mb-2">
              <i class="fas fa-map-marker-alt"></i>
            </div>{" "}
            <p>
              {" "}
              Krzysztof Butryn
              <br /> ul. Na Barciach X/Y <br /> 34-000 Kraków
            </p>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);
