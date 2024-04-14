// import React from 'react';

const Coin = ({ coin, handleButton }) => {
  const coinStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
  };

  const labelAndMovesStyle = {
    color: coin.color,
  };

  const buttonStyle = {
    color: coin.color
  };

  return (
    <div style={{ ...coinStyle }}>
      <h4 style={{ ...labelAndMovesStyle }}>{coin.color.toUpperCase()}</h4>
      <p>Moves : <span style={{ ...labelAndMovesStyle }}>{coin.moves}</span></p>
      <p>Curr Point : <span style={{ ...labelAndMovesStyle }}>{coin.point}</span></p>
      <button style={buttonStyle} onClick={() => handleButton(coin.color)}>+1</button>
    </div>
  );
};

export default Coin;
