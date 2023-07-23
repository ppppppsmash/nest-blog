"use client";
import { PostType } from "@/constant/Types";
import { getPostById } from '@/utils/api';
import { useEffect, useState } from 'react';

interface Props {
  params: { id: string }
}

export default function Post({ params: { id } }: Props) {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPostData = async () => {
      const data = await getPostById(id);

      console.log(data)

      setPosts([data])
    }
    
    getPostData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mt-10">
        {posts.map((post, index) => (
          <>
            <h1 key={post.id}>{post.title}</h1>
            <p>Author: By {post.author}</p>
            <p>Created At: {post.createdAt}</p>
          </>
        ))}
      </div>
    </main>
  )
}
