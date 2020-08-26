import React from "react";
import Introduce from "./components/introduces/introduce";
import Social from "./components/socials/social";
import Skills from "./components/skills/skills";
import ComputerSkill from "./components/computerSkill/ComputerSkill";
import Education from "./components/education/education";
import WorkExperinces from "./components/work_experience/work_experience";
import Interests from "./components/interest/interests";
function App() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div className="App">
        <Introduce />
        <Social />
        <Skills />
        <ComputerSkill />
        <Education />
        <WorkExperinces />
        <Interests />
      </div>
    </div>
  );
}

export default App;
