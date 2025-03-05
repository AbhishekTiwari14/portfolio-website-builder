import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Minimalist_Theme from "@/components/Minimalist_Theme"
import Creative_Theme from "@/components/Ceative_Theme"
import ShowTemplates from "@/components/ShowTemplates"

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/minimalist-theme", element: <Minimalist_Theme /> },
  { path: "/creative-theme", element: <Creative_Theme /> },
  { path: "/themes", element: <ShowTemplates /> },
])
