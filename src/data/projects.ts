export const projects = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "A Next.js application that uses OpenAI DALL-E 3 to generate custom marketing assets.",
    className: "md:col-span-2", // This makes it wide (take up 2 slots)
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tech: ["Next.js", "OpenAI API", "Tailwind"],
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Real-time stock tracking dashboard with interactive charts and dark mode.",
    className: "md:col-span-1", // Standard square size
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tech: ["React", "Recharts", "Supabase"],
  },
  {
    id: 3,
    title: "E-Commerce Engine",
    description: "A headless Shopify alternative built for extreme performance.",
    className: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
    tech: ["TypeScript", "Stripe", "Prisma"],
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A Twitter clone with real-time sockets and infinite scroll.",
    className: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    tech: ["Socket.io", "Express", "React"],
  },
];