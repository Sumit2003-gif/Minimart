import React from 'react';
import { FiCalendar, FiPaperclip, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BlogCards = ({ id,url, header, text, date, author, comments }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden my-10">
      <img src={url} alt="Blog" className="w-full h-auto" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{header}</h2>
        <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-5">
  <span className='flex justify-center items-center gap-1 border-b'><FiCalendar/> {date}</span>
  <span className='flex justify-center items-center gap-1 border-b'><FiUser/> {author}</span>
  <span className='flex justify-center items-center gap-1 border-b'><FiPaperclip/> {comments} Comments</span>
</div>

        <p className="text-gray-600 text-sm mb-6">{text}</p>
        <Link to={`/blogs/${id}`}>
        <button className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-sm font-semibold py-2 px-5 rounded-full transition">
          READ MORE
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
