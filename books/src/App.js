import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      Reading List App
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        Made with ❤️ by witschge
      </div>
    </div>
  );
}

export default App;
