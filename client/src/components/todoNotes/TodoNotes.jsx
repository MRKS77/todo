import React from "react";
import { List } from 'antd';
import { TodoNotesItem } from "../todoNotesItem/TodoNotesItem";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Hi'
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
      renderItem={item => (
        <TodoNotesItem todo={item} />
      )}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    >
    </List>
  );
};
