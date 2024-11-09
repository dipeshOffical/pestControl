
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, socialLinks } from '../utils/static-data'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';


export default function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 ">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <img
              src={logo}
              alt="CT Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm lg:text-lg font-medium  hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div onClick={toggleMenu} className=' md:hidden'>
          <Menu/>
          </div>
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                to={social.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <img src={social.icon} alt="icon" />
              </Link>
            ))}
          </div>

          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <div onClick={toggleMenu} >
                  <X size={30} />
                </div>
              </div>
              <ul className="flex flex-col gap-4 p-4 font-semibold">
                
                {navLinks.map((option, index) => (
                  <li key={index}>
                    <NavLink
                      to={option.href}
                      className={({ isActive }) =>
                        isActive ? 'text-red-500  hover:text-gray-600 transition-colors block py-2' : 'text-gray-800 hover:text-gray-600 transition-colors block py-2 '
                      }

                      onClick={toggleMenu}
                    >
                      {option.label}
                    </NavLink>
                  </li>
                ))}

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}