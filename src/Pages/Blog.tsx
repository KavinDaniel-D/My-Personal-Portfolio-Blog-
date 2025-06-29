import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard1 from "../Componants/BlogCard1";
import BlogCard2 from "../Componants/BlogCard2";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "../Data/blogData"; // Importing blog data

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const navigate = useNavigate();

  const latestPost = blogData.length > 0 ? [blogData[blogData.length - 1]] : [];
  const sortedPosts = blogData.slice(0, blogData.length - 1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  return (
    <div className="px-4 md:px-10 lg:px-40 pt-20 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          onClick={() =>
            navigate(`/blog/${latestPost[0]?.id}`, {
              state: { post: latestPost[0] },
            })
          }
        >
          <BlogCard1 blogPosts={latestPost} />
        </div>

        <div className="space-y-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`, { state: { post } })}
              className="cursor-pointer"
            >
              <BlogCard2 blogData={[post]} />
            </div>
          ))}

          {totalPages > 1 && (
            <ol className="flex justify-center gap-2 text-xs font-medium mt-6">
              <li>
                <button
                  className="p-2 rounded-sm border border-gray-100 bg-white text-gray-900 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={18} />
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 rounded-sm text-center leading-6 ${
                      currentPage === index + 1
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border border-gray-100 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li>
                <button
                  className="p-2 rounded-sm border border-gray-100 bg-white text-gray-900 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={18} />
                </button>
              </li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
