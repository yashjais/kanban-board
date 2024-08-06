import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Column from '../Column';

import { defaultColumnOptions } from './constants';

import './Board.css';

function Board({
  groupOption,
  orderOption,
}) {
  const [tickets, setTickets] = useState([]);
  const [columnOptions, setColumnOptions] = useState(defaultColumnOptions);

  const fetchData = async() => {
    const { data: { tickets, users } } = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    const newTickets = tickets.map((ticket) => ({
      ...ticket,
      user: users.find(({ id }) => ticket.userId === id) || null,
    }));
    setTickets(newTickets);
    setColumnOptions((prevState) => prevState.map((ele) => {
      if (ele.title === 'user') {
        ele.options = users;
        return ele;
      }

      return ele;
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = columnOptions.find(({ title }) => title === groupOption);

  return (
    <div className="board">
      {columns?.options?.map((col) => {
        const columnTickets = tickets.filter((ticket) => {
          if (groupOption === 'priority') {
            return ticket.priority === col.id;
          } else if (groupOption === 'status') {
            return ticket.status === col.title;
          } else {
            return ticket.userId === col.id;
          }
        });
        const orderedColumnTickets = columnTickets.sort((a, b) => {
          if (orderOption === 'priority') {
            return b.priority - a.priority;
          } else {
            return a.title - b.title;
          }
        })
        return <Column key={col.id} groupOption={groupOption} columnInfo={col} tickets={orderedColumnTickets} />;
      })}
    </div>
  );
}

export default Board;
