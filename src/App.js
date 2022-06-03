import React from "react";
import "./App.scss";
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
import Contact from "./components/Contact/contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar className="navbar" expand="lg">
          <Container className="container">
            <NavBar.Brand href="/">Portfolio</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="nav">
                <NavLink className="link" to="/">
                  Home
                </NavLink>
                <NavLink className="link" to="/projects">
                  Projects
                </NavLink>
                <NavLink className="link" to="/contact">
                  Contact
                </NavLink>
              </Nav>
            </NavBar.Collapse>
          </Container>
        </NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
