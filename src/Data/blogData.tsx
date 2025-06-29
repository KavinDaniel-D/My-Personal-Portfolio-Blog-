export type BlogPost = {
    id: number;
    title: string;
    description: string;
    image?: string;
    category: string;
    subDescription: string;
    content: string;
  };
  
  // import blog20 from "../assets/images/bg-2.jpg";
  
  export const blogData: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Discover how web development is evolving with new technologies.",
      subDescription: "AI-driven development, Web3, and modern JavaScript frameworks are shaping the industry.",
      image: "src/assets/images/c.jpg",
      category: "Technology",
      content: "Web development is continuously changing with advancements in AI, blockchain, and JavaScript frameworks like React and Vue. Developers must adapt to these changes to stay relevant."
    },
    {
      id: 2,
      title: "Top 10 Travel Destinations",
      description: "Explore the most beautiful travel spots for 2025.",
      subDescription: "A list of must-visit places filled with adventure and culture.",
      image: "src/assets/images/image(1).jpeg",
      category: "Travel",
      content: "This year, destinations like Bali, Iceland, and Kyoto top the list for their breathtaking landscapes and rich cultural experiences."
    },
    {
      id: 3,
      title: "Healthy Eating Tips",
      description: "Maintain a balanced diet with simple and effective tips.",
      subDescription: "Practical strategies to help you stay healthy and fit.",
      image: "src/assets/images/image(1).jpg",
      category: "Health",
      content: "A balanced diet is crucial for well-being. Include fruits, vegetables, whole grains, and proteins in your meals for optimal health."
    },
    {
      id: 4,
      title: "Mastering JavaScript in 2025",
      description: "Become a JavaScript expert with modern frameworks.",
      subDescription: "Advanced techniques and best practices for JavaScript developers.",
      image: "src/assets/images/image(2).jpg",
      category: "Programming",
      content: "JavaScript continues to evolve with frameworks like React, Vue, and Svelte. Learn best practices such as functional programming, TypeScript, and performance optimization."
    },
    {
      id: 5,
      title: "Best Photography Hacks",
      description: "Enhance your photography skills with these simple tricks.",
      subDescription: "Tips on lighting, angles, and composition for stunning photos.",
      image: "src/assets/images/image(4).jpeg",
      category: "Photography",
      content: "Great photography relies on lighting, composition, and perspective. Master these skills to take professional-quality shots."
    },
    {
      id: 6,
      title: "Fitness Routines for Beginners",
      description: "Start your fitness journey with easy exercises.",
      subDescription: "Basic workouts designed for those new to fitness.",
      image: "src/assets/images/image(5).jpg",
      category: "Fitness",
      content: "Beginner-friendly fitness routines focus on consistency and gradual progress. Start with bodyweight exercises and light cardio to build endurance."
    },
    {
      id: 7,
      title: "Artificial Intelligence in Everyday Life",
      description: "How AI is transforming daily life and work.",
      subDescription: "The impact of AI on daily tasks and future innovations.",
      image: "src/assets/images/c.jpg",
      category: "AI",
      content: "AI is revolutionizing industries from healthcare to finance. With smart assistants and automation, AI enhances productivity and convenience."
    },
    {
      id: 20,
      title: "Best Music Albums of 2025",
      description: "Explore the top music albums of the year From pop to rock, the music industry has seen incredible releases in 2025. Discover the best albums and artists shaping the sound of the year ihdeiucbd jdbcjkdnckldskjnjfnvndkcndkcjejicheughcudhc.",
      subDescription: "A selection of the best albums across various genres.",
      image: "src/assets/images/c.jpg",
      category: "Music",
      content: "From pop to rock, the music industry has seen incredible releases in 2025. Discover the best albums and artists shaping the sound of the year ihdeiucbd jdbcjkdnckldskjnjfnvndkcndkcjejicheughcudhc."
    }
  ];
  