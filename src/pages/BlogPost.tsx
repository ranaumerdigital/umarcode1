import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: 'The Future of AI in Web Development',
    author: 'Umar Hayat',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Web Development', 'Machine Learning'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p>Artificial Intelligence is rapidly transforming the landscape of web development, introducing new possibilities and changing how we approach building digital experiences. In this comprehensive guide, we'll explore the current state of AI in web development and what the future holds.</p>
      
      <h2>Current Applications of AI in Web Development</h2>
      
      <p>Today's web developers are already leveraging AI in various ways:</p>
      
      <ul>
        <li><strong>Code Generation:</strong> Tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently.</li>
        <li><strong>Testing Automation:</strong> AI-powered testing tools can automatically generate test cases and identify potential bugs.</li>
        <li><strong>Design Assistance:</strong> AI tools can generate layouts, color schemes, and even complete designs based on simple prompts.</li>
        <li><strong>Content Generation:</strong> AI can create placeholder content, write copy, and even generate images for websites.</li>
      </ul>
      
      <h2>The Impact on User Experience</h2>
      
      <p>AI is revolutionizing how users interact with websites and web applications. Some key areas include:</p>
      
      <h3>Personalization</h3>
      <p>AI algorithms can analyze user behavior to provide personalized content, product recommendations, and user interfaces tailored to individual preferences.</p>
      
      <h3>Chatbots and Virtual Assistants</h3>
      <p>Advanced chatbots powered by natural language processing can provide instant customer support and guide users through complex processes.</p>
      
      <h3>Voice Interfaces</h3>
      <p>Web applications are increasingly incorporating voice commands and speech recognition, making them more accessible and user-friendly.</p>
      
      <h2>Development Tools and Frameworks</h2>
      
      <p>The ecosystem of AI-powered development tools continues to expand:</p>
      
      <ul>
        <li><strong>TensorFlow.js:</strong> Brings machine learning capabilities directly to the browser</li>
        <li><strong>OpenAI API:</strong> Enables developers to integrate GPT models into their applications</li>
        <li><strong>Hugging Face:</strong> Provides pre-trained models for various AI tasks</li>
        <li><strong>AutoML platforms:</strong> Allow developers to create custom AI models without deep ML expertise</li>
      </ul>
      
      <h2>Challenges and Considerations</h2>
      
      <p>While AI offers tremendous opportunities, it also presents challenges:</p>
      
      <ul>
        <li><strong>Performance:</strong> AI models can be resource-intensive, affecting page load times</li>
        <li><strong>Privacy:</strong> Handling user data responsibly is crucial when implementing AI features</li>
        <li><strong>Bias:</strong> AI models can perpetuate biases present in training data</li>
        <li><strong>Complexity:</strong> Integrating AI requires new skills and understanding</li>
      </ul>
      
      <h2>Looking Ahead: The Future Landscape</h2>
      
      <p>The future of AI in web development looks incredibly promising:</p>
      
      <h3>Automated Development</h3>
      <p>We're moving toward AI systems that can build entire applications from natural language descriptions, handling everything from database design to user interface creation.</p>
      
      <h3>Intelligent Optimization</h3>
      <p>AI will automatically optimize websites for performance, SEO, and user experience based on real-time data analysis.</p>
      
      <h3>Enhanced Accessibility</h3>
      <p>AI will make web development more accessible to non-technical users while also improving website accessibility for users with disabilities.</p>
      
      <h2>Preparing for the AI-Driven Future</h2>
      
      <p>To stay relevant in this evolving landscape, web developers should:</p>
      
      <ul>
        <li>Learn AI/ML fundamentals and how to integrate AI APIs</li>
        <li>Understand data science basics and how to work with datasets</li>
        <li>Focus on problem-solving and creative thinking skills that complement AI</li>
        <li>Stay updated with the latest AI tools and frameworks</li>
        <li>Develop expertise in AI ethics and responsible AI development</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The integration of AI into web development is not just a trend—it's a fundamental shift that's reshaping our industry. By embracing these technologies while remaining mindful of their limitations and ethical implications, we can create more intelligent, efficient, and user-centered web experiences.</p>
      
      <p>The future belongs to developers who can effectively combine traditional web development skills with AI capabilities. Start experimenting with AI tools today, and you'll be well-positioned for tomorrow's opportunities.</p>
    `
  };

  const relatedPosts = [
    {
      title: 'Building Scalable Cloud Infrastructure',
      slug: 'building-scalable-cloud-infrastructure',
      image: 'https://images.pexels.com/photos/6804078/pexels-photo-6804078.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Modern JavaScript Features Every Developer Should Know',
      slug: 'modern-javascript-features',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <section className="py-6 bg-dark-900 border-b border-primary-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm border border-primary-600/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              color: '#e5e7eb',
              lineHeight: '1.75',
            }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-dark-950 border-t border-primary-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-dark-800 rounded-xl overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help bring your ideas to life with cutting-edge technology.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;