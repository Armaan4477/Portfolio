'use client'

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

emailjs.init("r2NLf5cdcemGae_wi");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Armaan' // Add recipient name (you)
      };
      
      // Send email using EmailJS with proper error handling
      const response = await emailjs.send(
        'service_75yfjkm', // Your service ID
        'template_k3vy5h7', // Your template ID
        templateParams,
        'r2NLf5cdcemGae_wi' // Use your actual public key here instead of the placeholder
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage({
        type: 'error',
        text: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        Have a question? Feel free to reach out to me using the form below or through my contact information.
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition w-full flex justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">nakhudaarmaan66@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Connect With Me</h2>
            <div className="flex space-x-4">
            <a href="https://github.com/Armaan4477" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaGithub className="text-gray-800" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/armaan-nakhuda-756492235/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaLinkedin className="text-blue-600" size={24} />
          </a>
          <a href="mailto:nakhudaarmaan66@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-red-500" size={24} />
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
