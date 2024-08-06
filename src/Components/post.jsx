/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-screen object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.description}
          </p>
          <div className="text-gray-700 leading-relaxed mb-6">
            <p>
              In todays digital age, the benefits of moving football club registrations online are becoming increasingly apparent. This article will delve into the advantages of this transition, highlighting how it can enhance efficiency and accessibility for both club administrators and players.
            </p>
            <p>
              One of the primary benefits of online registration is the improvement in efficiency. By moving the registration process to a digital platform, club administrators can streamline the entire process. This includes the ability to easily collect and store player information, manage payments, and generate reports with just a few clicks. This not only saves time and reduces administrative workload but also helps ensure accuracy and consistency in the clubs records.
            </p>
            <p>
              Moreover, online registration enhances accessibility for players and their families. In the past, the registration process often involved filling out physical forms, tracking down the necessary documents, and physically submitting the paperwork. This could be time-consuming and inconvenient, especially for those with busy schedules or limited transportation options. With online registration, players can complete the process from the comfort of their own homes, at a time that is convenient for them. This increased accessibility can lead to higher participation rates and a more inclusive football community.
            </p>
           
            <p>
              Another benefit of online registration is the improved data management and communication capabilities. By centralizing player information in a digital system, club administrators can easily share updates, send reminders, and communicate with players and their families. This streamlined communication can help ensure that important information is disseminated effectively, reducing the likelihood of missed deadlines or miscommunications.
            </p>
            <p>
              Additionally, online registration can provide valuable data insights that can help clubs make more informed decisions. By analyzing registration trends, demographics, and payment patterns, club administrators can better understand their player base and tailor their programs and services accordingly. This can lead to more targeted marketing, improved program offerings, and a more responsive and satisfying experience for players.
            </p>
            <p>
              In conclusion, the transition to online football club registrations offers numerous benefits, including improved efficiency, enhanced accessibility, better data management, and more effective communication. As the digital landscape continues to evolve, embracing these advancements can help clubs stay ahead of the curve, provide a more seamless experience for their players, and ultimately grow and thrive in the ever-changing world of football.
            </p>
            
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">{post.date}</span>
            <span className="text-gray-500 mr-2">|</span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
          <div className="mt-4">
            {post.tags && post.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;