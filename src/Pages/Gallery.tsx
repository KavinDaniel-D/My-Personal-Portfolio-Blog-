import CustomCarousel from "../Componants/CustomCarousel";
import PhotoGallery from "../Componants/photoGallery";
// import TabGallery from "../Componants/tabGallery";

const Gallery = () => {
  const carouselItems = [
    { src: "src/assets/images/Carousel/c (3).jpg", text: "Find Your Escape" },
    {
      src: "src/assets/images/Carousel/c (4).jpg",
      text: "Discover the Beauty",
    },
    { src: "src/assets/images/Carousel/c (5).png", text: "Wanderlust Vibes" },
    { src: "src/assets/images/Carousel/c (6).png", text: "Nature's Serenity" },
    { src: "src/assets/images/Carousel/c (7).png", text: "Find Your Escape" },
    {
      src: "src/assets/images/Carousel/c (8).png",
      text: "Discover the Beauty",
    },
    { src: "src/assets/images/Carousel/c (1).png", text: "Adventure Awaits" },
    {
      src: "src/assets/images/Carousel/c (2).png",
      text: "Explore the Unknown",
    },
    { src: "src/assets/images/Carousel/c (3).png", text: "Find Your Escape" },
    {
      src: "src/assets/images/Carousel/c (4).png",
      text: "Discover the Beauty",
    },
    { src: "src/assets/images/Carousel/c (1).jpg", text: "Adventure Awaits" },
    {
      src: "src/assets/images/Carousel/c (2).jpg",
      text: "Explore the Unknown",
    },
    { src: "src/assets/images/Carousel/c (9).png", text: "Wanderlust Vibes" },
    { src: "src/assets/images/Carousel/c (10).png", text: "Nature's Serenity" },
  ];
  return (
    <div className="bg-black ">
      <div>
        <CustomCarousel images={carouselItems} />
      </div>
      <PhotoGallery />
    </div>
  );
};

export default Gallery;
