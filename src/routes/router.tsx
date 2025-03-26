import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Minimalist_Theme from "@/components/Minimalist_Theme"
import Creative_Theme from "@/components/Ceative_Theme"
import ShowTemplates from "@/components/ShowTemplates"
import EditPage from "@/components/UserDataForm/EditPage"
import SplitPane from "@/components/UserDataForm/SplitPane"

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/minimalist-theme", element: <Minimalist_Theme /> },
  { path: "/creative-theme", element: <Creative_Theme /> },
  { path: "/themes", element: <ShowTemplates /> },
  { path: "/edit", element: <EditPage /> },
  { path: "/pane", element: <SplitPane /> },
])
