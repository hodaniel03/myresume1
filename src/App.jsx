import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you import or have your CSS file for styling

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="living-room"
    >
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#about-me">
              <div className="dot"></div>
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#contact-info">
              <div className="dot"></div>
              <span>Contact Info</span>
            </a>
          </li>
          <li>
            <a href="#education">
              <div className="dot"></div>
              <span>Education</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <div className="dot"></div>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <div className="dot"></div>
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <div className="dot"></div>
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* About Me Section */}
      <div id="about-me" className="section">
        <h2>
          I'm <strong>Ho Daniel Khuu</strong>,
        </h2>
        <p>
          a passionate Data Science student with interests spanning analytics,
          AI, machine learning, and data visualization. Outside of tech, I'm
          also an avid fan of training, paddel, crypto, and blockchain.
        </p>
      </div>

      {/* Contact Info Section */}
      <div id="contact-info" className="section">
        <h2>Contact Info</h2>
        <p>
          <strong>Email:</strong> hodaniel@hotmail.no
        </p>
        <p>
          <strong>Phone:</strong> +47 955 55 698
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/hodanielkhuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hodanielkhuu
          </a>
        </p>
      </div>

      {/* Education Section */}
      <div id="education" className="section">
        <h2>Education</h2>
        <h3>Høyskolen Kristiania, Oslo</h3>
        <p>
          <strong>Bachelor in Data Science</strong> <br />
          August 2022 – June 2025 (Expected)
        </p>

        <h3>Vallehovin Videregående skole, Oslo</h3>
        <p>
          <strong>Studiespesialisering, Realfag</strong> <br />
          August 2019 – June 2022
        </p>
      </div>

      {/* Skills Section */}
      <div id="skills" className="section">
        <h2>Skills</h2>
        <h4>Programming Languages:</h4>
        <p>Python, SQL, HTML, CSS, JavaScript, TypeScript, C#</p>
        <h4>Technologies / Frameworks:</h4>
        <p>Django, Tableau, Git, Scrum, PostgreSQL, MySQL, AWS, Linux, .NET</p>
        <h4>Developer Tools:</h4>
        <p>IntelliJ, GitHub, Visual Studio Code, PyCharm, Rider</p>
        <h4>Other:</h4>
        <p>Microsoft Office, Google Workspace, Teams, Zoom</p>
        <h4>Languages:</h4>
        <p>
          <strong>Norsk:</strong> Muntlig, Skriftlig <br />
          <strong>Engelsk:</strong> Muntlig, Skriftlig <br />
          <strong>Vietnamesisk:</strong> Muntlig
        </p>
      </div>

      {/* Experience Section */}
      <div id="experience" className="section">
        <h2>Experience</h2>
        <div className="job">
          <h4>NorgesExpo Event AS (Oslo)</h4>
          <em>April 2022 – Present | Tilkallingshjelp</em>
          <ul>
            <li>Bidrar til eventplanlegging og gjennomføring.</li>
            <li>Distribuerer og deler ut produkter under arrangementer.</li>
            <li>Opprettholder høy standard for kundeservice og engasjement.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Silver Beats SB AS (Oslo)</h4>
          <em>January 2024 – August 2024 | Deltid</em>
          <ul>
            <li>
              Utviklet en applikasjon for å justere musikk til hjerterytme.
            </li>
            <li>Gjennomførte markeds- og brukerundersøkelser.</li>
            <li>Ga innsikt i UI/UX-design basert på forskningsresultater.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Leker Byporten AS (Oslo)</h4>
          <em>November 2022 – September 2024 | Deltid</em>
          <ul>
            <li>Yte god service og veilede kunder, inkludert kassearbeid.</li>
            <li>Brukte effektive salgsstrategier for økt salg.</li>
            <li>Opplæring av nyansatte i butikkprosedyrer og kundeservice.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Sportsklubb Speed AS (Oslo)</h4>
          <em>August 2023 – September 2024 | Deltid</em>
          <ul>
            <li>Instruerer barn og voksne i svømmeteknikker.</li>
            <li>
              Utvikler tilpassede treningsplaner basert på ferdighetsnivå.
            </li>
            <li>Motiverer deltakere med konstruktive tilbakemeldinger.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Tøyen Sportsklubb AS (Oslo)</h4>
          <em>August 2021 – August 2024 | Deltid</em>
          <ul>
            <li>
              Planlegger og leder aktiviteter for barn og voksne innen ulike
              idretter.
            </li>
            <li>
              Motiverer deltakere og gir tilbakemeldinger for
              ferdighetsutvikling.
            </li>
          </ul>
        </div>
        <div className="job">
          <h4>Nabolagshuset Kirkens Bymisjon (Oslo)</h4>
          <em>Mars 2021 – Juli 2022 | Deltid</em>
          <ul>
            <li>Utviklet og fasiliterte aktiviteter for barn og unge.</li>
            <li>
              Ledet frivillige i planlegging og gjennomføring av prosjekter.
            </li>
            <li>Fungerte som positiv rollemodell i ungdomsmiljøet.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Bydel Gamle Oslo, Oslo Kommune (Oslo)</h4>
          <em>Juli 2020 – August 2020 | Sesong</em>
          <ul>
            <li>
              Klargjorde felleslokale for oppussing ved fjerning av møbler og
              rengjøring.
            </li>
            <li>
              Samarbeidet med andre for effektiv gjennomføring av oppgaver.
            </li>
            <li>Bidro til å forbedre nabolagets fasiliteter.</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="section">
        <h2>Projects</h2>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/hodaniel03"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hodaniel03
          </a>
        </p>
        <ul>
          <li>AI-based Data Analysis Tool</li>
          <li>Real-time Data Visualization Dashboard</li>
          <li>Blockchain-based Voting System</li>
          <li>Music-to-Heartbeat Application (Silver Beats SB AS)</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default App;
