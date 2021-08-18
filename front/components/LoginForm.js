import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  //   component에 사용하는 함수는 useCallback으로 최적화
  //   값은 useMemo로 최적화
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, pw);
    setIsLoggedIn(true);
  }, [id, pw]); //[] : 디펜던시

  return (
    <>
      {/* onFinish : e.preventDefault가 이미 적용되어 있음 */}
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
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
          <Button type="primary" htmlType="submit" loading={false}>
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
