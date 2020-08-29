import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThere: {
    fontStyle: "oblique",
    color: "red",
  },
  buttonStyles: {
    color: "green",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.helloThere} variant="h3">
        Hello there
      </Typography>
      <Button
        className={classes.buttonStyles}
        variant="outlined"
        color="secondary"
      >
        This is our Button
      </Button>
    </div>
  );
}

export default App;
