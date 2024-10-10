import React from "react";
import {
  UserOutlined,UserSwitchOutlined,UsergroupAddOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;
const items2: MenuProps["items"] = [
  UserOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `admin ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option ${subKey}`,
      };
    }),
  };
});
const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Trang chủ" }, { title: "admin" }, { title: "dashboard" }]}
            style={{ margin: "16px 0" }}
          />
          <Link to={`dashboard/product/add`}><button className="font-bold flex border px-2 py-2 bg-yellow-300 rounded-lg">Thêm sản phẩm</button></Link>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,}}>
            Danh sách sản phẩm product
            
            <br/>
            <Outlet/>   
            <Link to={`/`}><button className="font-bold flex border px-2 py-2 rounded-lg">Trang chủ</button></Link>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
