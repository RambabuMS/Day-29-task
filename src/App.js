import { useState } from "react";
import "./App.css";
import { Carslist } from "./Carslist";
import { List } from "./List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Addcar } from "./Addcar";
import { Editcar } from "./Editcar";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Cardetails } from "./Cardetails";
import { Homepage } from "./Homepage";
import { NotFound } from "./NotFound";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
// import { TemporaryDrawer } from "./TemporaryDrawer";

export default function App() {
  const [clist, setClist] = useState(Carslist);

  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/cars/add")}>
                Add Car
              </Button>
              <Button color="inherit" onClick={() => history.push("/cars")}>
                Cars
              </Button>
              {/* <TemporaryDrawer /> */}
              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/cars/add">
              <Addcar clist={clist} setClist={setClist} />
            </Route>
            <Route path="/cars/edit/:id">
              <Editcar clist={clist} setClist={setClist} />
            </Route>
            <Route path="/cars/:id">
              <Cardetails clist={clist} />
            </Route>
            <Route path="/cars">
              <List clist={clist} setClist={setClist} />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
