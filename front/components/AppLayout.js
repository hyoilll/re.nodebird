import React, { useState } from "react";
import PropsTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child{
    padding-left:0 !important;
  }
  .ant-col:last-child{
    padding-right:0 !important;
  }
`;

// 특정 컴포넌트 끼리 공통
const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useSelector를 통해 state의 값을 받아옴
  // state 값 변경시 자동으로 반영됨
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Global></Global>
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
          <SearchInput enterButton></SearchInput>
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
          {me ? <UserProfile></UserProfile> : <LoginForm></LoginForm>}
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
  children: PropsTypes.node.isRequired,
};

export default AppLayout;
