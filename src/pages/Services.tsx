import React from 'react';
import { Code, Smartphone, Brain, Cloud, Shield, Database, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly align with your business processes and objectives.',
      features: [
        'Requirements analysis and planning',
        'Custom application development',
        'Legacy system modernization',
        'Third-party integrations',
        'Quality assurance and testing',
        'Ongoing maintenance and support'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET']
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Application Development',
      description: 'Create responsive web applications and native mobile apps that deliver exceptional user experiences.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'Native iOS and Android apps',
        'Cross-platform development',
        'UI/UX design and optimization',
        'App store deployment'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Vue.js']
    },
    {
      icon: Brain,
      title: 'Generative AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions.',
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'Chatbots and virtual assistants',
        'Data mining and analysis'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'scikit-learn', 'Keras']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Scale your infrastructure with robust cloud solutions and streamlined development operations.',
      features: [
        'Cloud architecture design',
        'Migration to cloud platforms',
        'Container orchestration',
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Monitoring and optimization'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive security measures and best practices.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Data encryption solutions',
        'Identity and access management',
        'Compliance consulting',
        'Incident response planning'
      ],
      technologies: ['OWASP', 'ISO 27001', 'GDPR', 'SOX', 'HIPAA']
    },
    {
      icon: Database,
      title: 'Database Development & Management',
      description: 'Design, implement, and manage robust database solutions for optimal performance and reliability.',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration services',
        'Backup and recovery solutions',
        'Database monitoring',
        'Query optimization'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-600 p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm border border-primary-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-600/20 to-primary-800/20 p-8 rounded-2xl border border-primary-600/30 max-w-md w-full">
                    <div className="bg-primary-600 p-6 rounded-xl mb-6 mx-auto w-fit">
                      <service.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 bg-primary-600/30 rounded-full">
                        <div className="h-full bg-primary-600 rounded-full w-4/5"></div>
                      </div>
                      <div className="h-3 bg-primary-600/30 rounded-full">
                        <div className="h-full bg-primary-600 rounded-full w-3/5"></div>
                      </div>
                      <div className="h-3 bg-primary-600/30 rounded-full">
                        <div className="h-full bg-primary-600 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;