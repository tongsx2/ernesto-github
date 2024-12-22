import { NavLink } from "react-router"

function Header() {
  return (
    <div className="bg-emerald-800 text-white p-4 font-serif  fixed h-20 w-full">
      <div className="flex justify-between items-center">
        <div className="text-5xl font-medium text-teal-400">E-Cart</div>
        
      <ul className="flex gap-4 text-2xl text-teal-400">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </ul>
      </div>
    </div>

  )
}

export default Header
