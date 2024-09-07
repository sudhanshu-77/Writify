import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto p-8 text-center bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 mb-6">
          Unleash Your Voice with Writify
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to Writify, the ultimate platform for aspiring writers,
            passionate bloggers, and anyone with a story to tell. Our mission is
            to empower you to express your thoughts, share your knowledge, and
            connect with like-minded individuals from around the world.
          </p>
          <p>
            At Writify, we believe that everyone has a unique perspective to
            offer. Whether you're an expert in your field or simply have a
            burning desire to share your experiences, our user-friendly
            interface makes it easy to create and publish your content. With our
            intuitive tools and customizable templates, you can craft visually
            stunning articles that captivate your audience and leave a lasting
            impression.
          </p>
          <p>
            But Writify is more than just a blogging platform - it's a thriving
            community of writers, thinkers, and dreamers. By joining our
            network, you'll have the opportunity to engage with readers, receive
            feedback on your work, and even collaborate with other writers on
            exciting projects. Our platform is designed to foster connections,
            inspire creativity, and help you grow as a writer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
