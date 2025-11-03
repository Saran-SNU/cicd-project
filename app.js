const express = require('express');
const app = express();
const PORT = 3000;

// --- Update this version number every time you deploy ---
const VERSION = "Hello I am Saran"; 

app.get('/', (req, res) => {
  
  // We'll send back a full HTML page with inline CSS for styling
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CI/CD Pipeline</title>
      <style>
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px #00f3ff, 0 0 40px #00f3ff, 0 0 60px #00f3ff, 0 0 80px #00f3ff; }
          50% { box-shadow: 0 0 30px #00f3ff, 0 0 60px #00f3ff, 0 0 90px #00f3ff, 0 0 120px #007eff; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(-45deg, #0a0e27, #001529, #0a0e27, #001529);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          overflow: hidden;
        }
        
        body::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 243, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 126, 255, 0.1) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite;
        }
        
        .container {
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(0, 126, 255, 0.1));
          backdrop-filter: blur(10px);
          padding: 3rem 4rem;
          border-radius: 20px;
          border: 2px solid rgba(0, 243, 255, 0.3);
          position: relative;
          z-index: 1;
          animation: glow 3s ease-in-out infinite;
        }
        
        h1 {
          background: linear-gradient(90deg, #00f3ff, #0099ff, #00f3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
          margin-bottom: 1rem;
          font-size: 2.5rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
        }
        
        p {
          color: #00e5ff;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.8);
          font-weight: 300;
        }
        
        .version-badge {
          background: linear-gradient(135deg, #00f3ff, #007eff);
          color: #0a0e27;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          display: inline-block;
          margin-top: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .version-badge:hover {
          transform: scale(1.1);
          box-shadow: 0 0 50px rgba(0, 243, 255, 1), inset 0 0 30px rgba(255, 255, 255, 0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>CI/CD Pipeline Succeeded!</h1>
        <p>This application was deployed automatically by Jenkins.</p>
        <div class="version-badge">
          Version: ${VERSION}
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