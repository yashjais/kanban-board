import React from 'react';
import userAvatar from '../../assets/user.png';
import './Ticket.css';

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
      </div>
      <div className="ticket-title">
        {ticket.title}
      </div>
      <div className="ticket-footer">
        {
          ticket.tag.map((tg, index) => (
            <div key={index} className="ticket-tag">{tg}</div>
          ))
        }
      </div>
    </div>
  );
}

export default Ticket;