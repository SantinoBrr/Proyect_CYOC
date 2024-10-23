import React from 'react';
import '../../assets/styles/styles.css';
import miImagen from '../../assets/images/Imagen_Rueda.png';
import '../../App.css';

function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="animated-title">About Us</h1>
            <p className="about-paragraph">
                CYOC (Create Your Own Car) is an innovative platform designed for automotive designers to 
                explore their creativity and experiment with unique vehicle model combinations. Our tool 
                allows for visualization and customization of designs, giving users the opportunity to bring 
                their ideas to life. Whether you are a seasoned designer or just starting out, CYOC offers a 
                user-friendly interface that makes the design process enjoyable and intuitive.
            </p>
            <p className="about-paragraph">
                At CYOC, you will not only be able to create your own vehicles but also share your creations with a passionate community. 
                Our forum is a space for designers to connect, collaborate, and critique each other's work. Here, you can receive valuable feedback from fellow designers,
                which can help you improve and refine your skills in automotive design. 
                We believe that sharing knowledge and experiences leads to better designs and fosters a supportive environment for creativity.
            </p>
            <p className="about-paragraph">
                The CYOC project is brought to life by a dedicated team of four developers: <span className="highlight">Santino</span>, <span className="highlight">Tobias</span>, <span className="highlight">Matias</span>, and <span className="highlight">Nahuel</span>. 
                Each of us brings unique skills and perspectives to the table. Santino and Tobias focuses on front-end development and oversees project management, Nahuel handles back-end,
                Matias specializes in user experience (UX) design.
            </p>
            <p className="about-paragraph">
                We are all passionate about technology and committed to creating a platform that inspires creativity and innovation. 
                Our goal is to continually enhance CYOC by incorporating user feedback and adding new features that will make the design experience even more enjoyable. 
                We envision a space where automotive designers can thrive, experiment, and ultimately shape the future of vehicle design.
            </p>
            <p className="about-paragraph">
                Join us on this exciting journey towards innovation and creativity. 
                Together, we can redefine the future of automotive design! We invite you to explore the platform, engage with our community, and unleash your creativity.
            </p>
            <p className="welcome-text">Welcome to CYOC!</p>
            <img src={miImagen} className="App-logo-aboutus" alt="Imagen de Rueda" />
        </div>
    );
}

export default AboutUs;
