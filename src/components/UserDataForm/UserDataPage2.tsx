import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import { useSelector } from "react-redux"
import {
  UserIcon,
  MailIcon,
  Settings2Icon,
  SmartphoneIcon,
  TabletIcon,
  MonitorIcon,
} from "lucide-react"
import { RootState } from "@/utils/store"
import AboutData from "./AboutData"
import ExperienceData from "./ExperienceData"
import ProjectsData from "./ProjectsData"
import { FormProgress } from "./FormProgress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Minimalist_Theme from "../Minimalist_Theme"

function FormStep() {
  const currentStep = useSelector(
    (state: RootState) => state.userData.currentStep
  )

  const steps = [
    { component: <AboutData />, icon: UserIcon, title: "Personal Information" },
    { component: <ExperienceData />, icon: MailIcon, title: "Experience" },
    { component: <ProjectsData />, icon: Settings2Icon, title: "Projects" },
  ]

  const StepIcon = steps[currentStep].icon

  return (
    <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto">
      <FormProgress />
      <div className="flex items-center space-x-3 px-4">
        <StepIcon className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-primary">
          {steps[currentStep].title}
        </h2>
      </div>
      <div className="bg-card p-6 rounded-lg shadow flex-1 overflow-y-auto">
        {steps[currentStep].component}
      </div>
    </div>
  )
}

