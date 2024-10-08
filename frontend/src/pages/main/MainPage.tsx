import { Layout } from "antd";
import styled from "styled-components";
import Header from "../../widgets/Header";
import MenuMain from "../../features/Menu/Menu";
import Button from "../../shared/components/ui/ButtonStyled/ButtonStyled";
import ProjectCard from "../../widgets/ProjectCard";
import NotesImage from "../../features/Notes/Notes";
import Contacts from "../../features/contacts/Contacts";
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
  max-width: 618px;
  min-width: 360px;
  margin: 16px 16px 16px 40px;
  position: relative;
  flex-grow: 1;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const RightColumn = styled.div`
  max-width: 532px;
  min-width: 360px;
  margin-left: 16px;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: auto;
`;

const MainPage = () => {
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
          <ProjectCard />
          <ProjectCard />
        </StyledContent>

        <RightColumn style={{ margin: "16px 0" }}>
          <Contacts />
          <NotesImage />
        </RightColumn>
      </Layout>
    </AppLayout>
  );
};

export default MainPage;
