export default function Theme2ProjectCard() {
  return (
    <>
      <div className="hidden relative lg:grid items-center gap-10 grid-cols-12 pr-24">
        {/* Project Image (changes position based on even/odd) */}
        <div
          className={`relative col-span-12 md:col-span-7 rounded-md overflow-hidden shadow-md md:col-start-1
      }`}
        >
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="absolute w-full h-full bg-navy-700 bg-opacity-70 hover:bg-opacity-0 z-10 transition-all duration-1000 bg-cyan-900 bg-blend-overlay opacity-70 hover:opacity-0 " />
            <img
              src="/movieAppThumbnail.PNG"
              alt="project title"
              className="w-full object-cover"
            />
          </a>
        </div>

        {/* Project Content (changes position based on even/odd) */}
        <div
          className={`relative col-span-12 md:col-span-7 md:col-start-6 md:text-right md:absolute md:top-1/2 md:-translate-y-1/2 z-10
        }`}
        >
          <p className="font-mono text-cyan-400 text-sm mb-2">
            Featured Project
          </p>
          <h3 className="text-2xl font-semibold text-slate-200 mb-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-500"
            >
              Movie Ticket Booking App
            </a>
          </h3>

          {/* Description box with shadow */}
          <div className="bg-cyan-900 p-4 rounded-md shadow-lg text-slate-400 font-medium mb-4">
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>

          {/* Tech stack */}
          <ul
            className={`flex flex-wrap text-xs text-slate-400 font-mono mb-8 gap-4 md:justify-end
          }`}
          >
            <li>React</li>
            <li>Typescript</li>
            <li>Nextjs</li>
            <li>Atom</li>
          </ul>

          {/* Links */}
          <div
            className={`flex items-center gap-4 md:justify-end
          }`}
          >
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-green-400 transition-colors duration-200"
              aria-label="GitHub Repository"
            >
              {/* <FiGithub size={20} /> */}
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-green-400 transition-colors duration-200"
              aria-label="Live Site"
            >
              {/* <FiExternalLink size={20} /> */}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden hover:bg-gray-800 hover:shadow-md hover:cursor-pointer group rounded-md justify-start">
        <img
          alt="movie-ticket-booking-app-thumbnail"
          loading="lazy"
          className="w-32 h-18 object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
          style={{ color: "transparent" }}
          src="/movieAppThumbnail.PNG"
        />
        <div className="flex flex-col justify-between gap-4">
          <p className="font-semibold text-md text-white group-hover:text-teal-500">
            Movie Ticket Booking App
          </p>
          <p className="text-gray-400 group-hover:text-white text-sm">
            Built a realtime movie ticket booking web-app which can handle
            concurrent bookings.
          </p>

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              Javascript
            </button>
            <button className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              React
            </button>
            <button className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              Typescript
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
