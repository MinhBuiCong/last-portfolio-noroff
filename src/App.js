import React from "react";
import "./sass/style.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home/home";
import ProjectPage from "./components/Projects/projectPage";
import ProjectDetail from "./components/Projects/projectDetail";

function App() {
  return (
    <Router>
      <main>
        <NavBar className="navbar" expand="lg">
          <Container className="container">
            <NavBar.Brand className="nav-brand" href="/">
              Portfolio
            </NavBar.Brand>
            <Nav className="nav">
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/projects">
                Projects
              </NavLink>
            </Nav>
          </Container>
        </NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
