function Home() { 
  return (
    <div className="home">
      <div className="card profile-card">
        <img src="/b21nate.jpg" alt="Profile" className="profile-img" />
        <h2>Profile</h2>
        <p>Experienced UX Designer specializing in user research,
           interaction design, and prototyping. Committed to crafting 
           intuitive and visually compelling digital experiences that captivate users.
            A problem-solver who combines creativity with data-driven insights to drive innovation.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Education</h3>
          <p>University of Cape Town – BSc Computer Science</p>
        </div>

        <div className="card">
          <h3>Skills</h3>
          <ul>
            <li>React.js & JavaScript</li>
            <li>Database Management (SQL, NoSQL)</li>
            <li>Networking & Security</li>
          </ul>
        </div>

        <div className="card achievements-card">
          <h3>Achievements</h3>
          <ul>
            <li>🏆 Dean’s List – 2024</li>
            <li>🥇 Winner – Hackathon UCT 2023</li>
            <li>💻 Built AI-powered chatbot project</li>
            <li>🌐 Contributed to open-source React library</li>
          </ul>
        </div>

        {/* New Cards */}
        <div className="card">
          <h3>Work Experience</h3>
          <ul>
            <li>Intern – Software Developer at Huawei (2024)</li>
            <li>Freelance Web Developer – React & Node.js projects</li>
          </ul>
        </div>

        <div className="card">
          <h3>Hobbies</h3>
          <ul>
            <li>⚽ Playing Football</li>
            <li>🎵 Listening to Music</li>
            <li>📖 Reading Tech Blogs</li>
          </ul>
        </div>

        <div className="card">
          <h3>Languages</h3>
          <ul>
            <li>English – Fluent</li>
            <li>Sesotho – Native</li>
            <li>Spanish – Beginner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
