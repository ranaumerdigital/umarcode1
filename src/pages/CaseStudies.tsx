import React, { useState } from 'react';
import { ExternalLink, Calendar, Tag, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'VetPlus - Salesforce Implementation',
      client: 'VetPlus Veterinary Clinic',
      category: 'CRM Implementation',
      duration: '3 months',
      team: '4 developers',
      image: 'https://images.pexels.com/photos/6235235/pexels-photo-6235235.jpeg?auto=compress&cs=tinysrgb&w=600',
      overview: 'Complete Salesforce implementation for a growing veterinary clinic chain to streamline patient management and improve customer service.',
      challenge: 'VetPlus was struggling with manual patient records, appointment scheduling, and customer communication across multiple locations.',
      solution: 'We implemented a comprehensive Salesforce solution with custom objects for pets, automated appointment reminders, and integrated payment processing.',
      results: [
        '40% reduction in appointment scheduling time',
        '60% improvement in customer satisfaction scores',
        '25% increase in appointment bookings',
        'Eliminated double bookings completely'
      ],
      technologies: ['Salesforce', 'Apex', 'Lightning Components', 'Flow Builder'],
      testimonial: {
        text: "UmarCode transformed our entire operation. The Salesforce implementation has made us more efficient and our customers happier.",
        author: "Dr. Sarah Johnson",
        position: "Owner, VetPlus"
      }
    },
    {
      id: 2,
      title: 'GoWide - DevOps Scaling',
      client: 'GoWide E-commerce Platform',
      category: 'DevOps & Cloud',
      duration: '6 months',
      team: '3 DevOps engineers',
      image: 'https://images.pexels.com/photos/6804078/pexels-photo-6804078.jpeg?auto=compress&cs=tinysrgb&w=600',
      overview: 'Scalable cloud infrastructure implementation for a rapidly growing e-commerce platform handling millions of transactions.',
      challenge: 'GoWide faced frequent downtime during peak sales periods and struggled with manual deployment processes that took hours.',
      solution: 'We architected a robust AWS-based infrastructure with auto-scaling, implemented CI/CD pipelines, and set up comprehensive monitoring.',
      results: [
        '99.9% uptime during Black Friday sales',
        '80% reduction in deployment time',
        '50% cost savings on cloud infrastructure',
        'Zero critical security incidents'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      testimonial: {
        text: "The infrastructure UmarCode built can handle 10x our current traffic. We're ready for massive growth.",
        author: "Mike Chen",
        position: "CTO, GoWide"
      }
    },
    {
      id: 3,
      title: 'TJR - Website Development',
      client: 'TJR Real Estate Agency',
      category: 'Web Development',
      duration: '2 months',
      team: '2 full-stack developers',
      image: 'https://images.pexels.com/photos/7578868/pexels-photo-7578868.jpeg?auto=compress&cs=tinysrgb&w=600',
      overview: 'Modern, responsive real estate website with property search functionality and lead generation system.',
      challenge: 'TJR\'s old website was outdated, slow, and not mobile-friendly, resulting in high bounce rates and low lead conversion.',
      solution: 'We built a modern React-based website with advanced search filters, virtual tour integration, and automated lead nurturing.',
      results: [
        '150% increase in website traffic',
        '300% improvement in lead generation',
        '70% faster page load times',
        '90% mobile user satisfaction score'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3'],
      testimonial: {
        text: "Our new website has transformed our business. We're getting more quality leads than ever before.",
        author: "Jessica Rodriguez",
        position: "Marketing Director, TJR"
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-dark-800 rounded-xl overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCase(study.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {study.overview}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{study.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transition-colors">
                    View Case Study
                    <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase)!;
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{study.title}</h2>
                        <p className="text-primary-400">{study.client}</p>
                      </div>
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="text-gray-400 hover:text-white p-2"
                      >
                        ✕
                      </button>
                    </div>

                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm border border-primary-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary-600/10 p-6 rounded-lg border border-primary-600/20">
                      <blockquote className="text-lg text-gray-300 italic mb-4">
                        "{study.testimonial.text}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="text-white font-semibold">{study.testimonial.author}</div>
                        <div className="text-primary-400">{study.testimonial.position}</div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400">
              Results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;