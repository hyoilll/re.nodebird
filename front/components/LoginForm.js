import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput("");
  const [pw, onChangePw] = useInput("");

  //   component에 사용하는 함수는 useCallback으로 최적화
  //   값은 useMemo로 최적화

  const onSubmitForm = useCallback(() => {
    console.log(email, pw);
    dispatch(loginRequestAction({ email, pw }));
  }, [email, pw]); //[] : 디펜던시

  return (
    <>
      {/* onFinish : e.preventDefault가 이미 적용되어 있음 */}
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-email">E-mail</label>
          <br />
          <Input
            name="user-email"
            type={email}
            value={email}
            onChange={onChangeEmail}
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pw">PW</label>
          <br />
          <Input
            name="user-pw"
            type="password"
            value={pw}
            onChange={onChangePw}
            required
          ></Input>
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={logInLoading}>
            Login
          </Button>
          <Link href="/signup">
            <a>
              <Button>SignUp</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
