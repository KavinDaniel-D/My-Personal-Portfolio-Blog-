import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function BlogList({ blogPosts }: BlogListProps) {
  const navigate = useNavigate();

  return (
    <div className="">
      {blogPosts.map((post) => (
        <div key={post.id} className="rounded bg-gray-900 p-4 shadow-lg">
          <img
            src={post.image}
            className="object-cover w-full h-64 rounded-lg"
            alt={post.category}
          />
          <span className="text-green-700 text-sm mt-4 block">
            {post.category}
          </span>
          <h1 className="text-white text-2xl font-bold mt-2 mb-2 leading-tight">
            {post.title}
          </h1>

          <p className="text-white mb-4 line-clamp-3">
            {truncateText(post.description, 150)}
          </p>

          <button
            onClick={() => navigate(`/blog/${post.id}`, { state: { post } })}
            className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100 hover:bg-green-800 transition"
            aria-label={`Read more about ${post.title}`}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}