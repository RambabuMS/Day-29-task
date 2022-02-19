import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Addcar({ clist, setClist }) {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [info, setInfo] = useState("");

  const history = useHistory();

  return (
    <div className="input">
      <h1>Here you can add your favourite Cars</h1>
      <TextField
        className="text"
        label="Car Name"
        variant="outlined"
        margin="dense"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        className="text"
        label="Poster"
        variant="outlined"
        margin="dense"
        onChange={(event) => setPost(event.target.value)}
      />
      <TextField
        className="text"
        label="Brand"
        variant="outlined"
        margin="dense"
        onChange={(event) => setBrand(event.target.value)}
      />
      <TextField
        className="text"
        label="Rating"
        variant="outlined"
        margin="dense"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        className="text"
        label="Info"
        variant="outlined"
        margin="dense"
        onChange={(event) => setInfo(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          const newCar = {
            name: name,
            poster: post,
            brand: brand,
            rating: rating,
            info: info,
          };
          console.log(newCar);
          setClist([...clist, newCar]);
          history.push("/cars");
        }}
      >
        Add Car
      </Button>
    </div>
  );
}
