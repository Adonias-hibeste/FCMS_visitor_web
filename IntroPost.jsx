/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function IntroPost() {
  const posts = [
    {
      id: 1,
      title: 'Why Football Clubs Should Bring Their Registrations Online',
      date: 'September 27, 2023',
      readTime: '2 min read',
      image: './src/assets/images/register.jpg', 
      tags: ['Clubs'],
      description: 'This article discusses the benefits of moving football club registrations online, including improved efficiency and accessibility.',
    },
    {
      id: 2,
      title: 'Increase your football club income with a club lotto',
      date: 'June 12, 2023',
      readTime: '4 min read',
      image: './src/assets/images/lottery.jpg', 
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Learn how a club lotto can boost your football club\'s income and engage your community.',
    },
    {
      id: 3,
      title: 'TeamFeePay partners with MOTiQ',
      date: 'June 12, 2023',
      readTime: '2 min read',
      image: './src/assets/images/feeteam.jpg', 
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'An exciting partnership between TeamFeePay and MOTiQ aimed at enhancing football club management.',
    },
    {
      id: 4,
      title: 'Membership management software',
      date: 'June 12, 2023',
      readTime: '5 min read',
      image: './src/assets/images/membership.jpg', 
      tags: ['Clubs', 'Managers', 'Sports'],
      description: 'Discover the advantages of using membership management software for football clubs.',
    },
    {
      id: 5,
      title: 'Online fundraising for football clubs',
      date: 'June 12, 2023',
      readTime: '6 min read',
      image: './src/assets/images/fundersing.jpg', 
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Explore various online fundraising strategies to support your football club financially.',
    },
    {
      id: 6,
      title: 'Making life easier for Pro Touch Football Academy London',
      date: 'June 12, 2023',
      readTime: '4 min read',
      image: './src/assets/images/proteach.jpg', 
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Learn how Pro Touch Football Academy London simplifies operations and enhances performance.',
    },
    {
      id: 7,
      title: 'Plan your football camp in 7 simple steps',
      date: 'June 12, 2023',
      readTime: '14 min read',
      image: './src/assets/images/fbcamp.jpg',
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'A comprehensive guide to planning a successful football camp for young athletes.',
    },
    {
      id: 8,
      title: 'Establishing Your Club DNA: Values & Visions',
      date: 'June 12, 2023',
      readTime: '4 min read',
      image: './src/assets/images/dna.jpg',
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Understanding the importance of defining your club\'s values and vision for long-term success.',
    },
    {
      id: 9,
      title: 'Junior Football Club Coaching - Managing Expectations',
      date: 'June 12, 2023',
      readTime: '12 min read',
      image: './src/assets/images/junioer.jpg',
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Tips for coaches on managing expectations and fostering a positive environment in junior football.',
    },
    {
      id: 10,
      title: 'Boostin Club Morale Through Team Building Activities',
      date: 'June 12, 2023',
      readTime: '5 min read',
      image: './src/assets/images/boost.jpg',
      tags: ['Clubs', 'Coaching', 'Managers', 'Sports'],
      description: 'Effective team building activities to enhance morale and performance within your club.',
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handleKnowMore = (post) => {
    setSelectedPost(post.id === selectedPost ? null : post.id);
  };

  return (
    <div className="bg-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {posts.map(post => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-1 font-bold">{post.date} • {post.readTime}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex flex-wrap mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  {selectedPost === post.id && (
                    <p className="text-gray-700 mb-4">{post.description}</p>
                  )}
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                    onClick={() => handleKnowMore(post)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroPost;