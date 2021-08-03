import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
const { TextArea } = Input;

export const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
    props.newNote(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = ({ target: { value } }) => {
    setValue({ value });
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            label="Note"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your note!",
              },
            ]}
          >
            <TextArea
              value={value}
              onChange={onChange}
              placeholder="Create your note"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block="true">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
