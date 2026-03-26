import React from "react";
import "../style.css";

const Tech = () => {
  return (
    <section className="tech-section">
      <div className="container">
        <div className="heading-container">
          <h2>Tech</h2>
        </div>
        <div className="tech-text">
          <p>
            <strong>Security & Cloud (ongoing studies)</strong>
          </p>
          <ul>
            <li>Risk analysis & information classification</li>
            <li>Security principles and secure system design</li>
            <li>Incident response and resilience concepts (RTO/RPO)</li>
            <li>Fundamentals of cloud security and shared responsibility</li>
            <li>Governance and security frameworks</li>
          </ul>
          <p>
            <strong>Frontend</strong>
            HTML5, CSS3, SASS, JavaScript (ES6+), React, Axios, Fetch, WordPress
            (incl. Elementor), Figma, Responsive design
          </p>
          <p>
            <strong>Backend</strong>
            Node.js, Express, PHP, JWT (Authentication), REST API handling
          </p>
          <p>
            <strong>Databases</strong>
            MySQL, phpMyAdmin, Relational database design, CRUD operations
          </p>
          <p>
            <strong>Tools & Deployment</strong>
            Git, GitHub, Docker, Netlify, Vercel, Trello, GitHub Projects
          </p>
          <p>
            <strong>Other</strong>
            UX design with accessibility focus, Agile workflows, Team
            collaboration using branches & pull requests
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
