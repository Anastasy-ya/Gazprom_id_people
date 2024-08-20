import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";

import {
  UnorderedListOutlined,
  PartitionOutlined,
  ProjectOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "1",
    icon: <AppstoreOutlined style={{ marginRight: 12 }} />,
    label: "Главная",
    path: "/",
  },
  {
    key: "2",
    icon: <UnorderedListOutlined style={{ marginRight: 12 }} />,
    label: "Справочник",
    path: "/",
  },
  {
    key: "3",
    icon: <ProjectOutlined style={{ marginRight: 12 }} />,
    label: "Проекты",
    path: "/",
  },
  {
    key: "4",
    icon: <PartitionOutlined style={{ marginRight: 12 }} />,
    label: "Структура компании",
    path: "/structure",
  },
];

function MenuMain() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", padding: "7vh 0 0" }}>
      <Tabs
        tabPosition="left"
        tabBarStyle={{ padding: "12px 0", textAlign: "center" }}
        items={menuItems.map((item) => ({
          key: item.key,
          label: (
            <div
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              {item.icon}
              {item.label}
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default MenuMain;
