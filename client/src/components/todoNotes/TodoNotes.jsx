import React from "react";
import { List } from "antd";
import { TodoNotesItem } from "../todoNotesItem/TodoNotesItem";

export const TodoNotes = (props) => {
  return (
    <List
      size="large"
      bordered
      locale={{
        emptyText: "Nothing to do",
      }}
      dataSource={props.state}
      renderItem={(item) => <TodoNotesItem todo={item} />}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    ></List>
  );
};
