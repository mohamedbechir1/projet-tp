import React, { useState } from "react";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import upload from "../assets/upload.png";
import Livre from "../components/livre";
import "../App.css";

function DesLivre() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [books, setBooks] = useState([
        // Book 1
        {
            id: 0,
            title: "Our Last Summer",
            description: "Book description",
            image: book1,
        },
        {
            id: 1,
            title: "Fortress Blood",
            description: "Book description",
            image: book2,
        },
        {
            id: 2,
            title: "The mind of a leader",
            description: "Book description",
            image: book3,
        },
    ]);

    const loadfile = (event) => {
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setImage(imageUrl);
        document.getElementById("newimg").className = "img01";
    };

    function removeBook(id) {
        setBooks(books.filter((item) => item.id !== id));
    }

    function addBook() {
        // {
        //   id: 0,
        //   title: "Our Last Summer",
        //   description: "Book description",
        //   image: book1,
        // },
        const newBook = {
            id: books.length,
            title, // title:title
            description, // description:description
            image, //image : image
        };
        setBooks([...books, newBook]);
    }

    return (
        <div>
            <div id="main" className="book-container">
                <div id="adding-div" className="add-book-rectangle">
                    <label>select book poster</label>
                    <input
                        type="file"
                        id="file"
                        className="upload-img-input"
                        onChange={loadfile}
                    ></input>
                    <label htmlFor="file">
                        <img className="upload-img" src={upload}></img>
                    </label>
                    <img id="newimg" className="img0" src={image} alt="uploaded image" />
                    <label>
                        <br></br>insert a title of the book
                    </label>
                    <input
                        type="text"
                        placeholder="Book Title"
                        id="title"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <label>
                        <br></br>
                        <br></br>insert a description of the book
                    </label>
                    <input
                        type="text"
                        placeholder="Book Description"
                        id="des"
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                    <br></br>
                    <br></br>
                    <button onClick={addBook}>Add Book</button>
                </div>
                {books.map((book) => {
                    return (
                        <Livre
                            key={book.id}
                            id={book.id}
                            image={book.image}
                            description={book.description}
                            title={book.title}
                            onDelete={() => {
                                removeBook(book.id);
                            }}
                            onClick={() => { }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default DesLivre;