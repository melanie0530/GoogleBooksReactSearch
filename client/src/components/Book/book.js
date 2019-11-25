import React from "react";
import "./book.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5 className="font-italic">{subtitle}</h5>
      <div className="btn-container">
        <p className="font-italic small">Written by {authors}</p>
        <img className="img-thumbnailw-100" src={image} alt={title} />
        <p>{description}</p>
        <Button />
        <button className="buttonView" target="_blank" rel="noopener noreferrer" href={link}>
          View
            </button>
      </div>
    </div>
  );
}

export default Book;
