import ListSkills from './ListSkills';
import AddSkill from './AddSkill';
import UpdateSkill from './UpdateSkill';
import DeleteSkill from './DeleteSkill';
import ViewSkill from './ViewSkill';
import Home from './Home';
import Contact from "./ContactUs";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './cStyles/navBar.css'

// import SkillsMenu from "./skillsMenu";

function Navigation() {
    return (
        <Router>
          <div className="navBar">
            <nav>
              <ul className="pageLinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/skills">Create Strategy List</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/skills" component={ListSkills} />
              <Route path="/add-skill" component={AddSkill}/>
              <Route path="/update-skill/:id" component={UpdateSkill}/>
              <Route path="/delete-skill/:id" component={DeleteSkill}/>
              <Route path="/view-skill/:id" component={ViewSkill}/>
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
    );
  }
export default Navigation