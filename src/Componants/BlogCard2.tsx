interface Blog {
  id: number;
  image?: string; 
  category?: string;
  title: string;
  description: string;
}
interface BlogListProps {
  blogData: Blog[];
}
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
export default function BlogList({ blogData }: BlogListProps) {
  return (
    <div>
      {blogData.map((blog: Blog) => (
        <div key={blog.id} className="rounded w-full flex flex-col md:flex-row mb-3 bg-gray-900">
          <img
            src={blog.image } 
            className="hidden md:block rounded-md h-64 md:h-32 m-4 md:m-0 p-2"
            alt={blog.title}
          />
          
          <div className="rounded p-2">
      
            {blog.category && <span className="text-green-700 text-sm hidden md:block">{blog.category}</span>}

            <div className="md:mt-0 text-white font-semibold text-xl mb-2">{blog.title}</div>

            <p className="p-2 pl-0 pt-1 text-sm text-gray-600">{truncateText(blog.description, 100)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
