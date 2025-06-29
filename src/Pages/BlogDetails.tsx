import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import admin from "../assets/images/bg-4.jpg"; // Fixed Import

export default function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return <h2 className="text-center text-white">Blog post not found!</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-24">
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-5 px-4 py-2 flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
      >
        <ArrowLeft />
      </button>

      <div className="bg-black text-white min-h-screen">
        <main>
          <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
            <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
            <img
              src={post.image}
              className="left-0 top-0 w-full h-96 z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              {/* <a
                href="#"
                className="px-4 py-1 bg-gray-700 text-white inline-flex items-center justify-center mb-2"
              >
                {post.category}
              </a> */}
              <h2 className="text-4xl font-semibold leading-tight">
                {post.title}
              </h2>
              <div className="flex mt-3">
                <img
                  src={admin}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-300 text-sm">
                    Kavin Daniel
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">14 Aug</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-12 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">{post.description}</p>
            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              {post.content}
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <p className="pb-6">{post.subDescription}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
