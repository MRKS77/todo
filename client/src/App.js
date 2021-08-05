import React, { useState, useEffect } from "react";
import { Card, Col, Layout, Row } from "antd";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoNotes } from "./components/todoNotes/TodoNotes";
import { api } from "./api/api";
const { Header } = Layout;

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.getNotes();
        setState(data.todos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()

  }, []);

  const newNote = async (values) => {
    try {
      const res = await api.addNote(values);
      setState([...state, res.todos])
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await api.deleteNote(id);
      setState(state.filter(i => i._id !== res.todos._id))
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (values) => {
    try {
      const update = {...values, completed: !values.completed}
      await api.updateNote(values._id, update);
      setState(state.map(i => i._id === update._id ? update : i))
    } catch (error) {
      console.log(error);
    }
  };

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
            <TodoNotes
              state={state}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
