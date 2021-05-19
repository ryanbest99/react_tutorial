import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

import { books } from "./books.js";
import { Book } from "./Book.js";

function BookList() {
  return (
    <section>
      <h1 className="title">My Book Club</h1>
      <div className="booklist">
        {books.map((book) => {
          console.log(book);
          return <Book key={book.id} {...book} />;
        })}

        {/* <Book {...books[0]} />
      <Book {...books[1]} />
      <Book {...books[2]} /> */}
      </div>
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
