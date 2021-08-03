import React from "react";
import { List, Button, Popconfirm, Checkbox } from "antd";

export const TodoNotesItem = (props) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onRemove = () => {
    console.log(`deleted`);
  };

  return (
    <List.Item
    id={props.todo._id}
      actions={[
        <Checkbox checked={props.todo.completed} onChange={onChange}>Finished</Checkbox>,
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => {
            onRemove(props.todo);
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
