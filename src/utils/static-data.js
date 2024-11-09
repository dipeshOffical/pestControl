import { House, Sprout,  } from 'lucide-react';
import blogImage from '../assets/blogImage.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import testimonialImage from '../assets/testimonialImage.png'
import teamImage from '../assets/whyChoose1.png'

export   const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Service" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export const socialLinks = [
  { href: "https://www.facebook.com/people/Opal-Pest-Control-Cleaning/61568205753687/?mibextid=LQQJ4d", icon: facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: insta, label: "Instagram" },
  { href: "https://linkedin.com", icon: linkedin, label: "LinkedIn" },
]

export  const services = [
  {
    icon: House,
    title: "House Cleaning",
    description: "Comprehensive cleaning for a spotless and healthy living space."
  },
  {
    icon: Sprout,
    title: "Floor Cleaning",
    description: "Specialized treatments to keep floors shiny and clean."
  },
  {
    icon: Sprout,
    title: "Cockroach Control",
    description: "Swift and effective solutions to eliminate cockroach infestations."
  },
  {
    icon: House,
    title: "Bedbug Treatment",
    description: "Sleep soundly with our guaranteed bedbug eradication services."
  },
  {
    icon: Sprout,
    title: "Spider Control",
    description: "Comprehensive spider control to keep your home safe."
  },
  {
    icon: Sprout,
    title: "Rodent/Mice Control",
    description: "Safeguard your space from harmful rodents with our proven methods."
  },
  {
    icon: Sprout,
    title: "General Pest Management",
    description: "Covering all common pests to maintain a healthy environment."
  },
  {
    icon: Sprout,
    title: "Tiles & Marble Cleaning and Polishing",
    description: "Enhance the shine and cleanliness of your floors."
  },
  {
    icon: Sprout,
    title: "Carpet and Gailaicha Cleaning",
    description: "Deep cleaning for carpets, ensuring a fresh appearance."
  },
  {
    icon: Sprout,
    title: "Sofa Cleaning",
    description: "Upholstery cleaning to remove stains and dirt effectively."
  },
  {
    icon: Sprout,
    title: "Complete Domestic & Commercial Cleaning",
    description: "Customized cleaning solutions for any space."
  }
];


export const blogPosts = [
  {
    image: blogImage,
    date: "JAN 6, 2024",
    title: "Eco-Friendly Pest Control: How We Keep Your Home Safe",
    excerpt: "Learn about our commitment to using non-toxic, environmentally friendly products that are safe for your family and pets."
  },
  {
    image: blogImage,
    date: "JAN 7, 2024",
    title: "The Benefits of Regular Pest Control Services",
    excerpt: "Discover why scheduling regular pest inspections and treatments can save you time, money, and stress in the long run."
  },
  {
    image: blogImage,
    date: "JAN 8, 2024",
    title: "Expert Tips for Keeping Your Home Pest-Free",
    excerpt: "Our technicians share their best advice for preventing common pests from invading your space."
  }
];


  export  const stats = [
    {
      number: "567+",
      label: "Happy Customers"
    },
    {
      number: "48",
      label: "Team Members"
    },
    {
      number: "26",
      label: "Award Winning"
    },
    {
      number: "759+",
      label: "Project Complete"
    }
  ];
  export  const teamMembers = [
      {
        name: 'Joon Rai',
        email: 'info@rai.com.au',
        image: teamImage,
      },
      {
        name: 'Joon Rai',
        email: 'info@rai.com.au',
        image: teamImage,
      },
      {
        name: 'Joon Rai',
        email: 'info@rai.com.au',
        image: teamImage,
      },
      {
        name: 'Joon Rai',
        email: 'info@rai.com.au',
        image: teamImage,
      },
  ];

  export const testimonials = [
    {
      image: testimonialImage,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      rating: 4
    },
    {
      image: testimonialImage,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      rating: 4
    },
    {
      image:testimonialImage,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      rating: 4
    },
    {
      image: testimonialImage,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      rating: 4
    }, {
      image:testimonialImage,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      rating: 4
    },
    // Add more testimonials as needed
  ];