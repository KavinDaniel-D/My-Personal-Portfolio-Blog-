import { useState } from "react";
import { images, categories } from "../Data/galleryData";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-2">
        {categories.map((categoryName) => (
          <button
            key={categoryName}
            onClick={() => setSelectedCategory(categoryName)}
            className={`${
              selectedCategory === categoryName
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border"
            } px-5 py-2 rounded-full text-sm font-medium transition hover:shadow-md`}
          >
            {categoryName === "All" ? "All IMAGES" : categoryName}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
        {filteredImages.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer bg-white border-10  border-cyan-800 h-60 w-60 overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              className="object-cover h-60 w-60"
              src={image.src}
              alt={image.category}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.category}
              className="w-full h-auto rounded"
            />
            <p className="mt-2 text-center font-semibold">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
