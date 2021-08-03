import React, { useState, useEffect } from "react";
import { Card, Col, Layout, Row } from "antd";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoNotes } from "./components/todoNotes/TodoNotes";
import { getNotes } from "./api/api";
const { Header } = Layout;

function App() {
  return (
    <>
      <Header className="header">
        <h1>TODO</h1>
      </Header>

      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todos-container"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 21 }}
          md={{ span: 19 }}
          lg={{ span: 18 }}
          xl={{ span: 17 }}
        >
          <Card title="Create a new note">
            <TodoForm />
          </Card>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 21 }}
          md={{ span: 19 }}
          lg={{ span: 18 }}
          xl={{ span: 17 }}
        >
          <Card title="Note List">
            <TodoNotes />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
