'use client'

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';

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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Armaan'
      };
      
      const response = await emailjs.send(
        'service_75yfjkm',
        'template_k3vy5h7',
        templateParams,
        'r2NLf5cdcemGae_wi'
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      
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
      <AnimatedSection animation="fadeIn">
        <h1 className="page-title">Contact Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Have a question? Feel free to reach out to me using the form below or through my contact information.
        </p>
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row gap-12">
        <AnimatedSection animation="slideInLeft" className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary dark:bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition w-full flex justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </AnimatedSection>

        <AnimatedSection animation="slideInRight" className="lg:w-1/2 space-y-8">
          <AnimatedCard index={0} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-blue-400">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-primary dark:text-blue-400 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">nakhudaarmaan66@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary dark:text-blue-400 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Mumbai, India</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard index={1} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-blue-400">Connect With Me</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/Armaan4477" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition">
                <FaGithub className="text-gray-800 dark:text-white" size={24} />
              </a>
              <a href="https://www.linkedin.com/in/armaan-nakhuda-756492235/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition">
                <FaLinkedin className="text-blue-600" size={24} />
              </a>
              <a href="mailto:nakhudaarmaan66@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition">
                <FaEnvelope className="text-red-500" size={24} />
              </a>
            </div>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    </div>
  )
}
