
import ProjectShowcase, { Project } from '@/components/projects/projects';
  // In your page:
  

  import React from 'react'

const projectsData: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Stripe" }
      ],
      liveUrl: "https://example-ecommerce.com",
      featured: true
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    {
      id: "3",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    {
      id: "4",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks",
      featured: true
    },
    {
      id: "6",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    {
      id: "7",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    {
      id: "8",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    {
      id: "9",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageUrl: "/asif.jpg",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks"
    },
    // ... more projects
  ];
  

  
  const page = () => {
    return (
        <ProjectShowcase projects={projectsData} />
    )
  }
  
  export default page