import React from "react";
import { colors, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

function About() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="div" className={classes.Typography}>
          <h1>About</h1>
          <a className={classes.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eveniet non aut laborum, sed, debitis nihil omnis facere quia
            excepturi consequuntur officiis eligendi ab. Placeat sequi dolorum
            est molestias cumque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore numquam quisquam, nesciunt dolores
            voluptatem aliquam officia ad molestias porro! Quibusdam eaque quos
            autem nesciunt. Reiciendis molestias mollitia quibusdam accusamus
            hic? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corporis exercitationem mollitia repellat voluptatem? Esse
            aspernatur ipsa sit quidem autem? Aspernatur natus est veritatis ab,
            molestiae blanditiis culpa totam at libero.
          </a>
        </Typography>
      </Container>
      <Underline />
    </div>
  );
}

const Underline = () => {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <hr
        style={{
          margin: "auto",
          height: "2px",
          border: "none",
          background: "#374045",
          width: "45%",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <hr
          style={{
            margin: "auto",
            height: "2px",
            border: "none",
            background: "#374045",
            width: "30%",
          }}
        />
      </div>
    </div>
  );
};

export default About;
