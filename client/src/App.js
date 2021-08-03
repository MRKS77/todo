import React, { useState, useEffect } from "react";
import { Card, Col, Layout, Row } from "antd";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoNotes } from "./components/todoNotes/TodoNotes";
import { api } from "./api/api";
const { Header } = Layout;

function App() {
  const [state, setState] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.getNotes();
      setState({ data }.data);
    } catch (error) {
      console.log(error);
    }
  });

  const newNote = async (values) => {
    try {
      const {data} = await api.addNote(values)
    } catch (error) {
      console.log(error)
    }
  }
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
            <TodoForm newNote={newNote} />
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
            <TodoNotes state={state} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
