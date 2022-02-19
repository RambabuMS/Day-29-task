import { Safercars } from "./Safercars";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export function List({ clist, setClist }) {
  const history = useHistory();

  return (
    <div className="list">
      {clist.map((user, index) => (
        <Safercars
          key={index}
          //{...user}
          id={index}
          name={user.name}
          poster={user.poster}
          rating={user.rating}
          brand={user.brand}
          info={user.info}
          deletebutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              color="error"
              onClick={() => {
                const copylist = [...clist];
                copylist.splice(index, 1);
                setClist(copylist);
              }}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              color="secondary"
              onClick={() => history.push(`/cars/edit/${index}`)}
              aria-label="edit"
              size="medium"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
