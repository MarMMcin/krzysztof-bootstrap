import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    font-size: 0.8rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: black;
    height: 4vh;
  }
  p {
    color: gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  a {
    font-style: none;
    color: gray;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 992px) {
    .footer {
      font-size: 0.7rem;
      padding: 0;
    }
    p {
      white-space: nowrap;
    }
  }
`;
export const Footer = props => (
  <Styles>
    <div className="footer">
      <p>
        © Copyright 2019 Krzysztof Butryn |{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MarMMcin/krzysztof-bootstrap"
        >
          {" "}
          by: Marcin Magdoń <i class="fab fa-github-square"></i>
        </a>
      </p>
    </div>
  </Styles>
);
