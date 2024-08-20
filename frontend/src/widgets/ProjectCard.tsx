import React from 'react';
import styled from "styled-components";
import { Card, Typography, Avatar } from "antd";
import TagCloud from "../features/Tags/Tags";
import Contact from "../features/contact/Contact";
import icon from "../shared/assets/icon.jpeg";

const { Title } = Typography;

const StyledCard = styled(Card)`
  width: 618;
  border-radius: 2;
  border: 1px solid #d9d9d9;
  margin: 0 0 16px;

  .ant-card-body {
    padding: 16px;
  }
`;

const data = {
  id: 0,
  name: "string",
  description: "string",
  status: {
    id: 0,
    name: "string",
    color: "#96B9fA",
  },
  tags: [
    {
      id: 0,
      name: "В работе",
      color: "var(--yellow)",
    },
    {
      id: 1,
      name: "Внутренний  продукт",
      color: "#a8F",
    },
    {
      id: 2,
      name: "Веб-сервиc",
      color: "#a8F",
    },
    {
      id: 3,
      name: "В работе",
      color: "#a8F",
    },
    {
      id: 4,
      name: "Внутренний  продукт",
      color: "#a8F",
    },
    {
      id: 5,
      name: "Веб-сервиc",
      color: "#a8F",
    },
  ],
  team_members: {
    id: 0,
    image: "string",
  },
  team_extra_count: 0,
  director: {
    id: 0,
    full_name: "string",
    position: "string",
    phone_number: "string",
    telegram: "string",
    email: "user@example.com",
    image: "string",
    employment_type: 0,
    ms_teams: "user@example.com",
  },
};

const ProjectCard = () => {
  return (
    <StyledCard>
      {/* Первый контейнер */}
      <div>
        <Title
          level={2}
          style={{
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "24px",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          Сервис Газпром ID People
        </Title>
        <Typography
          style={{
            fontSize: 14,
            lineHeight: "22px",
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          Программное обеспечение для построения организационных диаграмм,
          разработанное для того, чтобы помочь компаниям управлять своей
          организационной структурой и визуализировать ее. Проект состоит из
          четырех разделов. Первый - справочник сотрудников компании. Второй -
          раздел с проектами. На этой странице реализована возможность
          перемещать сотрудников или целые отделы между проектами. Третий раздел
          посвящен структуре компании. Она представлена в виде дерева, которое
          автоматически генерируется на основе базы сотрудников. Последний
          раздел - это главная страница, на которой сотрудник может
          просматривать свои проекты и сохраненные контакты коллег.
        </Typography>
        <div style={{ marginTop: 16 }}>
          <TagCloud data={data} />
        </div>
      </div>

      <div style={{ paddingTop: 28 }}>
        <Title
          level={3}
          style={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            textAlign: "left",
            paddingBottom: 0,
            marginBottom: "8px",
          }}
        >
          Команда проекта
        </Title>
        <Contact />
      </div>

      <Avatar.Group
        size="large"
        max={{
          count: 2,
          style: {
            color: "white",
            backgroundColor: "var(--main-blue)",
            cursor: "pointer",
          },
          popover: {
            trigger: "click",
          },
        }}
      >
        <Avatar src={icon} />
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          src={icon}
        />
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
          icon={icon}
        />
      </Avatar.Group>
    </StyledCard>
  );
};

export default ProjectCard;
