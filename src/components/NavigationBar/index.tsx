// NavigationBar.tsx
import React, { useState } from "react";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import {
    AppstoreOutlined,
    ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined,
} from "@ant-design/icons";

interface NavigationBarProps {
    items: NavigationBarItem[];
}

export interface NavigationBarItem {
    key: React.Key;
    icon?: React.ReactNode;
    label: React.ReactNode;
    children?: NavigationBarItem[];
    type?: "group";
    path?: string; // 新增 path 属性来指定跳转的路径
}

export const navigationItems: NavigationBarItem[] = [
    {
        key: "1", label: "Option 1", icon: <PieChartOutlined />, path: "/option1",
    },
    {
        key: "2", label: "Option 2", icon: <DesktopOutlined />, path: "/option2",
    },
    {
        key: "3", label: "Option 3", icon: <ContainerOutlined />, path: "/option3",
    },
    {
        key: "sub1",
        label: "Navigation One",
        icon: <MailOutlined />,
        children: [
            { key: "5", label: "Option 5", path: "/option5" },
            { key: "6", label: "Option 6", path: "/option6" },
            { key: "7", label: "Option 7", path: "/option7" },
            { key: "8", label: "Option 8", path: "/option8" },
        ],
    },
    {
        key: "sub2",
        label: "Navigation Two",
        icon: <AppstoreOutlined />,
        children: [
            { key: "9", label: "Option 9", path: "/option9" },
            { key: "10", label: "Option 10", path: "/option10" },
            {
                key: "sub3",
                label: "Submenu",
                children: [
                    { key: "11", label: "Option 11", path: "/option11" },
                    { key: "12", label: "Option 12", path: "/option12" },
                ],
            },
        ],
    },
];

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {items.map((item) => (item.children ? (
                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                        {item.children.map((child) => (
                            <Menu.Item key={child.key}>
                                <Link to={child.path || "#"}>{child.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.path || "#"}>{item.label}</Link>
                    </Menu.Item>
                )))}
            </Menu>
        </div>
    );
};

export default NavigationBar;
