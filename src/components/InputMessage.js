import React from "react";
import "./InputMessage.css";

const InputMessage = ({ input, setInput, onSend }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Digite uma mensagem positiva..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <button onClick={onSend}>Enviar</button>
    </div>
  );
};

export default InputMessage;
