import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("Ktbwb5Q3f_mf7lWqz");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const now = new Date();
    const formattedTime = now.toLocaleString();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: formattedTime
    };
    
    emailjs.send('service_75yfjkm', 'template_k3vy5h7', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        alert('Thank you for your message! I will get back to you soon.');
      })
      .catch(error => {
        console.log('FAILED...', error);
        alert('Oops! There was a problem sending your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <PageHeader 
        title="Contact Me" 
        subtitle="Let's work together on your next project" 
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h2>Get In Touch</h2>
              <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope />
                  <div>
                    <h3>Email</h3>
                    <p>nakhudaarmaan66@gmail.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <FaLinkedin />
                  <div>
                    <h3>LinkedIn</h3>
                    <p>armaan-nakhuda-756492235</p>
                  </div>
                </div>
                <div className="contact-method">
                  <FaGithub />
                  <div>
                    <h3>GitHub</h3>
                    <p>Armaan4477</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
              <h2>Send Me a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn primary-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
