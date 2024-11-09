import emailjs from "emailjs-com";
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    to_name :'Admin',
    fullName: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send email using EmailJS
        await emailjs.send(
          'service_oun9m7h',
          'template_jgwvtbx', // Replace with your EmailJS template ID
          formData,
          'VwYyLtrGzBqnT0e1b' // Replace with your EmailJS public key
        )
          .then((response) => {
            console.log("Email sent successfully:", response);
            alert("Mail sent successfully");

            // Reset form data if needed
            setFormData({
              fullName: '',
              email: '',
              message: '',
            });
            setFormErrors({});
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      } catch (error) {
        console.error("Error handling the attachment or email:", error);
      }
    }
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.fullName) errors.fullName = "Full Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }


    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
       setFormData((prev) => ({ ...prev, [name]: value }));
  };  

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8 rounded-lg overflow-hidden">
        {/* Contact Information Section */}
        <div className="bg-blue-900 p-8 text-white">
          <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <span>02 1234 5678</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <span>contact@.com.au</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <span>Level 2, 28 Memorial Avenue, Liverpool NSW 2170</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Clock className="h-6 w-6" />
              </div>
              <span>10:00 AM-6:00 PM</span>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-4">follow us on Social media:</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                <div className="bg-white/10 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="bg-white/10 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="bg-white/10 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#F3F5FD] p-8">
          <h2 className="text-2xl font-bold mb-8">How Can We Assist You?</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name='fullName'
                className="w-full"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {formErrors.fullName && <p className="text-red-500 text-xs">{formErrors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name='email'
                className="w-full"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name='message'
                className="min-h-[150px] w-full"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}