export function UserDataPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [leftPanelWidth, setLeftPanelWidth] = useState(50)
  const [showLeftPanel, setShowLeftPanel] = useState(true)
  const [showRightPanel, setShowRightPanel] = useState(true)
  const [isResizing, setIsResizing] = useState(false)
  const [previewMode, setPreviewMode] = useState("auto") // 'auto', 'mobile', 'tablet', 'desktop'
  const dividerRef = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)
  const [previewWidth, setPreviewWidth] = useState(0)

  useLayoutEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse down on divider
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsResizing(true)
  }

  // Handle mouse move to resize panels
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const mouseX = e.clientX - containerRect.left

      // Calculate percentage (constrained between 20% and 80%)
      let newLeftWidth = (mouseX / containerWidth) * 100
      newLeftWidth = Math.max(20, Math.min(80, newLeftWidth))

      setLeftPanelWidth(newLeftWidth)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  // Monitor preview container width
  useEffect(() => {
    if (!previewContainerRef.current) return

    const updatePreviewWidth = () => {
      if (previewContainerRef.current) {
        setPreviewWidth(previewContainerRef.current.offsetWidth)
      }
    }

    // Initial width
    updatePreviewWidth()

    // Create ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(updatePreviewWidth)
    resizeObserver.observe(previewContainerRef.current)

    return () => {
      if (previewContainerRef.current) {
        resizeObserver.unobserve(previewContainerRef.current)
      }
    }
  }, [showRightPanel])

  useEffect(() => {
    const newLeftWidth = screenWidth - previewWidth
    setLeftPanelWidth(newLeftWidth)
  }, [previewWidth])

  //   if (showLeftPanel) {
  //     setShowLeftPanel(false)
  //   } else {
  //     setShowLeftPanel(true)
  //     // Restore a reasonable width if right panel is also showing
  //     if (showRightPanel) {
  //       setLeftPanelWidth(50)
  //     } else {
  //       setLeftPanelWidth(100)
  //     }
  //   }
  // }

  // const toggleRightPanel = () => {
  //   if (showRightPanel) {
  //     setShowRightPanel(false)
  //   } else {
  //     setShowRightPanel(true)
  //     // Restore a reasonable width if left panel is also showing
  //     if (showLeftPanel) {
  //       setLeftPanelWidth(50)
  //     } else {
  //       setLeftPanelWidth(0)
  //     }
  //   }
  // }

  // Determine which preview size to use
  const getPreviewSize = () => {
    if (previewMode !== "auto") {
      // Return explicit sizes based on selected mode
      switch (previewMode) {
        case "mobile":
          return { width: 375, height: "100%" }
        case "tablet":
          return { width: 768, height: "100%" }
        case "desktop":
          return { width: "100%", height: "100%" }
        default:
          return { width: "100%", height: "100%" }
      }
    }

    // Auto mode - determine size based on container width
    if (previewWidth < 640) {
      return { width: 375, height: "100%" } // Mobile
    } else if (previewWidth < 1024) {
      return { width: 768, height: "100%" } // Tablet
    } else {
      return { width: "100%", height: "100%" } // Desktop
    }
  }

  const previewSize = getPreviewSize()
  const isMobilePreview =
    previewMode === "mobile" || (previewMode === "auto" && previewWidth < 640)
  const isTabletPreview =
    previewMode === "tablet" ||
    (previewMode === "auto" && previewWidth >= 640 && previewWidth < 1024)

  return (
    <>
      {/* Mobile view (unchanged) */}
      <Tabs
        defaultValue="account"
        className="w-full min-h-screen my-4 lg:hidden"
      >
        <TabsList className="grid max-w-[400px] grid-cols-2 ml-4 bg-slate-200">
          <TabsTrigger value="account">Edit</TabsTrigger>
          <TabsTrigger value="password">Preview</TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className="border-2 border-gray-200 p-8 bg-gray-50 h-full"
        >
          <FormStep />
        </TabsContent>
        <TabsContent value="password">
          <Minimalist_Theme />
        </TabsContent>
      </Tabs>

      {/* Desktop view (enhanced) */}
      <div className="hidden lg:block w-full h-screen bg-gray-100 overflow-hidden">
        {/* Header with controls */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary">Portfolio Builder</h1>

          <div className="flex items-center space-x-4">
            {showRightPanel && (
              <>
                <div className="h-6 border-r border-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setPreviewMode("mobile")}
                    className={`p-2 rounded-md ${
                      previewMode === "mobile"
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    title="Mobile view"
                  >
                    <SmartphoneIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPreviewMode("tablet")}
                    className={`p-2 rounded-md ${
                      previewMode === "tablet"
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    title="Tablet view"
                  >
                    <TabletIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      setShowLeftPanel(!showLeftPanel)
                      setPreviewMode("desktop")
                    }}
                    className={`p-2 rounded-md ${
                      previewMode === "desktop"
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    title="Desktop view"
                  >
                    <MonitorIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPreviewMode("auto")}
                    className={`p-2 rounded-md ${
                      previewMode === "auto"
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    title="Auto-responsive view"
                  >
                    <span className="text-xs font-medium">Auto</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main content area with resizable panels */}
        <div ref={containerRef} className="flex h-[calc(100vh-57px)] relative">
          {/* Editor panel */}
          {showLeftPanel && (
            <div
              className="bg-white border-r border-gray-200 overflow-hidden transition-width duration-300 ease-in-out"
              style={{ width: showRightPanel ? `${leftPanelWidth}%` : "100%" }}
            >
              <div className="h-full p-4">
                <FormStep />
              </div>
            </div>
          )}

          {/* Resizable divider */}
          {showLeftPanel && showRightPanel && (
            <div
              ref={dividerRef}
              className={`w-2 absolute top-0 bottom-0 bg-gray-200 hover:bg-blue-400 cursor-col-resize z-10 transform -translate-x-1/2 ${
                isResizing ? "bg-blue-400" : ""
              }`}
              style={{ left: `${leftPanelWidth}%` }}
              onMouseDown={handleMouseDown}
            />
          )}

          {/* Preview panel */}
          {showRightPanel && (
            <div
              ref={previewContainerRef}
              className="bg-gray-50 overflow-hidden transition-width duration-300 ease-in-out"
              style={{
                width: showLeftPanel ? `${100 - leftPanelWidth}%` : "100%",
              }}
            >
              <div className="h-full p-4 overflow-y-auto flex flex-col items-center">
                {/* Preview container with device frame */}
                <div
                  className={`relative flex-1 overflow-y-auto overflow-x-hidden ${
                    isMobilePreview || isTabletPreview
                      ? "border-2 border-gray-300 rounded-lg shadow"
                      : ""
                  }`}
                  style={{
                    width: previewSize.width,
                    maxHeight:
                      isMobilePreview || isTabletPreview ? "90%" : "100%",
                    transition: "width 0.3s ease",
                  }}
                >
                  {/* Device chrome indicators */}
                  {isMobilePreview && (
                    <div className="h-6 bg-gray-800 w-full flex justify-center items-center rounded-t-lg">
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  )}

                  {/* Preview content */}
                  <div
                    className={`${
                      isMobilePreview ? "h-[calc(100%-24px)]" : "h-full"
                    } overflow-y-auto`}
                    style={{
                      width: "100%",
                    }}
                  >
                    <iframe
                      src="/minimalist-theme" // Path to your preview page
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      title="Theme Preview"
                    />
                  </div>
                </div>

                {/* Preview width indicator */}
                <div className="mt-2 text-sm text-gray-500">
                  {previewMode === "auto"
                    ? `Current width: ${Math.round(previewWidth)}px (${
                        previewWidth < 640
                          ? "Mobile"
                          : previewWidth < 1024
                          ? "Tablet"
                          : "Desktop"
                      })`
                    : `${
                        previewMode.charAt(0).toUpperCase() +
                        previewMode.slice(1)
                      } view`}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UserDataPage
