import { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/reset.css";
import { frasesBackup } from "./Data/FrasesBackup";
import { SideMenu } from "./components/SideMenu";
import ChatMessage from "./components/ChatMessage.js";
import InputMessage from "./components/InputMessage.js";

function App() {
  const [input, setInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [alerta, setAlerta] = useState("");

  const gerarFraseAleatoria = () => {
    const index = Math.floor(Math.random() * frasesBackup.length);
    return frasesBackup[index];
  };

  const adicionarMensagem = (texto, isUser = false) => {
    const novaMensagem = {
      id: Date.now(),
      texto,
      isUser,
    };
    setChatMessages((mensagens) => [...mensagens, novaMensagem]);
  };

  const enviarMensagem = () => {
    if (!input.trim()) return;
    adicionarMensagem(input, true);
    const resposta = gerarFraseAleatoria();
    adicionarMensagem(resposta);
    setInput("");
  };

  useEffect(() => {
    try {
      const fraseInicial = gerarFraseAleatoria();
      adicionarMensagem(fraseInicial);
    } catch {
      setAlerta(
        "⚠️ Não consegui carregar as frases online. Usando frases de reserva."
      );
    }
  }, []);

  return (
    <div className="app">
      <SideMenu />
      <div className="chat-container">
        {alerta && <div className="alerta">{alerta}</div>}
        <div className="mensagens">
          {chatMessages.map((msg) => (
            <ChatMessage key={msg.id} message={msg.texto} isUser={msg.isUser} />
          ))}
        </div>
        <InputMessage
          input={input}
          setInput={setInput}
          onSend={enviarMensagem}
        />
      </div>
    </div>
  );
}

export default App;
