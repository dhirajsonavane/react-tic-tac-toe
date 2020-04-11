import React from "react";
import Game from "./component/Game";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import NavBar from "./shared/NavBar";
import Footer from './shared/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CssBaseline />
      <Container maxWidth="sm" style={{minHeight: 600}}>
        <Card>
          <CardContent>
            <Game />
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
