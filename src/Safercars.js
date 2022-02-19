import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useHistory } from "react-router-dom";

export function Safercars(
  { name, poster, brand, rating, info, deletebutton, editbutton, id },
  index
) {
  const [dislike, setdislike] = useState(0);
  const [like, setlike] = useState(0);
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <div>
      <Card className="car-container">
        <CardContent>
          <img src={poster} id="res" className="poster" alt="pics" />
          <h2>
            {" "}
            {brand} {name}
          </h2>
          <div style={{ width: "350px" }}>
            <IconButton
              color="success"
              aria-label="toggle-summary"
              onClick={() => setShow((s) => !s)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {show ? (
              <div>
                <b>Info: {info}</b>
              </div>
            ) : (
              ""
            )}
            <IconButton
              color="primary"
              variant="outlined"
              onClick={() => history.push(`/cars/${id}`)}
            >
              <InfoIcon />
            </IconButton>
          </div>
          <p>
            <b>GNCAP Rating :</b> {rating}⭐
          </p>
        </CardContent>
        <div className="button">
          <IconButton
            color="primary"
            aria-label="like-button"
            onClick={() => setlike(like + 1)}
          >
            <Badge badgeContent={like} color="primary">
              <ThumbUpIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="error"
            aria-label="dislike-button"
            onClick={() => setdislike(dislike + 1)}
          >
            <Badge badgeContent={dislike} color="error">
              <ThumbDownAltIcon />
            </Badge>
          </IconButton>
          {deletebutton}
          {editbutton}
        </div>
      </Card>
    </div>
  );
}
