import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../ui/Button.jsx';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend or a service like EmailJS
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-primary text-xl mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-300">example@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary text-xl mr-4">
                  <FaDiscord />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Discord</h4>
                  <p className="text-gray-300">bharat27</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                <div className="flex space-x-4">
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full p-3 bg-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
              
              <Button type="submit" primary className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;