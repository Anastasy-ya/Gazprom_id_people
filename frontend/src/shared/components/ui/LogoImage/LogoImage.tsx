import React from 'react';
import { Image } from "antd";
import styled from "styled-components";
import logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const ResponsiveImage = styled(Image)`
  width: 100%;
  max-width: 160px;
  min-width: 120px;
  height: auto;
  padding-top: 10px;
`;

function LogoImage() {
  const navigate = useNavigate();

  return (
    <ResponsiveImage
      src={logo}
      preview={false}
      alt="Лого"
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
    />
  );
}

export default LogoImage;
