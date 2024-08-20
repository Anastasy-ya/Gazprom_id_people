import React from 'react';
import styled from "styled-components";
import LogoImage from "../../shared/components/ui/LogoImage/LogoImage";
import AuthForm from "../../features/auth/ui/AuthForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
  gap: 85px;
`;

interface AuthFormProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthPage({ setIsLoggedIn }: AuthFormProps) {
  return (
    <section
      style={{
        padding: 0,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",

        margin: 0,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container>
        <LogoImage />
        <AuthForm setIsLoggedIn={setIsLoggedIn} />
      </Container>
    </section>
  );
}

export default AuthPage;
