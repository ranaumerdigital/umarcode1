import React, { useState } from 'react';
import { User, FileText, MessageSquare, Settings, Plus, Edit, Trash2, Eye, Save } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [editingPost, setEditingPost] = useState<number | null>(null);

  // Mock authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin/password for demo.');
    }
  };

  // Mock data
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      status: 'published',
      date: '2024-01-15',
      views: 1250
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure',
      status: 'draft',
      date: '2024-01-10',
      views: 890
    }
  ]);

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Interested in web development services',
      date: '2024-01-15',
      status: 'new'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Need help with mobile app development',
      date: '2024-01-14',
      status: 'replied'
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'Web Development',
    tags: ''
  });

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const post = {
        id: Date.now(),
        title: newPost.title,
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
        views: 0
      };
      setBlogPosts([...blogPosts, post]);
      setNewPost({ title: '', content: '', category: 'Web Development', tags: '' });
      setActiveTab('posts');
    }
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-16 min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-dark-800 p-8 rounded-xl border border-primary-600/20">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
              >
                Sign In
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Demo credentials: admin / password
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-dark-800 rounded-xl border border-primary-600/20 p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'overview'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <User size={18} />
                    <span>Overview</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('posts')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'posts'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <FileText size={18} />
                    <span>Blog Posts</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('contacts')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'contacts'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <MessageSquare size={18} />
                    <span>Contact Messages</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('create')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'create'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <Plus size={18} />
                    <span>Create Post</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Total Posts</h3>
                    <p className="text-3xl font-bold text-primary-400">{blogPosts.length}</p>
                  </div>
                  <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Total Views</h3>
                    <p className="text-3xl font-bold text-primary-400">
                      {blogPosts.reduce((sum, post) => sum + post.views, 0)}
                    </p>
                  </div>
                  <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
                    <h3 className="text-lg font-semibold text-white mb-2">New Messages</h3>
                    <p className="text-3xl font-bold text-primary-400">
                      {contacts.filter(c => c.status === 'new').length}
                    </p>
                  </div>
                </div>

                <div className="bg-dark-800 p-6 rounded-xl border border-primary-600/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>New blog post published</span>
                      <span className="text-gray-500 text-sm">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Contact form submission received</span>
                      <span className="text-gray-500 text-sm">5 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Website backup completed</span>
                      <span className="text-gray-500 text-sm">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="bg-dark-800 rounded-xl border border-primary-600/20">
                <div className="p-6 border-b border-primary-600/20">
                  <h2 className="text-xl font-semibold text-white">Blog Posts</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex items-center justify-between p-4 bg-dark-700 rounded-lg"
                      >
                        <div>
                          <h3 className="text-white font-medium">{post.title}</h3>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                            <span className={`px-2 py-1 rounded text-xs ${
                              post.status === 'published' 
                                ? 'bg-green-600 text-white' 
                                : 'bg-yellow-600 text-white'
                            }`}>
                              {post.status}
                            </span>
                            <span>{post.date}</span>
                            <span>{post.views} views</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-primary-400 transition-colors">
                            <Eye size={16} />
                          </button>
                          <button 
                            onClick={() => setEditingPost(post.id)}
                            className="p-2 text-gray-400 hover:text-primary-400 transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="bg-dark-800 rounded-xl border border-primary-600/20">
                <div className="p-6 border-b border-primary-600/20">
                  <h2 className="text-xl font-semibold text-white">Contact Messages</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="p-4 bg-dark-700 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-white font-medium">{contact.name}</h3>
                            <p className="text-primary-400 text-sm">{contact.email}</p>
                            <p className="text-gray-300 mt-2">{contact.message}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded text-xs ${
                              contact.status === 'new' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-green-600 text-white'
                            }`}>
                              {contact.status}
                            </span>
                            <p className="text-sm text-gray-400 mt-1">{contact.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'create' && (
              <div className="bg-dark-800 rounded-xl border border-primary-600/20">
                <div className="p-6 border-b border-primary-600/20">
                  <h2 className="text-xl font-semibold text-white">Create New Post</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                    >
                      <option>Web Development</option>
                      <option>AI & Machine Learning</option>
                      <option>Cloud Computing</option>
                      <option>Mobile Development</option>
                      <option>DevOps</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={newPost.tags}
                      onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                      placeholder="React, JavaScript, Web Development"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Content
                    </label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      rows={10}
                      className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600 resize-none"
                      placeholder="Write your post content here..."
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleCreatePost}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Draft
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-dark-800 rounded-xl border border-primary-600/20">
                <div className="p-6 border-b border-primary-600/20">
                  <h2 className="text-xl font-semibold text-white">Settings</h2>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Site Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Site Title
                        </label>
                        <input
                          type="text"
                          defaultValue="UmarCode - Engineering Future Technologies"
                          className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Site Description
                        </label>
                        <textarea
                          defaultValue="We craft cutting-edge digital solutions from web and mobile apps to AI innovations."
                          rows={3}
                          className="w-full px-3 py-2 bg-dark-700 border border-primary-600/30 rounded-lg text-white focus:outline-none focus:border-primary-600 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                    <div className="space-y-4">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Change Password
                      </button>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;