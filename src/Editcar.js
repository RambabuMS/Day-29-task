import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";

export function Editcar({ clist, setClist }) {
  const { id } = useParams();
  console.log(id, clist[id]);
  const car = clist[id];

  const [name, setName] = useState(car.name);
  const [post, setPost] = useState(car.poster);
  const [brand, setBrand] = useState(car.brand);
  const [rating, setRating] = useState(car.rating);
  const [info, setInfo] = useState(car.info);

  const history = useHistory();

  return (
    <div className="input">
      <h1>Here you can add your favourite Cars</h1>
      <TextField
        className="text"
        label="Car Name"
        variant="outlined"
        margin="dense"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        className="text"
        label="Poster"
        variant="outlined"
        margin="dense"
        value={post}
        onChange={(event) => setPost(event.target.value)}
      />
      <TextField
        className="text"
        label="Brand"
        variant="outlined"
        margin="dense"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />
      <TextField
        className="text"
        label="Rating"
        variant="outlined"
        margin="dense"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        className="text"
        label="Info"
        variant="outlined"
        margin="dense"
        value={info}
        onChange={(event) => setInfo(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          const updatedCar = {
            name: name,
            poster: post,
            brand: brand,
            rating: rating,
            info: info,
          };
          console.log(updatedCar);
          const copycarlist = [...clist];
          copycarlist[id] = updatedCar;
          setClist(copycarlist);
          history.push("/cars");
        }}
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
