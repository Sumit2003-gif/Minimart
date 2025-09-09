import React from 'react';
import {
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from 'react-icons/fa';

const ProfileCard = ({ image, name, title, description, phone, email, socialLinks = {} }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 text-gray-700 transition hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-6" />
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-sm text-gray-400 mb-4">{title}</p>
      <p className="text-sm mb-6">{description}</p>
      <div className="border-b border-gray-200 pb-4 space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <FaPhoneAlt />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <FaEnvelope />
          <span>{email}</span>
        </div>
      </div>
      <div className="flex space-x-3 mt-4">
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            aria-label="Facebook"
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
          >
            <FaFacebookF />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            aria-label="Twitter"
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
          >
            <FaTwitter />
          </a>
        )}
        {socialLinks.pinterest && (
          <a
            href={socialLinks.pinterest}
            aria-label="Pinterest"
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
          >
            <FaPinterestP />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            aria-label="Instagram"
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const UserData = [
    {
      image:
        'https://nuranium-furniture.myshopify.com/cdn/shop/files/testirmonial-1_270x.jpg?v=1613735000',
      name: 'KwangSang',
      title: 'CEO - Vinova',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pretium metus. Curabi tur velit sem, egestas sit amet dolor nec.',
      phone: '(+612) 2531 5600',
      email: 'sonata@domain.com',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#',
      },
    },
    {
      image:
        'https://nuranium-furniture.myshopify.com/cdn/shop/files/testirmonial-2_270x.jpg?v=1613735000',
      name: 'Rebecca Jenkins',
      title: 'Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pretium metus. Curabi tur velit sem, egestas sit amet dolor nec.',
      phone: '(+612) 2531 5600',
      email: 'sonata@domain.com',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#',
      },
    },
    {
      image:
        'https://nuranium-furniture.myshopify.com/cdn/shop/files/testirmonial-3_270x.jpg?v=1613735000',
      name: 'Alex Nguyen',
      title: 'Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pretium metus. Curabi tur velit sem, egestas sit amet dolor nec.',
      phone: '(+612) 2531 5600',
      email: 'sonata@domain.com',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#',
      },
    },
    {
      image:
        'https://nuranium-furniture.myshopify.com/cdn/shop/files/testirmonial-4_270x.jpg?v=1613735000',
      name: 'Lucy Watson',
      title: 'Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pretium metus. Curabi tur velit sem, egestas sit amet dolor nec.',
      phone: '(+612) 2531 5600',
      email: 'sonata@domain.com',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#',
      },
    },
  ];

  return (
    <div className="px-4 sm:px-10 py-10 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <p>Home</p>
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <p className="text-black">About</p>
      </div>

      {/* About Image + Intro */}
      <div className="mb-10 space-y-6">
        <img
          src="https://nuranium-furniture.myshopify.com/cdn/shop/files/about_1170x.jpg?v=1613735000"
          alt="Our company"
          className="w-full rounded-md"
        />
        <h1 className="text-3xl font-bold">Our Company</h1>
        <p className="text-gray-700 leading-relaxed">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ligula et mi semper viverra nec a tellus. Curabitur sed diam quis elit tempus venenatis sit amet a tellus. Sed id lectus laoreet, elementum metus at, sagittis sem. Sed ante velit, eleifend sit amet eros lacinia, lobortis vehicula dui. Vivamus fringilla mauris mauris. Aliquam lectus ligula, porta a rhoncus sit amet, consequat vel nibh. Sed in est venenatis, dictum dui a, consequat quam.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Etiam consectetur accumsan odio sit amet sagittis. Aliquam erat volutpat. Maecenas eros lacus, commodo id leo ut, ullamcorper varius elit. Proin auctor quam convallis, iaculis odio non, iaculis tortor. In felis tortor, tristique at magna nec, pharetra posuere leo. Praesent ut felis ante. Pellentesque rutrum sed turpis at ornare. Nulla tincidunt enim vitae purus rhoncus pellentesque ut ac ligula. Vivamus vel gravida nulla, quis aliquam est. Proin ultrices semper tortor, at suscipit nibh imperdiet vel. Etiam quis velit viverra nisl lobortis imperdiet quis mollis metus. Integer nec felis at ligula finibus consequat at ut magna. Duis fermentum dignissim metus in pellentesque. Integer viverra iaculis quam vel convallis. Donec et leo non velit pharetra placerat. Donec condimentum enim vitae felis vulputate, non rhoncus leo fringilla.
        </p>
      </div>

      {/* Quote Block */}
      <div className="bg-gray-100 p-6 rounded-md mb-10 relative">
        <FaQuoteLeft className="text-4xl text-gray-400 mb-4" />
        <p className="text-gray-700 leading-relaxed">
         
I am quote block text, consectetur adipiscing elit. Ut ac ligula et mi semper viverra nec a tellus. Curabitur sed diam quis elit tempus venenatis sit amet a tellus. Sed id lectus laoreet, elementum metus at, sagittis sem. Sed ante velit, eleifend sit amet eros lacinia, lobortis vehicula dui. Vivamus fringilla mauris mauris. Aliquam lectus ligula porta a rhoncus sit amet consequat vel nibh. 
        </p>
      </div>

      {/* Our Team */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Our Team</h1>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ligula et mi semper viverra nec a tellus. Curabitur sed diam quis elit tempus venenatis sit amet a tellus. Sed id lectus laoreet, elementum metus at, sagittis sem. Sed ante velit, eleifend sit amet eros lacinia, lobortis vehicula dui. Vivamus fringilla mauris mauris. Aliquam lectus ligula, porta a rhoncus sit amet, consequat vel nibh. Sed in est venenatis, dictum dui a, consequat quam.


        </p>
        <p className="text-gray-700 leading-relaxed">
            Etiam consectetur accumsan odio sit amet sagittis. Aliquam erat volutpat. Maecenas eros lacus, commodo id leo ut, ullamcorper varius elit. Proin auctor quam convallis, iaculis odio non, iaculis tortor. In felis tortor, tristique at magna nec, pharetra posuere leo. Praesent ut felis ante. Pellentesque rutrum sed turpis at ornare. Nulla tincidunt enim vitae purus rhoncus pellentesque ut ac ligula. Vivamus vel gravida nulla, quis aliquam est. Proin ultrices semper tortor, at suscipit nibh imperdiet vel. Etiam quis velit viverra nisl lobortis imperdiet quis mollis metus. Integer nec felis at ligula finibus consequat at ut magna. Duis fermentum dignissim metus in pellentesque. Integer viverra iaculis quam vel convallis. Donec et leo non velit pharetra placerat. Donec condimentum enim vitae felis vulputate, non rhoncus leo fringilla.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {UserData.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;
