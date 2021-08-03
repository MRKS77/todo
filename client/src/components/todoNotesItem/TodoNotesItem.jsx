import React from "react";
import { List, Button, Popconfirm, Checkbox } from "antd";

export const TodoNotesItem = (props) => {
  return (
    <List.Item
      id={props.todo._id}
      actions={[
        <Checkbox
          checked={props.todo.completed}
          onChange={() => {
            props.updateNote(props.todo)
          }}
        >
          Finished
        </Checkbox>,
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => {
            props.deleteNote(props.todo._id);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            Delete
          </Button>
        </Popconfirm>,
      ]}
    >
      {props.todo.title}
    </List.Item>
  );
};
