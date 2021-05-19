import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return <Book key={book.id} {...book} />;
      })}

      {/* <Book {...books[0]} />
      <Book {...books[1]} />
      <Book {...books[2]} /> */}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
