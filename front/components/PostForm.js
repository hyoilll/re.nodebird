import { Button, Form, Input } from "antd";
import { useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const imageInput = useRef();

  const dispatch = useDispatch();

  const [text, onChangeText, setText] = useInput("");

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  useEffect(() => {
    // componentDidMount -> 첫 랜더링시 아래의 조건문이 실행됨. and componentDidUpdate에 의해 리랜더링
    if (addPostDone) {
      setText("");
    }
    // componentDidUpdate역할을 하는 배열 매개변수 addPostDone의 state의 변화가 생기면 리랜더링됨
  }, [addPostDone]);

  return (
    <>
      <Form
        style={{ margin: "10px 0 20px" }}
        encType="multipart/form-data"
        onFinish={onSubmit}
      >
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        ></Input.TextArea>
        <div>
          <input type="file" multiple hidden ref={imageInput}></input>
          <Button onClick={onClickImageUpload}>Upload Image</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">
            Upload
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img src={v} style={{ width: "200px" }} alt={v}></img>
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </>
  );
};

export default PostForm;
