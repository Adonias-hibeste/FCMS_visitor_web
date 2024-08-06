/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';

function IntroPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[])

  const [selectedPost, setSelectedPost] = useState(null);

  const handleKnowMore = (post) => {
    setSelectedPost(post.id === selectedPost ? null : post.id);
  };

  const handleClickMe = (post) => {
    console.log(`Clicked the "Click Me" button for post: ${post.title}`);
  };

  return (
    <div className="bg-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {posts?.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-1 font-bold">{post.date} • {post.readTime}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex flex-wrap mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  {selectedPost === post.id && (
                    <p className="text-gray-700 mb-4">{post.description}</p>
                  )}
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                      onClick={() => handleKnowMore(post)}
                    >
                      Know More
                    </button>
                    <a
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      href={`/${post.id}`}
                    >
                      Details
                    </a>
                  </div>
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