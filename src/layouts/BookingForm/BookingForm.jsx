
import { useState } from 'react';
import emailjs from "emailjs-com";
const BookingForm = () => {
    const [formData, setFormData] = useState({
        to_name: 'Business Owner',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        // serviceType: '',
        // ServiceCategory: '',
        // propertyType: '',
        // preferredDate: '',
        // preferredTime: '',
        additionalInfo: '',
    });
    const [isCleaning, setIsCleaning] = useState(true)
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {



                // Send email using EmailJS
                await emailjs.send(
                    'service_oun9m7h',       // Your EmailJS service ID
                    'template_hwwnokj', // Replace with your EmailJS template ID
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
                            phone: '',
                            address: '',
                            // serviceType: '',
                            // ServiceCategory: '',
                            // propertyType: '',
                            // preferredDate: '',
                            // preferredTime: '',
                            additionalInfo: '',
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

        if (!formData.phone) {
            errors.phone = "Phone Number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone Number must be 10 digits.";
        }

        if (!formData.address) errors.address = "Address is required.";
        // if (!formData.serviceType) errors.serviceType = "Service Type is required.";
        // if (!formData.ServiceCategory) errors.ServiceCategory = " ServiceCategory is required.";
        // if (!formData.propertyType) errors.propertyType = "Property Type is required.";
        // if (!formData.preferredDate) errors.preferredDate = "Preferred Date is required.";
        // if (!formData.preferredTime) errors.preferredTime = "Preferred Time is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-5xl bg-[#F3F5FD] mx-auto my-12 py-12 px-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Fill The Form For Booking The Service
            </h2>
            <form onSubmit={handleSubmit} className="bg-[#F3F5FD] md:grid grid-cols-2 gap-6">
                <div className="mb-6">
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter your full name"
                    />
                    {formErrors.fullName && <p className="text-red-500 text-xs">{formErrors.fullName}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                    />
                    {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your address"
                    />
                    {formErrors.address && <p className="text-red-500 text-xs">{formErrors.address}</p>}
                </div>



                <div className="mb-6">
                    <label htmlFor="additionalInfo" className="block mb-2 text-sm font-medium text-gray-700">
                        Additional Information
                    </label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter any additional information"
                    />

                </div>

                <div className="flex justify-center col-span-2">
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;