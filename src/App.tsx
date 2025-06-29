import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails"; 
import RootLayout from "./layout/RootLayout";
import Gallery from "./Pages/Gallery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="gallery" element={<Gallery />} />
  
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
