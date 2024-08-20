import { Layout, Avatar } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import LogoImage from "../shared/components/ui/LogoImage/LogoImage";
import Bell from "../shared/components/ui/Bell/Bell";
import icon from "../shared/assets/icon.jpeg";

const StyledHeader = styled(Layout.Header)`
  height: 80px;
  flex-grow: 1;
  padding: 0;
`;

const BoundingBox = styled.div`
  max-width: 1440px;
  display: flex;
  column-gap: 40px;
  justify-content: space-between;
  align-items: center;
`;

const WelcomeTextContainer = styled.div`
  flex-grow: 1;
`;

const WelcomeText = styled.h1`
  margin: 0;
  font-size: 24px;
  text-align: left;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 226px;
`;

const UserName = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

const LogoBackground = styled.div`
  width: 207px;
  height: 80px;
  background-color: white;
`;

const Header = () => {
  return (
    <StyledHeader
      style={{
        background: "var(--light-blue)",
      }}
    >
      <BoundingBox>
        <LogoBackground>
          <LogoImage />
        </LogoBackground>
        <WelcomeTextContainer>
          <WelcomeText>Добро пожаловать, Александр!</WelcomeText>
        </WelcomeTextContainer>
        <UserSection>
          <QuestionCircleOutlined />
          <Bell notifications={10} />
          <Avatar src={icon} />
          <UserName>Александр</UserName>
        </UserSection>
      </BoundingBox>
    </StyledHeader>
  );
};

export default Header;
