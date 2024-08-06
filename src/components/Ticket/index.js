import React from 'react';
import './Ticket.css';

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {/* <img src="https://via.placeholder.com/32" alt="User Avatar" className="user-avatar" /> */}
      </div>
      <div className="ticket-title">
        {ticket.title}
      </div>
      <div className="ticket-footer">
        <div className="ticket-icon">❗</div>
        <div className="ticket-tag">Feature Request</div>
      </div>
    </div>
  );
}

export default Ticket;
