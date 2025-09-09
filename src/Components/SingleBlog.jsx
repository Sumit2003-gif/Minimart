import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../Components/CardDetails';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);

  if (!blog) {
    return <div className="text-center text-red-500 mt-10">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <p>Home</p>
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <p>Blog</p>
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <p className="text-black">{blog.header}</p>
      </div>

      <img src={blog.url} alt={blog.header} className="w-full rounded-lg mb-6" />

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.header}</h1>

      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
        <span>📅 {blog.date}</span>
        <span>👤 {blog.author}</span>
        <span>💬 {blog.comments} Comments</span>
      </div>

      <div className="text-gray-700 text-[16px] leading-7 mb-10">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sagittis sagittis purus, id blandit ipsum. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae.
        </p>
        <p className="mb-4">
          In hac habitasse platea dictumst. Sed at nulla at orci efficitur
          dignissim. Nullam nec magna vel lacus pulvinar aliquet. Donec at
          ipsum vitae lacus ullamcorper fermentum.
        </p>
        <p>
          Curabitur ut facilisis lectus. Proin ultricies risus vel risus
          porttitor gravida. Morbi quis libero interdum, accumsan lorem
          eu, sollicitudin velit.
        </p>
      </div>

      {/* 💬 Leave a Message Form */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;
