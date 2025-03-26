import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import BackgroundWithLines from "./BackgroundWithLines"
import Theme2AboutSection from "./Theme2AboutSection"
import Theme2ExperienceCard from "./Theme2ExperienceCard"
import Theme2ProjectCard from "./Theme2ProjectCard"
import Theme2Footer from "./Theme2Footer"
import { useSelector } from "react-redux"
import { getActiveColors } from "@/lib/themeConfig"
import { RootState } from "@/utils/store"
import { usePanelWidth } from "@/hooks/usePanelWidth"

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "Merhaba",
  "안녕하세요",
  "你好",
  "Привет",
  "नमस्ते  🙏",
]

export default function Creative_Theme() {
  const [index, setIndex] = useState(0)
  const [showEffect, setShowEffect] = useState(true)
  const userData = useSelector((state: RootState) => state.userData.data)

  useEffect(() => {
    if (index < greetings.length) {
      let delay = 1000
      if (index > 0 && index < 9) delay = 150
      if (index === 9) delay = 900
      const timer = setTimeout(() => setIndex((prev) => prev + 1), delay)
      return () => clearTimeout(timer)
    } else {
      const fadeOutTimer = setTimeout(() => setShowEffect(false), 1000)
      return () => clearTimeout(fadeOutTimer)
    }
  }, [index])

  const colors = useSelector(getActiveColors)
  const { elementRef, currentBreakpoint } = usePanelWidth()

  const isLargePanel = currentBreakpoint === "lg" || currentBreakpoint === "xl"

  return (
    <div className={`h-full w-full bg-${colors.bg2}`}>
      <AnimatePresence>
        {showEffect && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black text-white text-6xl font-bold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <motion.span
              key={index}
              initial={index === 0 ? { y: 20, opacity: 0 } : { opacity: 0 }}
              animate={index === 0 ? { y: 0, opacity: 1 } : { opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {greetings[index]}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {!showEffect && (
        <>
          <BackgroundWithLines />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-full w-full">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, damping: 0.3 }}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center space tracking-wider text-white"
            >
              {userData.firstName ? userData.firstName : "ABHISHEK TIWARI"}
            </motion.h1>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, damping: 0.3 }}
              className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-white text-center md:tracking-wide lg:tracking-widest mt-5"
            >
              FRONT-END DEVELOPER, UI-ENGINEER, & DESIGNER
            </motion.h3>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            {" "}
          </div>
          <Theme2AboutSection />

          <div className="bg-slate-950 px-12 md:px-16 lg:px-24 pt-20">
            <p className="text-slate-200 text-md sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap pb-8">
              Experience
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <Theme2ExperienceCard />
              <Theme2ExperienceCard />
              <Theme2ExperienceCard />
            </div>
          </div>
          <div className="bg-slate-950 px-12 md:px-16 lg:px-24 py-20">
            <p className="text-slate-200 text-md sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap pb-8">
              Projects
            </p>
            <div className="flex flex-col justify-center items-center gap-40">
              <Theme2ProjectCard />
              <Theme2ProjectCard />
              <Theme2ProjectCard />
            </div>
          </div>
          <Theme2Footer />
        </>
      )}
    </div>
  )
}
