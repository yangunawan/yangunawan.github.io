import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import lecturerphoto from "../assets/images/drmatthews.jpeg"
import logo from "../assets/images/usyd_logo.png"
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='container pt-3 pb-3'>
            <h1 style={{ color: '#e54726' }}>Contact</h1>
            <p title='contact-paragraph'>Welcome to our Contact page! We're thrilled that you're interested in getting in touch with us. Whether you have inquiries, suggestions, or simply want to connect, this is the place to do so! Your communication is important to us, and we're here to assist you. You can reach out using the provided contact details or the form below, and we'll promptly respond to your message. Thank you for reaching out!</p>

            <hr
                style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                }}
            />

            <section className="lecturer">
                <h4>Dr.Slade Matthews</h4>
                <img src={lecturerphoto} alt="photo"/>

                <p>
                    Senior Lecturer
                    <br></br>
                    Sydney Pharmacy School
                </p>

                <p>If you have any questions regarding equations or pharmacokinetics, you can reach out to Dr. Slade Matthews through the following contact methods:</p>
                <ul>
                    <li>Email: <a href="mailto:slade.matthews@sydney.edu.au">slade.matthews@sydney.edu.au</a></li>
                    <li>Address: The University of Sydney, A15, Science Rd, Camperdown NSW 2050</li>
                    <li>Github: <a href="https://github.com/sladem-tox?tab=repositories">https://github.com/sladem-tox</a></li>
                </ul>
            </section>

            <hr
                style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                }}
            />

            <section className="team">
                <h4>The Website Development Team</h4>
                <img src={logo} alt="USYD LOGO" width="20%"/>
                <p>If you have any questions or feedback for our development team, you can reach out to the School of Computer Science with the details below:</p>
                <ul>
                    <li>Email: <a href="mailto:cs.reception@sydney.edu.au">cs.reception@sydney.edu.au</a></li>
                    <li>Phone: <a href="tel:+61 2 9351 2222">+61 2 9351 2222</a></li>
                    <li>Address: Building J12/1 Cleveland St, Camperdown NSW 2006</li>
                </ul>
            </section>

        </div>
    )
}

export default Contact