import styled from "styled-components";
import { Card } from "antd";
import Contact from "../contact/Contact";

const StyledCard = styled(Card)`
  width: 618;
  border-radius: 2;
  border: 1px solid var(--gray-light);
  margin: 0 0 16px;

  .ant-card-body {
    padding: 16px;
  }
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
