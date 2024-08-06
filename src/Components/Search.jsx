/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ball_pic from '../assets/images/img2.jpg';
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const tags = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Real Madrid',
      description: 'Real Madrid is a professional football club based in Madrid, Spain. Founded in 1902, it is one of the most successful clubs in the world, having won numerous domestic and international titles.'
    },
    {
      id: 3,
      name: 'Barcelona',
      description: 'FC Barcelona, also known as Barça, is a professional football club based in Barcelona, Spain. Founded in 1899, the club is renowned for its attractive style of play and has won numerous trophies.'
    },
    {
      id: 4,
      name: 'Manchester United',
      description: 'Manchester United is a professional football club based in Manchester, England. Founded in 1878, the club has a rich history and is one of the most popular and successful clubs in the world.'
    },
    {
      id: 5,
      name: 'Liverpool',
      description: 'Liverpool FC is a professional football club based in Liverpool, England. Founded in 1892, the club has a storied history and has won numerous domestic and international titles, including the Champions League.'
    }
  ];

  const filteredTags = tags.filter(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 pt-16">
      <div className="flex justify-center items-center mb-16"> {/* Separate the header from the search and ball */}
        <div className="w-1/3 text-right pr-8">
          <p className="text-4xl font-bold text-white">
            Football is like life - it requires perseverance, self-denial, sacrifice, dedication and respect for authority.
          </p>
          <p className="text-2xl font-bold text-gray-400">- Vince Lombardi</p>
        </div>
        <img src={ball_pic} className="w-[300px] h-[300px] rounded-full object-cover mx-8" /> {/* Adjusted size and margin */}
        <div className="w-1/3 text-left pl-8">
          <p className="text-4xl font-bold text-white">
            In football, as in life, you must learn to balance patience and persistence, passion and discipline, individualism and teamwork.
          </p>
          <p className="text-2xl font-bold text-gray-400">- Edwin Moses</p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-16 w-full"> {/* Center the search input */}
        <div className="relative w-full max-w-md">
          <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-12 text-2xl font-bold text-gray-900 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center">
        {filteredTags.map((tag) => (
          <div key={tag.id} className="bg-gray-800 text-white rounded-lg px-4 py-2 mx-2 my-2 hover:bg-gray-700 transition-colors duration-300">
            <p className="text-lg font-bold">{tag.name}</p>
            {tag.description && (
              <div className="mt-2 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm">{tag.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
