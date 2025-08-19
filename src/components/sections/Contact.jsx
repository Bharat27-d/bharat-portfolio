import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../ui/Button.jsx';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const formRef = useRef();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const result = await emailjs.sendForm(
        'service_ewk7b4d', 
        'template_b9uknl1',
        formRef.current,
        'yQ-tQM07Gi7DWxUZr'
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
      reset(); // Clear form
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again or contact me directly via email.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:min-h-[500px]">
          {/* Contact Information Column - Now vertically centered */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="bg-dark-light/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-primary">Contact Information : spandannigga </h3>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="text-primary text-2xl mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-300">bharatmain27@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-primary text-2xl mr-4">
                    <FaDiscord />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Discord</h4>
                    <p className="text-gray-300">bharat27</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                  <div className="flex space-x-6">
                    <motion.a
                      href="https://github.com/Bharat27-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: '#0ea5e9' }}
                      className="text-gray-300 text-2xl"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: '#0ea5e9' }}
                      className="text-gray-300 text-2xl"
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: '#0ea5e9' }}
                      className="text-gray-300 text-2xl"
                    >
                      <FaDiscord />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  {...register('user_name', { required: 'Name is required' })}
                  name="user_name"
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.user_name && <span className="text-red-500 text-sm">{errors.user_name.message}</span>}
              </div>
              
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  {...register('user_email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  name="user_email"
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.user_email && <span className="text-red-500 text-sm">{errors.user_email.message}</span>}
              </div>
              
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  name="message"
                  rows={5}
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
              
              <Button 
                type="submit" 
                primary 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;