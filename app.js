const express = require('express');
const app = express();
const PORT = 3000;

// --- Update this version number every time you deploy ---
const VERSION = "Hello I am Tony"; 

app.get('/', (req, res) => {
  
  // We'll send back a full HTML page with inline CSS for styling
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>B A Saran - Portfolio</title>
      <style>
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(-45deg, #0a0e27, #001529, #0a0e27, #001529);
          background-size: 400% 400%;
          animation: gradient 20s ease infinite;
          min-height: 100vh;
          padding: 20px;
          color: #00e5ff;
          overflow-x: hidden;
        }
        
        body::before {
          content: '';
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 243, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(0, 126, 255, 0.15) 0%, transparent 40%);
          z-index: 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .header {
          text-align: center;
          padding: 40px 20px;
          margin-bottom: 40px;
          background: linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(0, 126, 255, 0.1));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 2px solid rgba(0, 243, 255, 0.3);
          box-shadow: 0 0 40px rgba(0, 243, 255, 0.3);
          animation: float 6s ease-in-out infinite;
        }
        
        .name {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(90deg, #00f3ff, #0099ff, #00f3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }
        
        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 20px;
        }
        
        .contact-item {
          color: #00e5ff;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.8);
          font-size: 1rem;
        }
        
        .section {
          background: linear-gradient(135deg, rgba(0, 243, 255, 0.08), rgba(0, 126, 255, 0.08));
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(0, 243, 255, 0.2);
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .section:hover {
          border-color: rgba(0, 243, 255, 0.5);
          box-shadow: 0 0 40px rgba(0, 243, 255, 0.4);
          transform: translateY(-5px);
        }
        
        .section-title {
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(90deg, #00f3ff, #007eff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(0, 243, 255, 0.3);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .education-item, .internship-item, .project-item {
          margin-bottom: 25px;
          padding: 20px;
          background: rgba(0, 243, 255, 0.05);
          border-left: 3px solid #00f3ff;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .education-item:hover, .internship-item:hover, .project-item:hover {
          background: rgba(0, 243, 255, 0.1);
          border-left-width: 5px;
          transform: translateX(10px);
        }
        
        .org-name, .project-name {
          color: #00f3ff;
          font-size: 1.3rem;
          font-weight: bold;
          text-shadow: 0 0 15px rgba(0, 243, 255, 0.8);
          margin-bottom: 8px;
        }
        
        .role, .duration {
          color: #0099ff;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .location {
          color: #00e5ff;
          font-size: 0.95rem;
          margin-bottom: 10px;
          opacity: 0.8;
        }
        
        .description {
          color: #ffffff;
          line-height: 1.6;
          margin-top: 10px;
        }
        
        .description strong {
          color: #00f3ff;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        
        .skill-category {
          padding: 15px;
          background: rgba(0, 243, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(0, 243, 255, 0.2);
        }
        
        .skill-category h3 {
          color: #00f3ff;
          font-size: 1.1rem;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        
        .skill-list {
          color: #ffffff;
          line-height: 1.8;
        }
        
        .achievement-item {
          padding: 15px;
          margin-bottom: 15px;
          background: rgba(0, 243, 255, 0.05);
          border-radius: 10px;
          border-left: 3px solid #00f3ff;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .achievement-item strong {
          color: #00f3ff;
        }
        
        @media (max-width: 768px) {
          .name {
            font-size: 2rem;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 10px;
          }
          
          .section {
            padding: 20px;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
        
        a {
          color: #00f3ff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        a:hover {
          text-shadow: 0 0 15px rgba(0, 243, 255, 1);
          transform: scale(1.05);
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="name">B A Saran</div>
          <div class="contact-info">
            <div class="contact-item">📍 Chennai, India</div>
            <div class="contact-item">📱 +91-98403-97731</div>
            <div class="contact-item">✉️ saranba23417@gmail.com</div>
          </div>
          <div class="contact-info" style="margin-top: 15px;">
            <div class="contact-item">🔗 <a href="https://github.com/Art3mis17" target="_blank">github.com/Art3mis17</a></div>
            <div class="contact-item">💼 <a href="https://linkedin.com/in/sarananbu17" target="_blank">linkedin.com/in/sarananbu17</a></div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">🎓 Education</div>
          <div class="education-item">
            <div class="org-name">Shiv Nadar University, Chennai</div>
            <div class="role">B.Tech in Computer Science and Engineering (IoT)</div>
            <div class="duration">Sep 2022 – May 2026 (Ongoing)</div>
            <div class="location">CGPA: 8.0</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">💼 Internship Experience</div>
          <div class="internship-item">
            <div class="org-name">Ford Motor Company</div>
            <div class="role">IT Intern – Sales Data Automation</div>
            <div class="duration">Jun 2025 – Jul 2025</div>
            <div class="location">Chennai, India</div>
            <div class="description">
              – Built <strong>SMAX (Sales Metrics and Analytics Xpert)</strong>, an LLM-powered chatbot using FordLLM, to convert natural language queries into SQL through metadata-driven parsing.<br>
              – Developed a scalable <strong>FastAPI backend</strong> and a <strong>React frontend</strong>, connecting to Google BigQuery pipelines for real-time enterprise sales intelligence.<br>
              – Operated within an Agile framework, collaborating with data analysts and presenting demos to leadership for iterative feedback.
            </div>
          </div>
          <div class="internship-item">
            <div class="org-name">Dip Software Solutions</div>
            <div class="role">Flutter Developer Intern</div>
            <div class="duration">Apr 2024 – Jun 2024</div>
            <div class="location">Remote</div>
            <div class="description">
              – Designed and built cross-platform UI modules using Flutter widgets and stateful components.<br>
              – Integrated <strong>REST APIs</strong> with <strong>Firebase</strong> for backend functionality and collaborated on version control with Git workflows.
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">🚀 Projects</div>
          <div class="project-item">
            <div class="project-name">Vocallama: GenAI-Powered Offline Home Automation</div>
            <div class="duration">Raspberry Pi, Flask, React, Ollama | 2025</div>
            <div class="description">
              – Built a low-latency offline voice assistant on Raspberry Pi using quantized <strong>Ollama phi-3.5 LLM</strong>.<br>
              – Architected a <strong>Flask API gateway</strong> to manage state and communicate with NodeMCU devices via a React frontend.
            </div>
          </div>
          <div class="project-item">
            <div class="project-name">Smart Surveillance with Face Recognition</div>
            <div class="duration">OpenCV, dlib, Raspberry Pi | 2024</div>
            <div class="description">
              – Developed a Raspberry Pi-based surveillance system using OpenCV and dlib for real-time facial recognition.<br>
              – Implemented instant alerts for unrecognized individuals with API hooks for home automation.
            </div>
          </div>
          <div class="project-item">
            <div class="project-name">Cloud-Based Alexa Smart Home</div>
            <div class="duration">NodeMCU, Sinric Pro, REST APIs | 2024</div>
            <div class="description">
              – Created RESTful API endpoints to connect NodeMCU devices with Amazon Alexa using Sinric Pro.<br>
              – Configured NodeMCU with Sinric Pro APIs to enable Alexa integration and control GPIO-connected appliances through REST endpoints.
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">⚡ Technical Skills</div>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Languages & Concepts</h3>
              <div class="skill-list">Python, Java, SQL, C, Embedded C, JavaScript, HTML/CSS</div>
            </div>
            <div class="skill-category">
              <h3>Core Concepts</h3>
              <div class="skill-list">DSA, OOPS, DBMS, Computer Networks, OS, Software Design, Agile/Scrum</div>
            </div>
            <div class="skill-category">
              <h3>Frameworks & Tools</h3>
              <div class="skill-list">React, Flutter, FastAPI, Flask, TensorFlow, Keras, Firebase, Git, Docker, Ollama</div>
            </div>
            <div class="skill-category">
              <h3>AI, Cloud & IoT</h3>
              <div class="skill-list">LLMs, NLP, Computer Vision, GCP, BigQuery, Raspberry Pi, NodeMCU, Arduino</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">🏆 Achievements & Certifications</div>
          <div class="achievement-item">
            <strong>Research Publication:</strong> "RFID Lock Using Arduino UNO" published in Futuristic Trends in IoT.
          </div>
          <div class="achievement-item">
            <strong>NPTEL Certified:</strong> Blockchain Applications (Jan–Apr 2025), Ethical Hacking (Jul–Oct 2024).
          </div>
          <div class="achievement-item">
            <strong>Amazon ML Summer School 2025:</strong> Selected and successfully completed.
          </div>
          <div class="achievement-item">
            <strong>Microsoft-LinkedIn Certified:</strong> Software Development and System Administration.
          </div>
          <div class="achievement-item">
            <strong>Google Certified:</strong> Cloud Engineering Certificate and Earned multiple skill badges in GCP Cloud SkillBoosts.
          </div>
          <div class="achievement-item">
            <strong>STIRS Grant:</strong> Awarded Rs. 10,000 for IoT research at Shiv Nadar University.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

// A simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});