import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faHome, faInfoCircle, faProjectDiagram, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logo from './profile_pic.jpg'; // Ensure the logo is in the src folder
import resume from './resume.pdf'; // Ensure the resume is in the src folder
import './App.css'; // Define the animation in this CSS file

function App() {
  const form = useRef();
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [portfolioClicked, setPortfolioClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [buttonColors, setButtonColors] = useState(Array(6).fill('#007bff'));
  const [activeSection, setActiveSection] = useState('home'); // Track active section for styling

  // State for contact form
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_4tvs20r', 'template_xt1q55l', form.current, {
          publicKey: 'K5EPThDbiM-c-PNdO',
        })
        .then(
          () => {
            window.alert('Your message has been sent successfully!');
            console.log('SUCCESS!');
          },
          (error) => {
            window.alert('An error occurred. Please try again later.');
            console.log('FAILED...', error.text);
          },
        );
    };
  
   
  // Handle click event for "Portfolio" text
  const handlePortfolioClick = () => {
    setPortfolioClicked(true);
    setTimeout(() => {
      setPortfolioClicked(false);
    }, 1000);
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleButtonClick = (index) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === '#007bff' ? '#28a745' : '#007bff';
    setButtonColors(newColors);
  };

  const handleSetActive = (section) => setActiveSection(section);

  // Sample images for the slider
  const images = [
    `${process.env.PUBLIC_URL}/assets/image1.png`,
    `${process.env.PUBLIC_URL}/assets/image2.png`,
    `${process.env.PUBLIC_URL}/assets/image3.png`,
    `${process.env.PUBLIC_URL}/assets/image4.png`,
    `${process.env.PUBLIC_URL}/assets/image5.png`,
    `${process.env.PUBLIC_URL}/assets/image6.png`
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
      {/* Navigation Menu */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: darkMode ? '#000000' : '#ffffff', color: darkMode ? '#fff' : '#000', zIndex: 100, padding: '10px' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', margin: 0 }}>
          <li
            className={portfolioClicked ? 'animate-portfolio' : ''}
            onClick={handlePortfolioClick}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Portfolio
          </li>
          {['home', 'about', 'project', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                onClick={() => handleSetActive(section)}
                style={{
                  color: activeSection === section ? '#0d6efd' : darkMode ? '#fff' : '#000',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: '10px',
                  borderBottom: activeSection === section ? '2px solid #0d6efd' : '2px solid transparent',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#0d6efd';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = activeSection === section ? '#0d6efd' : darkMode ? '#fff' : '#000';
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: darkMode ? '#fff' : '#000', cursor: 'pointer', marginLeft: '20px' }}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
          </button>
        </ul>
      </nav>

      {/* Home Section with Background Image */}
      <div id="home" style={{ height: '100vh', paddingTop: '70px', backgroundImage: `url(${process.env.PUBLIC_URL}/assets/homebg.jpeg)`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, textAlign: 'center', marginBottom: 100 }}>
          <img src={logo} alt="Logo" style={{ width: '300px', height: '300px',cursor: 'pointer', }} />
        </div>
        <div style={{ flex: 2 }}>
          <h1>Hello, I'm [Tanuja Randave],</h1>
          <h4>
            A passionate Java and Web Developer with a strong foundation in modern web technologies and back-end development.
            I specialize in building dynamic, user-friendly websites and applications that not only meet client requirements but
            also provide a seamless experience. With expertise in Java, React, and full-stack development, I enjoy solving complex
            problems with clean, maintainable code. My portfolio showcases a variety of projects ranging from responsive web designs
            to scalable back-end systems.
          </h4>
          <p>Specializing in modern web technologies and Java-based back-end development. Experienced in building full-stack applications with clean, maintainable code.</p>

 <a href={resume} download="My_Resume.pdf">
  <button
    style={{
      padding: '10px 20px',
      backgroundColor: '#0056b3',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'background-color 0.3s ease', // Smooth transition
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#007bff')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#0056b3')}
  >
    Download My Resume
  </button>
</a>

        </div>
      </div>

    {/* About Section */}
    <div
        id="about"
        style={{
          height: '100vh',
          paddingTop: '10px',
          backgroundColor: darkMode ? '#2c2c2c' : '#ffffff', // White background in light mode
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          <h1
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              color: darkMode ? '#ffffff' : '#000000',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '36px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Skills
          </h1>

          {['Java', 'React', 'CSS', 'JavaScript', 'MangoDB', 'SQL'].map((buttonLabel, index) => {
            return (
              <div
                key={index}
                onClick={() => handleButtonClick(index)} // Handle button click
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: darkMode ? '#000000' : '#000000', // Default button color is black
                  color: '#ffffff',
                  cursor: 'pointer',
                  border: '2px solid transparent', // Transparent border for initial state
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                }}
                onMouseOver={(e) => {
                  e.target.style.border = '2px solid #0d6efd'; // Change border color on hover
                  e.target.style.boxShadow = '0 0 15px rgba(13, 110, 253, 0.5)'; // Blue glow on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.border = '2px solid transparent'; // Reset border on hover out
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; // Reset shadow
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                >
                  {buttonLabel === 'Command Line' ? 'macOS' : 'IDE'}
                </span>
                <span style={{ fontSize: '20px', color: '#ffffff' }}>{buttonLabel}</span> {/* Button text */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Section with Image Slider */}
      <div id="project" style={{ height: '100vh', backgroundColor: darkMode ? '#2c2c2c' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <h1 style={{ textAlign: 'center', color: darkMode ? '#ffffff' : '#000000' }}>My Projects</h1>
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project ${index + 1}`} style={{
                  width: '100%', cursor: 'pointer', height: 'auto', borderRadius: '10px',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                }}
                  onMouseOver={(e) => {
                    e.target.style.filter = 'brightness(1)';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.filter = 'brightness(0.8)';
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
   {/* Contact Section */}
   <div id="contact" style={{ height: '100vh', paddingTop: '60px', backgroundColor: darkMode ? '#333' : '#ffffff' }}>
        <center><h1>Contact</h1></center>

        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }} >
       
           <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required="true"
            style={{ padding: '10px', width: '600px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
       
      <input
            type="email"
            name="from_email"
            required="true"
            placeholder="Your Email"
           style={{ padding: '10px', width: '600px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        
      <textarea
            name="message"
            placeholder="Your Message"
            required="true"
          style={{ padding: '10px', width: '600px', height: '100px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
         
         <button type="submit"value="Send"
            style={{
              width: '600px',
              padding: '10px 20px',
              backgroundColor: '#0056b3',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#007bff')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0056b3')}
          >
            Send
          </button>

    
    </form>

     
      </div>

{/* Footer */}
<footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px', position: 'relative', bottom: 0, width: '100%' }}>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
    <a href="https://www.linkedin.com/in/tanuja-randave-b691292a3/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://github.com/tanurandave/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
    <Link to="home" smooth={true} duration={500} className="footer-link">
      <FontAwesomeIcon icon={faHome} /> Home
    </Link>
    <Link to="about" smooth={true} duration={500} className="footer-link">
      <FontAwesomeIcon icon={faInfoCircle} /> About
    </Link>
    <Link to="project" smooth={true} duration={500} className="footer-link">
      <FontAwesomeIcon icon={faProjectDiagram} /> Project
    </Link>
    <Link to="contact" smooth={true} duration={500} className="footer-link">
      <FontAwesomeIcon icon={faEnvelope} /> Contact
    </Link>
  </div>
  <p style={{ margin: '5px 0' }}>Email: randavetanuja@gmail.com</p> 
  <p>© 2024 My Portfolio Website. All Rights Reserved.</p>
</footer>


    </div>
  );
}
export default App;