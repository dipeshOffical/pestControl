
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { navLinks, socialLinks } from '../utils/static-data'

export default function Header() {
  
  return (
    <header className="border-b">
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
                <img src={social.icon} alt="icon"  />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}