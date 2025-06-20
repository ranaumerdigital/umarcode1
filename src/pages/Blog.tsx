import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, Clock } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Cloud Computing', 'Mobile Development', 'DevOps'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      slug: 'future-of-ai-web-development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
      content: 'Full article content would go here...',
      author: 'Umar Hayat',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Web Development', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure',
      slug: 'building-scalable-cloud-infrastructure',
      excerpt: 'Best practices for designing and implementing cloud infrastructure that grows with your business.',
      content: 'Full article content would go here...',
      author: 'Umar Hayat',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['AWS', 'Cloud', 'DevOps'],
      image: 'https://images.pexels.com/photos/6804078/pexels-photo-6804078.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'React Native vs Flutter: A Comprehensive Comparison',
      slug: 'react-native-vs-flutter-comparison',
      excerpt: 'An in-depth analysis of two leading cross-platform mobile development frameworks.',
      content: 'Full article content would go here...',
      author: 'Development Team',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Mobile Development',
      tags: ['React Native', 'Flutter', 'Mobile'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Implementing CI/CD Pipelines with GitHub Actions',
      slug: 'cicd-pipelines-github-actions',
      excerpt: 'Step-by-step guide to setting up automated deployment pipelines using GitHub Actions.',
      content: 'Full article content would go here...',
      author: 'Umar Hayat',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'DevOps',
      tags: ['CI/CD', 'GitHub Actions', 'Automation'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Modern JavaScript Features Every Developer Should Know',
      slug: 'modern-javascript-features',
      excerpt: 'Essential ES6+ features that will make you a more productive JavaScript developer.',
      content: 'Full article content would go here...',
      author: 'Development Team',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Web Development',
      tags: ['JavaScript', 'ES6', 'Frontend'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Database Optimization Techniques for High-Traffic Applications',
      slug: 'database-optimization-techniques',
      excerpt: 'Performance tuning strategies to handle millions of database queries efficiently.',
      content: 'Full article content would go here...',
      author: 'Umar Hayat',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Web Development',
      tags: ['Database', 'Performance', 'SQL'],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern software development, emerging technologies, and industry best practices.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-dark-900 border-b border-primary-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-primary-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-800 text-gray-300 hover:bg-primary-600/20 hover:text-primary-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-12 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-dark-800 rounded-xl overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <span className="text-yellow-400 text-sm font-medium">★ Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-primary-400 transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-400">{filteredPosts.length} articles found</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-dark-800 rounded-xl overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter to get the latest articles and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-dark-900 hover:bg-dark-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;