import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";

export function Cardetails({ clist }) {
  const { id } = useParams();
  console.log(id, clist);
  const car = clist[id];
  const history = useHistory();
  return (
    <div>
      <h1>Car launch details</h1>
      <iframe
        width="100%"
        height="700"
        src={car.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="car-container">
        <h2>{car.name}</h2>
        <p>
          <b>GNCAP Rating :</b> {car.rating}
        </p>
        <p>
          <b>Info:</b>
          {car.info}
        </p>
        <Button
          onClick={() => {
            history.goBack();
          }}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
