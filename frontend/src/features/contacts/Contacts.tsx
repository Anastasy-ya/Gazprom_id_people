import styled from "styled-components";
import { Card, Typography, Avatar, Row, Col } from "antd";

import Contact from "../contact/Contact";



const StyledCard = styled(Card)`
  width: 618;
  /* height: auto; */
  border-radius: 2;
  border: 1px solid #d9d9d9;
  margin: 0;
  /* display: flex;
  flex-direction: column;
  gap: 28px; */

  .ant-card-body {
    padding: 16px;
  }

  /* background-color: red; */
`;

const Contacts = () => {
  return (
    <StyledCard>
      <Contact />
      <Contact />
      <Contact />
    </StyledCard>
  );
};

export default Contacts;