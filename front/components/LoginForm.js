import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  //   component에 사용하는 함수는 useCallback으로 최적화
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  return (
    <>
      <Form>
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
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            Login
          </Button>
          <Link href="/signup">
            <a>
              <Button>SignUp</Button>
            </a>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
