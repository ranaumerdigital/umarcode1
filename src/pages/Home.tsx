import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Brain, 
  Cloud, 
  Shield, 
  Database,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Play,
  Quote,
  Zap,
  Target,
  Clock,
  Globe
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    years: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = { projects: 50, clients: 30, satisfaction: 98, years: 3 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const counters = Object.keys(targets).map(key => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(counters[Object.keys(targets).indexOf(key)]);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const technologies = [
    { name: 'React Native', logo: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'SAS Viya', logo: '📊', color: 'from-purple-500 to-pink-500' },
    { name: 'Python', logo: '🐍', color: 'from-green-500 to-emerald-500' },
    { name: 'Ruby on Rails', logo: '💎', color: 'from-red-500 to-rose-500' },
    { name: 'HubSpot', logo: '🔗', color: 'from-orange-500 to-amber-500' },
    { name: 'Zendesk', logo: '🎫', color: 'from-indigo-500 to-blue-500' },
    { name: 'Salesforce', logo: '☁️', color: 'from-sky-500 to-blue-500' },
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions built to your exact specifications and business needs.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Responsive web applications and native mobile apps for iOS and Android.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and automation to transform your business processes.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management services.',
      gradient: 'from-indigo-500 to-purple-600'
    },
  ];

  const testimonials = [
    {
      text: "UmarCode delivered exactly what we needed, on time and within budget. Their technical expertise and communication throughout the project was exceptional.",
      author: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "The AI solution they built for us has transformed our business operations. We've seen a 300% improvement in efficiency since implementation.",
      author: "David Rodriguez",
      position: "Operations Director, LogiFlow",
      rating: 5,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "Working with UmarCode was a game-changer. They not only built our platform but also provided valuable insights that shaped our business strategy.",
      author: "Emily Chen",
      position: "Founder, EduTech Solutions",
      rating: 5,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Get your projects delivered 50% faster with our agile development process"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every line of code is crafted with precision to meet your exact requirements"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and support"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create wireframes and prototypes to visualize your solution"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your solution with rigorous testing at every stage"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your solution and provide ongoing maintenance and support"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-primary-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 30+ Companies Worldwide
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 animate-pulse">
                Future Technologies
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We craft cutting-edge digital solutions—from web and mobile apps to AI innovations—designed to 
              <span className="text-primary-400 font-semibold"> drive your business forward</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-600/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stats.projects}+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stats.clients}+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stats.satisfaction}%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stats.years}+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Technology Logos */}
            <div className="mb-16">
              <p className="text-gray-400 mb-8 text-lg">Trusted Technologies We Master</p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-dark-800/50 border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-3xl p-3 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                      {tech.logo}
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-primary-400 transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose UmarCode?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group text-center p-6 rounded-xl bg-dark-800/50 border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-950 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/5 to-blue-900/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-dark-800/50 p-8 rounded-xl border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 relative z-10">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors relative z-10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-600/50 to-transparent transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-blue-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative">
            <div className="bg-dark-800/50 p-8 rounded-2xl border border-primary-600/20 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary-400 mr-4" />
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].author}</div>
                  <div className="text-primary-400 text-sm">{testimonials[currentTestimonial].position}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve their technology goals and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "VetPlus - Salesforce Implementation",
                result: "40% reduction in scheduling time",
                image: "https://images.pexels.com/photos/6235235/pexels-photo-6235235.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "GoWide - DevOps Scaling",
                result: "99.9% uptime during peak sales",
                image: "https://images.pexels.com/photos/6804078/pexels-photo-6804078.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "TJR - Website Development",
                result: "300% improvement in lead generation",
                image: "https://images.pexels.com/photos/7578868/pexels-photo-7578868.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((study, index) => (
              <div
                key={study.title}
                className="group bg-dark-800/50 rounded-xl overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-primary-400 font-medium mb-4">{study.result}</p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join 30+ companies who have already transformed their operations with our cutting-edge solutions. 
            Let's discuss how we can help you achieve your technology goals and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="group bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;