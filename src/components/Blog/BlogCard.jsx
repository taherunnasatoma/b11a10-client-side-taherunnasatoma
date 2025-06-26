
import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
