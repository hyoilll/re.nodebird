import React, { useState } from "react";
import PropsTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

// 특정 컴포넌트 끼리 공통

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search
            enterButton
            style={{ verticalAlign: "middle" }}
          ></Input.Search>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>Singup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/*
        https://ant.design/components/grid/
         xs: 모바일, sm: 태블릿, md: 작은 데스트탑
         n/24 크기
         ex) xs = 24 => 100% , = 6 => 25%
         gutter : Col 사이의 간격
      */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile></UserProfile> : <LoginForm></LoginForm>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://blog.naver.com/dlgydlf12345"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Hyoil
          </a>
        </Col>
      </Row>
      {/* 
        xs 화면에서는 col이 세로로 3칸 스택처럼 쌓여있는 모양
        md 화면에서는 col이 가로로 25% 50% 25%로 나열되어 있는 모양  
      */}
    </div>
  );
};

AppLayout.propTypes = {
  chileren: PropsTypes.node.isRequired,
};

export default AppLayout;
