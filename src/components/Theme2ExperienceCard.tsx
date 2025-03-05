export default function Theme2ExperienceCard() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 lg:p-4 hover:bg-gray-800 hover:shadow-md hover:cursor-pointer group rounded-md justify-start">
      <p className="text-gray-400 text-sm font-light whitespace-nowrap">
        2024-PRESENT
      </p>
      <div className="flex flex-col justify-between gap-4">
        <p className="font-semibold text-md text-white group-hover:text-cyan-500">
          Senior Frontend Engineer, Accessibility · Klaviyo
        </p>
        <p className="text-gray-400 group-hover:text-white text-sm">
          Build and maintain critical components used to construct Klaviyo’s
          frontend, across the whole product. Work closely with cross-functional
          teams, including developers, designers, and product managers, to
          implement and advocate for best practices in web accessibility.
        </p>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Javascript
          </button>
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            React
          </button>
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Typescript
          </button>
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Framer
          </button>

          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Shadcn
          </button>
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Typescript
          </button>
          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Framer
          </button>

          <button className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
            Shadcn
          </button>
        </div>
      </div>
    </div>
  )
}
