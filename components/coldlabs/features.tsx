import React from 'react';
import {
    IconBrandNextjs,
    IconBrandReact,
    IconBrandPrisma,
    IconBrandAuth0,
    IconBrandStripe,
    IconBrandTailwind
  } from '@tabler/icons-react';

interface Props {
    Icon: React.ElementType;  // Changed to ElementType for better type safety
    title: string;
    description: string;
    gradient: string;
  }

const FeatureCard = ({ icon: Icon, title, description, gradient }: any) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
        <div className={`p-3 w-14 h-14 rounded-lg bg-gradient-to-br ${gradient}`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const features = [
    {
      icon: IconBrandNextjs,
      title: "Next.js 15",
      description: "App dir, Routing, Layouts, Loading UI and API routes.",
      gradient: "from-[#0070F3] to-[#00a6ed]"
    },
    {
      icon: IconBrandReact,
      title: "React 19",
      description: "Server and Client Components with the newest React features and hooks.",
      gradient: "from-[#61DAFB] to-[#00b4d8]"
    },
    {
      icon: IconBrandPrisma,
      title: "Prisma",
      description: "ORM using Prisma for scalable data management.",
      gradient: "from-[#3ECF8E] to-[#3fb950]"
    },
    {
      icon: IconBrandTailwind,
      title: "Components",
      description: "UI components built using Radix UI and styled with Tailwind CSS.",
      gradient: "from-[#FF3E00] to-[#ff6b6b]"
    },
    {
      icon: IconBrandAuth0,
      title: "Authentication",
      description: "Secure authentication using NextAuth.js and middleware protection.",
      gradient: "from-[#6366F1] to-[#8b5cf6]"
    },
    {
      icon: IconBrandStripe,
      title: "Subscriptions",
      description: "Free and paid subscriptions using Stripe with automated billing.",
      gradient: "from-[#635BFF] to-[#8257e5]"
    }
  ];

  return (
      <section className="container mx-auto space-y-6 py-8 px-6 md:py-12 lg:py-24 dark:bg-slate-950/50 rounded-lg">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-gradient">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Experience a modern application with essential features like authentication, 
            subscriptions, API routes, and static pages - all designed to enhance your workflow.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
  );
}