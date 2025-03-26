import { useDispatch, useSelector } from "react-redux"
import Creative_Theme from "./Ceative_Theme"
import Minimalist_Theme from "./Minimalist_Theme"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { setPalette, setTheme } from "@/utils/slices/themeSlice"
import { RootState } from "@/utils/store"
import PalettePicker from "./PalettePicker"
import { themes } from "@/lib/themeConfig"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export default function ShowTemplates() {
  const dispatch = useDispatch()
  const { currentTheme, currentPalette } = useSelector(
    (state: RootState) => state.theme
  )

  const palettes = themes[currentTheme].palettes

  const handleThemeChange = (value: string) => {
    dispatch(setTheme(value))
  }

  const handlePaletteChange = (value: string) => {
    dispatch(setPalette(value))
  }
  return (
    <>
      <div className="z-40 p-4 flex justify-center gap-12 relative">
        <div>
          <label className="block mb-2 text-sm font-medium">Theme</label>
          <Select value={currentTheme} onValueChange={handleThemeChange}>
            <SelectTrigger className="w-[180px] hover:cursor-pointer">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="minimalist">Minimalist</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Palette</label>
          <Select value={currentPalette} onValueChange={handlePaletteChange}>
            <SelectTrigger className="w-full hover:cursor-pointer">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(palettes).map((p) => (
                  <SelectItem
                    key={p}
                    value={p}
                    className="flex items-center gap-2"
                  >
                    <PalettePicker
                      currentPalette={p}
                      currentTheme={currentTheme}
                    />
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Link to="/pane" className="flex justify-end">
          <Button className="self-end">Proceed</Button>
        </Link>
      </div>
      {currentTheme === "creative" && <Creative_Theme />}
      {currentTheme === "minimalist" && <Minimalist_Theme />}
    </>
  )
}
