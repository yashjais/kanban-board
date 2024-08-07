import React from 'react';

import Ticket from '../Ticket';

import noPriority from '../../assets/No-priority.svg';
import urgent from '../../assets/SVG - Urgent Priority colour.svg';
import high from '../../assets/Img - High Priority.svg';
import medium from '../../assets/Img - Medium Priority.svg';
import low from '../../assets/Img - Low Priority.svg';

import backlog from '../../assets/Backlog.svg';
import toDo from '../../assets/To-do.svg';
import inProgress from '../../assets/in-progress.svg';
import done from '../../assets/Done.svg';
import cancelled from '../../assets/Cancelled.svg';

import user from '../../assets/user.png';

import add from '../../assets/add.svg';
import threeDotMenu from '../../assets/3 dot menu.svg';

import './Column.css';

const imgMapper = {
  'No Priority': noPriority,
  'Low': low,
  'High': high,
  'Medium': medium,
  'Urgent': urgent,
  'Backlog': backlog,
  'Todo': toDo,
  'In progress': inProgress,
  'Done': done,
  'Cancelled': cancelled,
};

function Column({ groupOption, columnInfo, tickets }) {
  return (
    <div>
      <div
        className="column-header"
      >
        <div className="column-header-section">
          <img
            className="avatars"
            src={groupOption === 'user' ? user : imgMapper[columnInfo.title]}
            alt="Down"
          />
          <h3 className="column-title-text">{groupOption === 'user' ? columnInfo.name : columnInfo.title}</h3>
          <h3 className="ticket-count">{tickets?.length}</h3>
        </div>
        <div className="column-header-section">
          <img className="avatars" src={add} alt="Add" />
          <img className="avatars" src={threeDotMenu} alt="ThreeDotMenu" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
