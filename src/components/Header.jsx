
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import logo from '../assets/logo.png'

export default function Header() {
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/service", label: "Service" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://facebook.com", icon: facebook, label: "Facebook" },
    { href: "https://instagram.com", icon: insta, label: "Instagram" },
    { href: "https://linkedin.com", icon: linkedin, label: "LinkedIn" },
  ]

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 ">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="CT Logo"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm lg:text-lg font-medium  hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <img src={social.icon} alt="icon"  />
              </a>
            ))}
          </div>

    
        </nav>
      </div>
    </header>
  )
}