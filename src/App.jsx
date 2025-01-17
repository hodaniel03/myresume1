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
            <a href="#projects">
              <div className="dot"></div>
              <span>Projects</span>
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
            <a href="#contact-info">
              <div className="dot"></div>
              <span>Contact Info</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* About Me Section */}
      <div id="about-me" className="section">
        <h2>
          I'm <strong>Ho Daniel Khuu</strong>,
        </h2>
          <p>a passionate Data Science student</p>
          <p>analytics. data visualization.</p>
          <p>AI. machine learning. deep learning. </p>
          <p>training. paddel.</p>
          <p>crypto. blockchain.</p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="section">
        <h2>Most Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <a href="https://github.com/kristiania-kws2100-2024/kws2100-exam-hodaniel03" target="_blank" rel="noopener noreferrer">
              <img src="map.png" alt="Sustainable living and Environment in Norway" className="project-image" />
            </a>
            <p>A visualization map over sustainable living and environment in Norway</p>
          </div>
          <div className="project-card">
            <a href="./src/assets/predictive.pdf" target="_blank" rel="noopener noreferrer">
              <img src="airquality.png" alt="Predictive Analytics" className="project-image" />
            </a>
            <p><em>Air Quality Analysis for Italy between the year March 2004 - Jan 2005.</em></p>
            <p>This was part of a project in the course "Data Science" at Kristiania University College. The project was done the course Predictive Analytics.</p>
          </div>
          <div className="project-card">
            <a href="https://silverbeats.biz" target="_blank" rel="noopener noreferrer">
              <img src="./project4.png" alt="Music-to-Heartbeat Application" className="project-image" />
            </a>
            <p>Music-to-Heartbeat Application (Silver Beats SB AS)</p>
          </div>
        </div>
      </div>


      {/* Skills Section */}
      <div id="skills" className="section">
        <h2>Skills</h2>
        <h4>Programming Languages:</h4>
        <p>Python, SQL, HTML, CSS, JavaScript, TypeScript, C#</p>
        <h4>Technologies / Frameworks:</h4>
        <p>Django, Tableau, Git, Scrum, PostgreSQL, MySQL, AWS, Linux, .NET</p>
        <h4>Developer Tools:</h4>
        <p>IntelliJ, GitHub, Visual Studio Code, PyCharm, Rider, Figma, Power Apps</p>
        <h4>Other:</h4>
        <p>Microsoft Office, Google Workspace, Teams, Zoom</p>
      </div>

      {/* Experience Section */}
      <div id="experience" className="section">
        <h2>Experience</h2>
        <div className="job-experience">
        <div className="job">
          <h4>Norske Medisinaldepot AS - Vitusapotek (Oslo)</h4>
          <em>January 2025 – Present | App Developer</em>
          <ul>
            <li>Developing an activity app for one of Norway's largest pharmacy chains with over 3,000 employees.</li>
            <li>Building app functionality using Power Apps.</li>
            <li>Designing interactive graphics and backend architecture.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Solana Blockchain (Oslo)</h4>
          <em>November 2024 – Present | Investor</em>
          <ul>
            <li>Focused on meme coins, market trends, and blockchain technologies.</li>
            <li>Gained valuable insights into market dynamics and decentralized finance (DeFi).</li>
            <li>Explored innovative AI projects and sought opportunities in the growing AI landscape.</li>
          </ul>
        </div>

        <div className="job">
          <h4>NorgesExpo Event AS (Oslo)</h4>
          <em>April 2022 – Present | Event Assistant</em>
          <ul>
            <li>Contributed to event planning and execution.</li>
            <li>Distributed and handed out products during events.</li>
            <li>Maintained high standards of customer service and engagement.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Silver Beats SB AS (Oslo)</h4>
          <em>January 2024 – August 2024 | UX-Designer</em>
          <ul>
            <li>Developed an application to adjust music tempo to heart rhythms.</li>
            <li>Conducted market and user research for targeted audiences.</li>
            <li>Provided insights on UI/UX design based on research findings.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Leker Byporten AS (Oslo)</h4>
          <em>November 2022 – September 2024 | Associate</em>
          <ul>
            <li>Delivered excellent customer service, including cashier work and restocking.</li>
            <li>Implemented effective sales strategies to enhance customer satisfaction and revenue.</li>
            <li>Trained new hires in store procedures and customer service practices.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Sportsklubb Speed AS (Oslo)</h4>
          <em>August 2023 – September 2024 | Swimming Instructor</em>
          <ul>
            <li>Instructed children and adults in swimming techniques, from basics to advanced levels.</li>
            <li>Developed and implemented tailored training plans based on skill levels.</li>
            <li>Motivated participants with constructive feedback for skill improvement.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Tøyen Sportsklubb AS (Oslo)</h4>
          <em>August 2021 – August 2024 | Activity Leader</em>
          <ul>
            <li>Planned and led activities for children and adults across various sports, including football, basketball, and more.</li>
            <li>Motivated participants and provided feedback for skill development.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Nabolagshuset Kirkens Bymisjon (Oslo)</h4>
          <em>March 2021 – July 2022 | Activity Leader</em>
          <ul>
            <li>Developed and facilitated activities for children and youth.</li>
            <li>Led volunteers and young staff in planning and executing projects.</li>
            <li>Served as a positive role model in the youth community.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Bydel Gamle Oslo, Oslo Kommune (Oslo)</h4>
          <em>July 2020 – August 2020 | Seasonal</em>
          <ul>
            <li>Prepared communal spaces for renovation by removing furniture and cleaning.</li>
            <li>Collaborated with colleagues to ensure efficient task execution.</li>
            <li>Contributed to improving neighborhood facilities.</li>
          </ul>
        </div>
      </div>
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

    </motion.div>
  );
};

export default App;
