import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://192.168.137.8:9000"); // Backend IP address

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [myId, setMyId] = useState(null);

  useEffect(() => {
    // Get socket ID when connected
    socket.on("connect", () => {
      setMyId(socket.id);
    });

    // Receive messages from backend
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("user-message", input);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💬 Real-Time Chat</h2>

      {/* Message Box */}
      <div style={styles.messageBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.id === myId ? styles.myMessage : styles.otherMessage
            }
          >
            {msg.message}
          </div>
        ))}
      </div>

      {/* Input and Button */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} style={styles.button}>
          ➤
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "'Arial', sans-serif",
    maxWidth: 500,
    margin: "40px auto",
    border: "1px solid #ccc",
    borderRadius: 12,
    backgroundColor: "#f4f4f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
  },
  messageBox: {
    border: "1px solid #ddd",
    height: 350,
    overflowY: "auto",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    marginBottom: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  myMessage: {
    alignSelf: "flex-end", // Your messages → Right side
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "12px 12px 0px 12px",
    maxWidth: "70%",
    wordWrap: "break-word",
    fontSize: 16,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  otherMessage: {
    alignSelf: "flex-start", // Other messages → Left side
    backgroundColor: "#e0e0e0",
    color: "#333",
    padding: "10px 14px",
    borderRadius: "12px 12px 12px 0px",
    maxWidth: "70%",
    wordWrap: "break-word",
    fontSize: 16,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  inputContainer: {
    display: "flex",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid #ccc",
    outline: "none",
    fontSize: 16,
    transition: "border-color 0.2s",
  },
  button: {
    padding: "12px 16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 18,
    transition: "background-color 0.2s",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default App;
