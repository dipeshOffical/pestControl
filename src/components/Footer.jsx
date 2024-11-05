
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Button from "./Button"
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-14">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-3">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Safenest Logo"
              className="h-15 w-auto mb-6"
            />
            <p className="text-blue-100/80 max-w-sm">
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-blue-100/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-blue-100/80 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-blue-100/80 hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100/80">+977 986 23 653 77</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a
                  href="mailto:Safenest12@gmail.com"
                  className="text-blue-100/80 hover:text-white transition-colors"
                >
                  Safenest12@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100/80">Melbourne, Australia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Goes here"
                className="bg-primary border-2 px-4 py-2  rounded-lg text-white placeholder:text-blue-200/50"
              />
              <div>
                <div className="relative w-[13rem]">
                <Button text={'Subscribe'} style={"w-full bg-yellow-400 hover:bg-yellow-500 text-white flex items-center justify-center gap-2"}/>
                
                <ArrowRight className="h-7 w-7 absolute top-[.5rem] right-3 " />
                </div>
              
              </div>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t-2 border-t-white border-blue-800/50 text-center text-blue-100/60">
          <p>2024 "Safenest" All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}