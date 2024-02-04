import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with:", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
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
