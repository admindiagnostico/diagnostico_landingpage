import React from 'react';

async function getBlogPost(slug) {
  // This is a placeholder function. We'll need to implement the actual logic to fetch a specific blog post.
  // For now, we'll return some dummy data.
  return {
    title: `Blog Post: ${slug}`,
    content: `This is the content of the blog post with slug: ${slug}`,
    date: new Date().toISOString(),
  };
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Published on: {new Date(post.date).toLocaleDateString()}</p>
      <div>{post.content}</div>
    </article>
  );
}