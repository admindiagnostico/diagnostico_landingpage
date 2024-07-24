import React from 'react';
import Link from 'next/link';

async function getBlogPosts() {
  // This is a placeholder function. We'll need to implement the actual logic to fetch blog posts.
  // For now, we'll return some dummy data.
  return [
    { id: 1, title: 'First Blog Post', slug: 'first-blog-post' },
    { id: 2, title: 'Second Blog Post', slug: 'second-blog-post' },
    { id: 3, title: 'Third Blog Post', slug: 'third-blog-post' },
  ];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}