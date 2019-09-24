import React from "react";

import styled from "styled-components";
const Styles = styled.div`
  .main {
    padding-bottom: 20px;
    font-size: 38px;
    text-align: center;
  }
`;

export const Price = () => (
  <Styles>
    <div>
      <p className="main">Cennik</p>

      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          doloremque fugit suscipit quidem accusamus similique debitis fuga
          mollitia sed vero. Nesciunt harum laboriosam deserunt, natus molestiae
          veritatis eius maiores vero?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          possimus animi earum voluptates, ipsam mollitia! Et, repellendus
          culpa, esse odit, quae atque commodi ducimus qui natus nobis
          aspernatur sequi quidem!
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          inventore molestiae ex quas quod, harum reiciendis est dolorum
          accusamus ad debitis eligendi nemo commodi, amet veritatis. Quisquam
          animi dolores reprehenderit?
        </p>
      </div>
    </div>
  </Styles>
);
