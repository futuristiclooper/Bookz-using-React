import { Link } from "react-router-dom";

const Bookscard = ({ book }) => {
  const { thumbnailUrl, title, pageCount, authors, categories,id } = book; //destructuring

  const link= "/book/"+id;
  return (
   <Link to={link} > <div className="bookscard">
      <img src={thumbnailUrl} />
      <h2>{title}</h2>
      <h3>{authors.join(", ")}</h3>
      <h3>{categories.join(", ")}</h3>
      <h4> {pageCount} Pages</h4>
    </div></Link>

  );
};

export default Bookscard;
