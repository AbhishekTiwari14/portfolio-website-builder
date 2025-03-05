import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { BackgroundStars } from "./BackgroundStars"

export default function Hero() {
  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      <BackgroundStars />
      <div
        className="h-full w-full grid absolute"
        style={{
          background: `
          repeating-linear-gradient(
            45deg,
            #070707 0px,
            #070707 2px,
            transparent 2px,
            transparent 6px
          )
        `,
        }}
      >
        <div
          className="h-full w-full col-start-1 row-start-1"
          style={{
            background: `radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0) 60%
          )`,
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
            DevFolio
          </h1>
          <p className="text-2xl text-slate-200 mb-4 tracking-tight">
            Code Less, Showcase More!
          </p>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl text-center mx-2">
            Create stunning developer portfolios in minutes. Choose from our
            professionally designed templates and make them yours.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:cursor-pointer"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:cursor-pointer"
            >
              View Templates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
