import { Link } from "react-router-dom"

export default function Theme2Footer() {
  return (
    <>
      <hr className="border-2 border-gray-600" />
      <footer className="py-6 flex justify-center items-center bg-slate-950 gap-20">
        <Link to="/" className="text-white">
          Ldgfs
        </Link>
        <Link to="/" className="text-white">
          L
        </Link>
        <Link to="/" className="text-white">
          L
        </Link>
        <Link to="/" className="text-white">
          L
        </Link>
      </footer>
    </>
  )
}
