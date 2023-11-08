import React, { useState } from 'react';

function Formulario() {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  const handleClick = () => {
    alert(`Campo 1: ${campo1}, Campo 2: ${campo2}`);
  };

  return (
    <div>
      <label>
        Campo 1:
        <input
          type="text"
          value={campo1}
          onChange={(e) => setCampo1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Campo 2:
        <input
          type="text"
          value={campo2}
          onChange={(e) => setCampo2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleClick}>Exibir Valores</button>
    </div>
  );
}

export default Formulario;