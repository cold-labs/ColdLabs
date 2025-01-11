"use client";
import React from 'react';
import { 
  IconFileTypeJs, 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandMongodb, 
  IconBrandHtml5, 
  IconBrandCss3,
  IconBrandSupabase,
  IconBrandPrisma,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconFileTypeTs,
  IconFileTypePhp,
  IconBrandVercelFilled,
  IconBrandAuth0
} from '@tabler/icons-react';

const TechStackSlider = () => {
  const icons = [
    { Icon: IconBrandNextjs, label: "Next.js", darkMode: true },
    { Icon: IconBrandReact, label: "React", color: "#61DAFB" },
    { Icon: IconFileTypeJs, label: "JavaScript", color: "#F7DF1E" },
    { Icon: IconBrandSupabase, label: "Supabase", color: "#3ECF8E" },
    { Icon: IconFileTypeTs, label: "TypeScript", color: "#3178C6" },
    { Icon: IconFileTypePhp, label: "PHP", color: "#777BB4" },
    { Icon: IconBrandTailwind, label: "Tailwind", color: "#06B6D4" },
    { Icon: IconBrandPrisma, label: "Prisma", darkMode: true },
    { Icon: IconBrandVercelFilled, label: "Vercel", darkMode: true },
    { Icon: IconBrandMongodb, label: "MongoDB", color: "#47A248" },
    { Icon: IconBrandHtml5, label: "HTML5", color: "#E34F26" },
    { Icon: IconBrandCss3, label: "CSS3", color: "#1572B6" },
    { Icon: IconBrandFramerMotion, label: "Framer Motion", color: "#eab308" },
    { Icon: IconBrandAuth0, label: "Auth.js", darkMode: true },
  ];

  const allIcons = [...icons, ...icons, ...icons];

  return (
    <div className="py-12 bg-background/50">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
        <div 
          className="flex animate-scroll"
          style={{
            animationDuration: '100s',
          }}
        >
          {allIcons.map((item, index) => (
            <div 
              key={index}
              className="flex flex-none flex-col items-center justify-center mx-8 w-24 transition-colors duration-200 group hover:scale-110"
            >
              <item.Icon 
                size={30}
                className={`mb-2 transition-transform duration-300 ${
                  item.darkMode 
                    ? 'dark:text-white text-black' 
                    : ''
                }`}
                style={{ 
                  color: item.darkMode ? undefined : item.color 
                }}
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSlider;