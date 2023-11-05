import React, { useState } from "react";
import {
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
    Breadcrumb, Layout, Menu, theme,
} from "antd";
import { useStyles } from "./index.style";

const {
    Header, Content, Footer, Sider,
} = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("工单管理", "sub1", <UserOutlined />, [
        getItem("工单列表", "3"),
        // getItem("Bill", "4"),
        // getItem("Alex", "5"),
    ]),
];

const AntdExample: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    const styles = useStyles();
    return (
        <Layout style={{ minHeight: "100vh" }/*  */}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default AntdExample;
