import React from 'react';
import TicketNum from './TicketNum';

const Ticket = ({tickets,handleTickets,isWin}) => {
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: isWin ? 'yellow' : 'transparent',
    color: isWin ? 'black' : 'white',
    fontWeight: isWin ? '900' : 'normal',
    height: '2rem',
  };
  

  return (
    <>
      <div style={containerStyle}>
        {tickets.map((ticket,index)=><TicketNum key={index} ticket={ticket} />)}
      </div>
      <br/>
      <button onClick={handleTickets}>Generate Tickets</button>
    </>
  );
};

export default Ticket;
