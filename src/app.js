import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ background: '#003366', color: '#fff', padding: '1.5rem 0', textAlign: 'center' }}>
        <h1>The Eventus Consulting Group</h1>
        <nav>
          <a href="#about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Services</a>
          <a href="#contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>
      <main style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <section id="about" style={{ marginBottom: '2rem' }}>
          <h2>About Us</h2>
          <p>Eventus Consulting Group is dedicated to providing expert business solutions and strategic guidance to help your organization thrive in a competitive market.</p>
        </section>
        <section id="services" style={{ marginBottom: '2rem' }}>
          <h2>Our Services</h2>
          <ul>
            <li>Business Consulting</li>
            <li>Market Analysis</li>
            <li>Strategy Development</li>
            <li>Training & Workshops</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@eventusconsulting.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </section>
      </main>
      <footer style={{ background: '#003366', color: '#fff', textAlign: 'center', padding: '1rem 0', position: 'relative', bottom: 0, width: '100%' }}>
        &copy; {new Date().getFullYear()} The Eventus Consulting Group. All rights reserved.
      </footer>
    </div>
  );
}

export default App;