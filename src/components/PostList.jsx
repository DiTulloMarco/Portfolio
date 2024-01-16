import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';


const PostList = () => {
  return (
    <div className="mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Ultimi Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsData.map((post) => (
          <Link to={`/post/${post.id}`} className="mt-2 block">
            <div key={post.id} className="p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
              Continua a leggere
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
