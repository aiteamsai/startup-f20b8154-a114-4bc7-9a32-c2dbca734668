import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const BlogPost: NextPage = () => {
  const router = useRouter();
  // Assuming that id is a part of the dynamic route /blogpost/{id}
  const { id } = router.query;

  return (
    <div>
      <h1>Blog Post ID : {id}</h1>
      <p>This is a blog post content...</p>
    </div>
    );
};

export default BlogPost;