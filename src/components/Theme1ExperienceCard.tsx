import { getActiveColors } from "@/lib/themeConfig"
import { useSelector } from "react-redux"

export default function Theme1ExperienceCard() {
  const colors = useSelector(getActiveColors)
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-8 lg:p-4 ${colors.cardHover} hover:shadow-md hover:cursor-pointer group rounded-md justify-start`}
    >
      <p className={`${colors.secondary} text-sm font-light whitespace-nowrap`}>
        2024-PRESENT
      </p>
      <div className="flex flex-col justify-between gap-4">
        <p
          className={`font-semibold text-md ${colors.primary} ${colors.groupHover}`}
        >
          Senior Frontend Engineer, Accessibility · Klaviyo
        </p>
        <p
          className={`${colors.secondary} group-hover:${colors.primary} text-sm`}
        >
          Build and maintain critical components used to construct Klaviyo’s
          frontend, across the whole product. Work closely with cross-functional
          teams, including developers, designers, and product managers, to
          implement and advocate for best practices in web accessibility.
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Javascript
          </button>
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            React
          </button>
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Typescript
          </button>
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Framer
          </button>

          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Shadcn
          </button>
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Typescript
          </button>
          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Framer
          </button>

          <button
            className={`flex items-center rounded-full ${colors.btn} px-3 py-1 text-xs font-medium leading-5`}
          >
            Shadcn
          </button>
        </div>
      </div>
    </div>
  )
}
