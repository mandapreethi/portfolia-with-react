/*import React from "react";
function About(){
    return(
        <>
        <h2>EDUCATION:</h2>
        <h5>college:MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY</h5>
        <h5>schooling:TMREIS (Telangana Minority Residental Educational Instution Society) </h5>
        <h2>SKILL:</h2>
        <h5>HTML</h5>
        <h5>CSS</h5>
        <h5>JAVA SCRIPT</h5>
        <h5>PYTHON</h5>
        <h5>C++</h5>
        <h2>PROJECT:</h2>
        <h5>PARALLEL LIFE SIMULATOR: The Parallel Life Simulator is a tool that compares multiple life choices or ideas by simulating possible outcomes. It presents pros and cons for each option, helping users make informed decisions based on projected scenarios, trade-offs, and personal priorities.</h5>
        <h5>ARGO SCAN: Argo Scan is an AI-powered agricultural tool that scans plants to detect diseases early and recommends preventive measures for farmers. It also provides timely reminders for watering, fertilizing, and other essential care tasks, helping to improve crop health, reduce losses, and optimize farm productivity.</h5>
        </>
    )
}
export default About*/

import React from 'react';

function About() {
  return (
    <section className="section">
      <h2>Education</h2>
      <p><strong>College:</strong> Malla Reddy College of Engineering and Technology</p>
      <p><strong>Schooling:</strong> TMREIS (Telangana Minority Residential Educational Institution Society)</p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
      </ul>

      <h2>Projects</h2>
      <div>
        <h4>Parallel Life Simulator</h4>
        <p>
          A tool that compares multiple life decisions by simulating outcomes, helping users make informed choices.
        </p>
      </div>
      <div>
        <h4>Argo Scan</h4>
        <p>
          An AI-powered tool for farmers that detects plant diseases early and gives care reminders for better yields.
        </p>
      </div>
    </section>
  );
}

export default About;
