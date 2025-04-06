import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar2">
    Geometric shapes & its Applications
    <div className="logo"></div>
  </div>
);

const SmallNavbar = () => {
  const pages = [
    { name: 'Introduction', path: '/' },
    { name: 'Applications', path: '/Applications' },
    { name: 'Register', path: '/Register' },
    { name: 'Course Page', path: '/CoursePage' },
    { name: 'Assessment', path: '/Assessment' },
    { name: 'FAQs', path: '/Faqs' },
    { name: 'Feedback and Contact Us', path: '/Contact' },
    { name: 'About us', path: '/About' }
  ];

  return (
    <div className="smallnavbar">
      {pages.map((page, idx) => (
        <div className="h" key={idx}>
          <Link className="m" to={page.path}>{page.name}</Link>
        </div>
      ))}
    </div>
  );
};

const QuoteCard = ({ text, author, className }) => (
  <div className={className}>
    <div dangerouslySetInnerHTML={{ __html: text }} />
    <div className="author"><i>~ {author}</i></div>
  </div>
);

const QuoteSection = () => (
  <div className="quotes">
    <div className="q1">
      <QuoteCard
        className="quote1"
        text={`"Circles teach us that every end is a beginning,<br/>And symmetry is the heart of creation."`}
        author="Henri Poincare"
      />
      <QuoteCard
        className="quote2"
        text={`"Through geometry, we measure the unseen,<br/>Turning shapes into ideas and dreams."`}
        author="Andre Maurois"
      />
    </div>
    <div className="q2">
      <QuoteCard
        className="quote3"
        text={`"Angles and curves whisper secrets of design,<br/>Where math meets art in a dance divine."`}
        author="Arthur Honegger"
      />
      <QuoteCard
        className="quote4"
        text={`"Geometry reveals the patterns of the universe,<br/>Connecting points, lines, and infinite possibilities."`}
        author="David Hilbert"
      />
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="first">
      Sign up for our website to know more about geometric shapes and solve daily quizzes
      <input placeholder="Email address" className="input" />
      <Link to="/Register"><button className="reg">SUBSCRIBE</button></Link>
    </div>
    <br /><hr /><br />
    Dive into the fascinating realm of geometric shapes and their applications in our daily lives.
    From architecture to art, mathematics to technology, explore how these shapes form the foundation of countless innovations and designs.
    Let's unlock the beauty and utility of geometry together!
    <br /><br /><hr />
    <div className="lastline">
      © 2020 Copyright: geometricshapes.com
    </div>
  </div>
);

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: "fixed",
        top: "30px",
        right: "180px",
        padding: "10px",
        cursor: "pointer",
        color: "white",
        borderRadius: "19px",
        borderColor: "white",
        backgroundColor: "#008080"
      }}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

const HomePage = () => (
  <>
    <Navbar />
    <SmallNavbar />
    <div className="msg">Welcome to the World of Geometric Shapes! 🎉</div>
    <div className="main">
      
      <QuoteSection />
      <div className="intro"></div>
    </div>
    <Footer />
    <DarkModeToggle />
  </>
);

export default HomePage;
