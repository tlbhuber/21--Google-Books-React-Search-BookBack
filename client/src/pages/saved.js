import { useState, useEffect } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard/index";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import Button from "@material-ui/core/Button";


function Saved() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSavedBooks().then((res) => {
      console.log(res.data);
      setDisplayData(res.data);
    });
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

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
            height: 400,
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
            <br></br>
            BookBack
            </h1>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Titillium Web",
                fontSize: 50
              }}
            >
              Your Saved Books
            </h1>
            <br></br>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                style={{
                  marginRight: 50,
                  backgroundColor: "blue",
                  color: "white",
                  borderColor: "white",
                  borderStyle: "solid"
                }}
                href="/search"
              >
                Search
              </Button>

              <Button
                variant="disabled"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                Saved
              </Button>
            </Grid>
          </div>
        </Paper>

        <Grid container spacing={7}>
          {displayData.map((data) => {
            return (
              <Grid item xs={12} key={data._id}>
                <BookCard
                  title={data.title}
                  thumbnail={data.image}
                  authors={data.author}
                  description={data.description}
                  url={data.link}
                // handleSave={() => handleSavedBooks(books.id)}
                >
                  <Button
                    onClick={() => deleteBook(data._id)}
                    variant="outlined"
                    style={{
                      marginLeft: 30,
                      marginTop: 5,
                      marginBottom: 10,
                      backgroundColor: "#CE162D",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Delete
                  </Button>
                </BookCard>
              </Grid>
            );
          })}
        </Grid>

        {displayData.length ? (
          <p></p>
        ) : (
            <p
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: 20,
              }}
            >
              Your saved books will appear below!.
            </p>
          )}
      </Paper>
    </Container>
  );
}

export default Saved;
