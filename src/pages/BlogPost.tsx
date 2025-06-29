import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Heart, MessageCircle, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data - in real app, fetch based on ID
  const post = {
    id: '1',
    title: 'Redfin Ranks the Most Competitive Neighborhoods of 2020',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h3>Key Market Insights</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <ul>
        <li>Market competition increased by 15% year over year</li>
        <li>Average days on market decreased to 18 days</li>
        <li>Bidding wars occurred in 65% of sales</li>
        <li>Cash offers represented 30% of all purchases</li>
      </ul>
      
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Admin',
    date: 'February 28, 2020',
    category: 'Family House',
    tags: ['Real Estate', 'Market', 'Investment'],
    readTime: '5 min read'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
                  <Heart className="w-5 h-5" />
                  <span>24</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
                  <MessageCircle className="w-5 h-5" />
                  <span>8</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments (3)</h3>
          
          <div className="space-y-6">
            {[
              {
                name: 'John Doe',
                date: 'March 1, 2020',
                comment: 'Great insights! This really helps understand the current market dynamics.',
                avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
              },
              {
                name: 'Sarah Wilson',
                date: 'March 2, 2020',
                comment: 'Very informative article. The statistics are particularly helpful for buyers.',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
              }
            ].map((comment, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="mt-8 pt-8 border-t">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your Comment"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}