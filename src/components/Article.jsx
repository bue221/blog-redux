import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Typography } from "@material-ui/core";

import Spinner from "./Spinner";
import Comments from "./Comments";

const Article = ({ match }) => {
  const [data, setData] = useState([]);
  const [cargar, setCargar] = useState(true);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    traerArticulo();
    setCargar(true);
  }, []);

  const traerArticulo = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
      );
      const res2 = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`
      );

      setData(res.data);
      setComment(res2.data);
      setCargar(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(comment);
  return (
    <div
      style={{
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cargar ? (
        <Spinner color="blue" />
      ) : (
        <>
          <Typography variant="h1" component="h2">
            Articulo | {match.params.id}
          </Typography>
          <hr />
          <Typography
            variant="h5"
            component="h2"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            {data.title}
          </Typography>
          <div style={{ maxWidth: "100vh", marginTop: "5rem" }}>
            <Typography
              variant="p"
              component="h3"
              style={{ textAlign: "center" }}
            >
              {data.body}
            </Typography>
            <Comments data={comment} />
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
