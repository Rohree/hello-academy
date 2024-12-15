import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold">Hello Academy </h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header