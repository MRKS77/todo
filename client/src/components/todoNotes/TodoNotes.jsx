import React from "react";
import { List } from "antd";
import { TodoNotesItem } from "../todoNotesItem/TodoNotesItem";

const data = [
  { _id: 0, title: "Australian walks 100km after outback crash.", completed: true },
  { _id: 0, title: "Japanese princess to wed commoner.", completed: false },
  { _id: 0, title: "Racing car sprays burning fuel into crowd.", completed: true },
];

export const TodoNotes = () => {
  return (
    <List
      size="large"
      bordered
      locale={{
        emptyText: "Nothing to do",
      }}
      dataSource={data}
      renderItem={(item) => <TodoNotesItem todo={item} />}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    ></List>
  );
};
