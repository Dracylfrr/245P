import "./SidebarAndMain.css";

function SidebarAndMain() {
  return (
    <div className="layout">
      {/* Sidebar Navigation */}
      <div className="sidebar-bg"></div>
      <div className="sidebar">
        <a href="#profile">My Profile</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1>Arvind Kumar — MSWE Student at UC Irvine</h1>
        <p>
          This layout was built using
          components from my GUI Programming coursework. This page reflects my
          academic background, interests, and ongoing projects as a graduate
          student at the University of California, Irvine.
        </p>

        <h2 id="profile">Profile</h2>
        <p>
          I’m a Master of Software Engineering (MSWE) student at UC Irvine with
          a strong interest in full-stack development, human-computer
          interaction, and applied software engineering. I
          enjoy building clean, user-friendly interfaces and backend systems that
          solve real problems.
        </p>

        <h2 id="education">Education</h2>
        <ul>
          <li>
            Master's in Software Engineering - University of California, Irvine 
            <br />
            <span style={{ color: "#666" }}>2025–2026</span>
          </li>
          <li>
            Bachelor's of Science in Computer Science & Engineering - University of California, Merced  
            <br />
            <span style={{ color: "#666" }}>Graduated 2025</span>
          </li>
        </ul>

        <h2 id="projects">Projects</h2>
        <ul>
          <li>React Calculator App — simple UI built for class.</li>
          <li>
            Flask Cloud Storage Sync — OAuth + Box + OneDrive integration using
            dynamically generated rclone configs.
          </li>
          <li>Pokémon Team Builder Web App — for team planning & stats.</li>
          <li>
            Team Collaboration Web App — tasks, chat, file sharing, and calendar
            integration.
          </li>
        </ul>

        <h2 id="skills">Skills</h2>
        <ul>
          <li>React, JavaScript, HTML/CSS</li>
          <li>Python (Flask), SQLAlchemy, REST APIs</li>
          <li>C++, Java, Data Structures & Algorithms</li>
          <li>Cloud APIs, OAuth2, Rclone</li>
        </ul>

        <h2 id="contact">Contact</h2>
        <p>
          Feel free to reach out to me regarding academic collaboration,
          software engineering projects, or opportunities in full-stack
          development.
        </p>
        <p>Email: arvindk3@uci.edu</p>
      </div>
    </div>
  );
}

export default SidebarAndMain;
