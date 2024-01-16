import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/posts.json';

const Post = () => {
  // Utilizza useParams per ottenere il parametro dell'ID dal percorso
  const { postId } = useParams();

  // Trova il post corrispondente all'ID nei dati simulati
  const post = postsData.find((p) => p.id === parseInt(postId));

  // Se l'ID del post non corrisponde a nessun post, mostra un messaggio
  if (!post) {
    return <p>Post non trovato</p>;
  }

  return (
    <div className="container mx-auto mt-8 bg-opacity-10">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
