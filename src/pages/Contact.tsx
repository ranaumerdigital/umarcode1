import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you have a project in mind, need technical consultation, or just want to explore possibilities, 
                  we're here to help. Our team is ready to turn your ideas into reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-300">
                      Flex Space 3, Baghar Wala<br />
                      Chowki Masti, Kahror Pacca<br />
                      Lodhran 59340, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a 
                      href="mailto:contact@umarcode.com" 
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      contact@umarcode.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <a 
                      href="tel:+923255709047" 
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      +92 325 5709047
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
                <h3 className="text-white font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-800 p-8 rounded-xl border border-primary-600/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-primary-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-primary-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-primary-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors resize-none"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-300">
                Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, 
                while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you provide ongoing maintenance and support?
              </h3>
              <p className="text-gray-300">
                Yes, we offer comprehensive maintenance packages that include updates, security monitoring, 
                backups, and technical support to keep your systems running smoothly.
              </p>
            </div>

            <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                What technologies do you specialize in?
              </h3>
              <p className="text-gray-300">
                We work with modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure), 
                AI/ML frameworks, and mobile development tools like React Native and Flutter.
              </p>
            </div>

            <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-gray-300">
                Absolutely! We work with clients globally and are experienced in managing projects across different 
                time zones. We use modern collaboration tools to ensure smooth communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's schedule a free consultation to discuss your requirements and explore how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@umarcode.com"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Email Us Now
            </a>
            <a
              href="tel:+923255709047"
              className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;