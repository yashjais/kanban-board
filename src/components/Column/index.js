import React from 'react';

import Ticket from '../Ticket';

function Column({ groupOption, columnInfo, tickets }) {
  return (
    <div className="column">
      <h2>{groupOption === 'user' ? columnInfo.name : columnInfo.title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
