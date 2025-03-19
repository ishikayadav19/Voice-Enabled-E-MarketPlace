import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="mb-2 flex items-center justify-between py-2 md:py-2 md:px-6 ">
        {/* logo - start */}
        <a
  href="/"
  className="inline-flex items-center text-2xl font-bold text-black md:text-3xl mx-8"
  aria-label="logo"
>
  <img
    src="/Talk&Buy.png"
    alt="Talk&Buy Logo"
    className="h-20 w-auto"
  />
  
        </a>

        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex bg-black px-8 py-4 rounded-lg shadow-xl border border-gray-700">
  <a href="#" className="text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:text-gray-300 hover:px-4 hover:py-2 rounded-md">
    Home
  </a>
  <a href="#" className="text-lg font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:px-4 hover:py-2 rounded-md">
    Women
  </a>
  <a href="#" className="text-lg font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:px-4 hover:py-2 rounded-md">
    Men
  </a>
  <a href="#" className="text-lg font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:px-4 hover:py-2 rounded-md">
    Kids
  </a>
  <a href="#" className="text-lg font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:px-4 hover:py-2 rounded-md">
    Offers
  </a>
  <a href="#" className="text-lg font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-gray-800 to-gray-600 hover:px-4 hover:py-2 rounded-md">
    About
  </a>
</nav>
{/* nav - end */}
{/* buttons - start */}
<a
  href="/login"
  className="hidden rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-lg outline-none ring-gray-500 transition-all duration-300 hover:from-gray-700 hover:to-gray-500 hover:px-10 hover:py-4 hover:scale-105 hover:shadow-2xl focus-visible:ring md:text-base  lg:inline-block"
>
  Login
</a>

<button
  type="button"
  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-gray-500 transition-all duration-300 hover:from-gray-700 hover:to-gray-500 hover:px-6 hover:py-3 hover:scale-105 hover:shadow-2xl focus-visible:ring md:text-base lg:hidden"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
  Menu
</button>

<a
  href="#"
  className="hidden rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-lg outline-none ring-gray-500 transition-all duration-300 hover:from-gray-700 hover:to-gray-500 hover:px-10 hover:py-4 hover:scale-105 hover:shadow-2xl focus-visible:ring md:text-base lg:inline-block"
>
  Go To Cart
</a>

<button
  type="button"
  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-gray-500 transition-all duration-300 hover:from-gray-700 hover:to-gray-500 hover:px-6 hover:py-3 hover:scale-105 hover:shadow-2xl focus-visible:ring md:text-base lg:hidden"
>
</button>
{/* buttons - end */}
      </header>
    </div>
  )
}

export default Navbar