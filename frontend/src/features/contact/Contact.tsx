import { Row, Col, Typography, Avatar } from "antd";
import styled from "styled-components";
import icon from "../../shared/assets/icon.jpeg";
import telegramIcon from "../../shared/assets/telegram.svg";
import groupIcon from "../../shared/assets/group.svg";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = () => (
  <div style={{ padding: 8 }} className="контейнер">
    <Row gutter={24} align="middle">
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 170,
            height: 36,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              padding: "2px",
              borderRadius: "50%",
              border: "2px solid var(--main-blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginRight: 8,
            }}
          >
            <Avatar size={32} src={icon} />
          </div>
          <Flex>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "22px",
                textAlign: "left",
              }}
            >
              Алексеева Анна
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 700,
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Product Manager
            </Typography>
          </Flex>
        </div>
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 250,
            height: 50,
            display: "flex",
            gap: 28,
            paddingTop: 5,
          }}
        >
          <div>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22px",
              }}
            >
              email@email.com
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22px",
              }}
            >
              +7 (943) 132-45-67
            </Typography>
          </div>
          <Avatar.Group shape="square" style={{ display: "flex", gap: 12 }}>
            <Avatar size={32} src={telegramIcon}></Avatar>
            <Avatar size={32} src={groupIcon}></Avatar>
          </Avatar.Group>
        </div>
      </Col>
    </Row>
  </div>
);

export default Contact;
