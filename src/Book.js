export const Book = (props) => {
  console.log(props);
  const { img, title, author, link } = props;

  const clickHandler = (e) => {
    console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(link);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        CLICK
      </button>
      {/* <a href="#">
        <input type="button" value="Click" className="btn" />
      </a> */}
    </article>
  );
};
