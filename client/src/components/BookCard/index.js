import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function BookCard(props) {
  
  return (
    <Grid>
      <Paper elevation={24} style={{ backgroundColor: "#292929", padding: 60}}>
        <div style={{ color: "white" }} >
          <h1 style={{ fontStyle: "italic" }}>{props.title}</h1>
          <h4>By {props.authors}</h4>

          <Grid container>
            <Grid item xs={12} md={2} >
              <img src={props.thumbnail} alt="Book Cover" />
            </Grid>

            <Grid item xs={12} md={10}>
              <p style={{ fontSize: "20px" }}>{props.description}</p>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              target="_blank"
              href={props.link}
              rel="noreferrer"
              style={{
                marginTop: 20,
                backgroundColor: "#173a85",
                borderColor: "white",
                color: "white",
              }}
            >
              View
            </Button>
            {props.children}
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
}

export default BookCard;