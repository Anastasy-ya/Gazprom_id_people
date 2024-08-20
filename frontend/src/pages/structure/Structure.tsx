import React from 'react';
import { Layout } from "antd";
import styled from "styled-components";
import Header from "../../widgets/Header";
import MenuMain from "../../features/Menu/Menu";
import Button from "../../shared/components/ui/ButtonStyled/ButtonStyled";
import StructureImage from "../../features/structure/Structure";
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

const AppLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: scroll;
  background: var(--light-blue);
`;

const StyledContent = styled(Content)`
  max-width: 100%;
  min-width: 360px;
`;

const ButtonStyled = styled(Button)`
  margin-top: auto;
`;

function StructurePage() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <Header />
      <Layout
        style={{
          background: "var(--light-blue)",
          flexWrap: "wrap",
          overflow: "scroll",
          flexGrow: 1,
        }}
      >
        <Sider theme="light" width={207}>
          <MenuMain />
          <ButtonStyled
            style={{ bottom: "24px", left: "24px", position: "absolute" }}
            onClick={() => navigate("/auth")}
          >
            Выйти из системы
          </ButtonStyled>
        </Sider>

        <StyledContent
          style={{
            padding: 0,
          }}
        >
          <StructureImage />
        </StyledContent>
      </Layout>
    </AppLayout>
  );
}

export default StructurePage;
