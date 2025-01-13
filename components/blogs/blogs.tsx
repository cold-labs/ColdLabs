import React from 'react';
import { formatDistance } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image';

interface Author {
  name: string;
  role: string;
  avatarUrl?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  category: string;
  author: Author;
  imageUrl?: string;
}

interface BlogListingProps {
  posts: BlogPost[];
}

const BlogListing: React.FC<BlogListingProps> = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-6 space-y-24">
      <div className="space-y-16">
        {posts.map((post) => (
          <Card 
            key={post.id} 
            className="flex flex-col md:flex-row gap-8 px-0 border-none shadow-none hover:shadow-lg transition-all duration-300 rounded-xl"
          >
            <div className="relative w-full md:w-[400px] h-[300px] shrink-0">
              <Image
                src={post.imageUrl || "/api/placeholder/400/300"}
                alt={post.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <CardHeader className="p-0">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{formatDistance(post.date, new Date(), { addSuffix: true })}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium">{post.category}</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold hover:text-blue-600 cursor-pointer transition-colors mb-4">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-gray-600 text-base md:text-lg line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </div>
              
              <CardFooter className="p-0 mt-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                    <AvatarFallback>
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;