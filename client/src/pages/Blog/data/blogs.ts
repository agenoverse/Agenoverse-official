export const sampleBlogs = Array.from({ length: 24 }).map((_, index) => {
  const titles = [
    "Mastering JavaScript",
    "Next.js Tips for Beginners",
    "Understanding Promises",
    "React vs Vue",
    "Async/Await Simplified",
    "Intro to MongoDB",
    "Building REST APIs",
    "Frontend Optimization",
    "Git Tips for Teams",
    "CSS Tricks You Should Know",
    "Understanding Closures",
    "ES2025 Features Overview",
    "Debugging Like a Pro",
    "Write Clean Code",
    "Beginner's Guide to TypeScript",
    "Responsive Design Patterns",
    "Dark Mode in Web Apps",
    "React Hooks Deep Dive",
    "Building Portfolio Sites",
    "Web Accessibility Essentials",
    "JavaScript Design Patterns",
    "Node.js Scaling Techniques",
    "Secure Your Express API",
    "Deploying with Vercel",
  ];

  const getSlug = (title: string) =>
    title.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

  const randomTagsPool = [
    "JavaScript",
    "Next.js",
    "React",
    "Web Development",
    "MongoDB",
    "CSS",
    "TypeScript",
    "Node.js",
    "Frontend",
    "Backend",
  ];

  const shuffledTags = randomTagsPool.sort(() => 0.5 - Math.random()).slice(0, 3);

  const content = `# ${titles[index]}

## Introduction

This blog post dives into **${titles[index]}** and helps developers enhance their understanding.

### Why It Matters

- Helps write better code
- Boosts productivity
- Industry-relevant skills

### Sample Code

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`



### Final Thoughts

Always keep learning and experimenting with new concepts.

---

> Written by Saad Raza on July ${1 + index}, 2025.
`;

  return {
    title: titles[index],
    slug: getSlug(titles[index]),
    content,
    coverImage: "../../../../../public/project1.png",
    tags: shuffledTags,
    author: {
      name: "Saad Raza",
      photoUrl: "../../../../../public/profile.jpg",
    },
    createdAt: new Date(2025, 6, 1 + index),
  };
});
