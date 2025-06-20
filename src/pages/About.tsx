import React from 'react';
import { Users, Target, Lightbulb, Award, Star, Quote } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and create lasting impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-First',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to understand and exceed their expectations.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance in every project.'
    }
  ];

  const testimonials = [
    {
      text: "UmarCode delivered exactly what we needed, on time and within budget. Their technical expertise and communication throughout the project was exceptional.",
      author: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      text: "The AI solution they built for us has transformed our business operations. We've seen a 300% improvement in efficiency since implementation.",
      author: "David Rodriguez",
      position: "Operations Director, LogiFlow",
      rating: 5
    },
    {
      text: "Working with UmarCode was a game-changer. They not only built our platform but also provided valuable insights that shaped our business strategy.",
      author: "Emily Chen",
      position: "Founder, EduTech Solutions",
      rating: 5
    }
  ];

  const team = [
    {
      name: "Umar Hayat",
      position: "Founder & Lead Developer",
      expertise: "Full-Stack Development, AI/ML, Cloud Architecture",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "With over 5 years of experience in software development, Umar specializes in creating scalable solutions using modern technologies."
    },
    {
      name: "Technical Team",
      position: "Development Specialists",
      expertise: "Web Development, Mobile Apps, DevOps",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Our collaborative team of experts brings diverse skills in frontend, backend, and infrastructure development."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About UmarCode
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers and innovators dedicated to engineering the future of technology, 
              one solution at a time. Based in Pakistan, we serve clients globally with cutting-edge digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Engineering Excellence Since Day One
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                UmarCode has grown from a small development team to a trusted technology partner for businesses worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our expertise spans across web and mobile development, artificial intelligence, cloud solutions, and 
                cybersecurity. We pride ourselves on delivering not just code, but complete solutions that drive 
                business growth and operational efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-800/20 p-8 rounded-2xl border border-primary-600/30">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind UmarCode's success, bringing together years of experience and passion for technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-dark-800 p-6 rounded-xl border border-primary-600/20 text-center group hover:border-primary-600/40 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 mb-2">{member.position}</p>
                <p className="text-sm text-gray-400 mb-4">{member.expertise}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with UmarCode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-800 p-6 rounded-xl border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary-400 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-primary-600/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-primary-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Mission */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Technology Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to compete 
            in the digital age. We believe that innovative technology should be accessible, reliable, and transformative.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Innovation</div>
              <p className="text-primary-100">Pushing boundaries with the latest technologies</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Accessibility</div>
              <p className="text-primary-100">Making advanced solutions available to all</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Impact</div>
              <p className="text-primary-100">Creating measurable business value</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;