import React from "react";
import { Link } from 'react-router-dom'

import Card from "../components/share/Card"

function About() {
  return <Card>

    <div className="about">
        <h1>About this Project</h1>
        <p>This is web app to review the service our proudt or service</p>
        <p>Year: 2022</p>
        <p >
          <Link style={{color: 'white', listStyle: 'none'}} to='/'>Back To Home</Link>
        </p>
    </div>

  </Card>;
}

export default About;
