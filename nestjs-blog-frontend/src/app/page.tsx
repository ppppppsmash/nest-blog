"use client";
import { PostType } from '@/constant/Types'
import { getAllPosts } from '@/utils/api';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getAllPostsData = async () => {
      const data = await getAllPosts();
      console.log(data)

      setPosts(data)
    }
    
    getAllPostsData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Nest.js Blog</h1>
      <div className="mt-20">
        <ul>
          {posts.map((post: PostType, index) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
