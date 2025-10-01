import React, { useState } from 'react';
import BlogCards from '../Components/BlogCards';
import { blogData } from '../Components/CardDetails';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const categories = ['Tech', 'Design', 'Lifestyle', 'Productivity', 'Gadgets'];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <Link to='/' className='cursor-pointer hover:text-orange-500'><p>Home</p></Link>
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <p className="text-black">Blog</p>
      </div>

      {/* Layout: Blog + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Cards (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {currentPosts.map((item) => (
            <BlogCards
              key={item.id}
              id={item.id}
              url={item.url}
              header={item.header}
              date={item.date}
              author={item.author}
              comments={item.comments}
              text={item.text}
            />
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar (1/3 width) */}
        <div className="space-y-8">
          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {blogData.slice(0, 5).map((post) => (
                <li key={post.id} className="border-b pb-2">
                  <p className="font-medium">{post.header}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-black cursor-pointer">
                  • {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
