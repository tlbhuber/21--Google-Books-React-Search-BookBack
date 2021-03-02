// import axios from 'axios';
import React, { useState } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard/index";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import Button from "@material-ui/core/Button";

function Search() {
  const [search, setSearch] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    // console.log(search);
  };

  const handleBtnClick = () => {
    API.getGoogleBooks(search).then((res) => {
      console.log(res);
      setGoogleBooks(res.data.items);
    });
  };

  const handleSavedBooks = (id) => {
    const savedBooks = googleBooks.find((savedBooks) => savedBooks.id === id);

    console.log(savedBooks);
    console.log("Saving...");

    API.saveBook({
      googleId: savedBooks.id,
      title: savedBooks.volumeInfo.title,
      image: savedBooks.volumeInfo.imageLinks.thumbnail,
      author: savedBooks.volumeInfo.authors.join(", "),
      description: savedBooks.volumeInfo.description,
      link: savedBooks.volumeInfo.infoLink,
    })
      .then(() => googleBooks)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Paper
        style={{
          backgroundColor: "black",
          marginBottom: 100,
          paddingBottom: 25,
        }}
      >
        <Paper
          elevation={24}
          style={{
            backgroundColor: "#566573",
            height: 450,
            marginBottom: 35,
          }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: 15,
                fontFamily: "Titillium Web",
              }}
            >
              <LocalLibraryTwoToneIcon
                fontSize="large"
                style={{ 
                  marginRight: 0,
                  fontSize: 75 }}
              ></LocalLibraryTwoToneIcon>
            </h1>
            <h1 style={{
                color: "white",
                textAlign: "center",
                // fontStyle: "italic",
                fontFamily: "Titillium Web",
                fontSize: 50
              }}
              >
                Welcome to BookBack!</h1>
            <h2 style={{
                color: "white",
                textAlign: "center",
                // fontStyle: "italic",
                fontFamily: "Titillium Web",
              }}
            >
              Search for your favorite books
            </h2>
            <br></br>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input placeholder="Search Book" onChange={handleInputChange} />

              <Button variant="outlined" 
              style={{ 
                backgroundColor: "blue", 
                color: "White", 
                borderColor: "white", 
                marginLeft: 10 }} onClick={handleBtnClick}>
                Search
              </Button>

            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 35,
              }}
            >
              <Button
                variant="disabled"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",

                }}
              >
                Search
              </Button>

              <Button
                variant="outlined"
                style={{
                  marginLeft: 50,
                  backgroundColor: "#93186C",
                  color: "white",
                  borderColor: "white",
                  borderStyle: "solid",
                }}
                href="/saved"
              >
                Saved
              </Button>
            </Grid>
          </div>
        </Paper>

        <Grid container spacing={7}>
          {googleBooks.map((books) => {
            return (
              <Grid item xs={12} key={books.id}>
                <BookCard
                  title={books.volumeInfo.title}
                  thumbnail={books.volumeInfo.imageLinks.thumbnail}
                  authors={books.volumeInfo.authors + ""}
                  description={books.volumeInfo.description}
                  link={books.volumeInfo.infoLink}
                >
                  <Button
                    onClick={() => handleSavedBooks(books.id)}
                    variant="outlined"
                    style={{
                      marginLeft: 30,
                      marginTop: 5,
                      marginBottom: 10,
                      backgroundColor: "#93186C",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Save
                  </Button>
                </BookCard>
              </Grid>
            );
          })}
        </Grid>

        {googleBooks.length ? (
          <p></p>
        ) : (
            <p style={{ 
              textAlign: "center", 
              color: "white", 
              paddingTop: 50, 
              fontSize: 23 
              }}>
              Your searched books will appear in this space below. 
            </p>
          )}
      </Paper>
    </Container>
  );
}

export default Search;
