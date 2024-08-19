import {
  Layout,
  // Menu,
  // Avatar,
} from "antd";
import styled from "styled-components";
import Header from "../../widgets/Header";
import MenuMain from "../../shared/components/ui/Menu/Menu";
import Button from "../../shared/components/ui/ButtonStyled/ButtonStyled";

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

const ButtonStyled = styled(Button)`
  margin-top: auto;
`;

const BoundingBox = styled.div`
  max-width: 1440px;
  display: flex;
  /* column-gap: 40px; */
  /* justify-content: space-between; */
  align-items: center;
`;

const StructurePage = () => {
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
        <Sider
          theme="light"
          width={207}
          // flexGrow=1,
        >
          <MenuMain />
          <ButtonStyled
            style={{ bottom: "24px", left: "24px", position: "absolute" }}
          >
            Выйти из системы
          </ButtonStyled>
        </Sider>

        <StyledContent 
        style={{
          // backgroundColor: "red",
          padding: 0,
          // margin: "16px 0",
        }}
        >
          {/*содержание */}
        </StyledContent>
      </Layout>
    </AppLayout>
  );
};

export default StructurePage;