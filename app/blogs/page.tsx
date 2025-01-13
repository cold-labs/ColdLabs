import BlogListing from '@/components/blogs/blogs';
import React from 'react'

const posts = [
  {
    id: "1",
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    excerpt: "Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",
    date: new Date("2024-03-12"),
    category: "Development",
    author: {
      name: "John Doe",
      role: "Senior Developer",
      avatarUrl: "/path/to/avatar.jpg"
    },
    imageUrl: "/iftekhar.jpg"
  },
  {
    id: "2",
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    excerpt: "Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",
    date: new Date("2024-03-12"),
    category: "Development",
    author: {
      name: "John Doe",
      role: "Senior Developer",
      avatarUrl: "/path/to/avatar.jpg"
    },
    imageUrl: "/iftekhar.jpg"
  },
  {
    id: "3",
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    excerpt: "Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",
    date: new Date("2024-03-12"),
    category: "Development",
    author: {
      name: "John Doe",
      role: "Senior Developer",
      avatarUrl: "/path/to/avatar.jpg"
    },
    imageUrl: "/iftekhar.jpg"
  },
  {
    id: "4",
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    excerpt: "Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",
    date: new Date("2024-03-12"),
    category: "Development",
    author: {
      name: "John Doe",
      role: "Senior Developer",
      avatarUrl: "/path/to/avatar.jpg"
    },
    imageUrl: "/iftekhar.jpg"
  },
  // ... more posts
];

const BlogPage = () => {
  return (
    <div className='min-h-[calc(100vh-7.1rem)]'>
      <div className='max-w-4xl mx-auto py-24 space-y-16'>
        <div className='mx-6 space-y-4'>
          <p className='text-muted-foreground font-semibold'>Blog Section</p>
          <p className='text-3xl font-semibold'>Blog Section</p>
          <p className='text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tempora reprehenderit nulla eaque error! Voluptatum necessitatibus corporis earum eius saepe?</p>
        </div>
        <BlogListing posts={posts} />
      </div>
    </div>
  )
}

export default BlogPage;