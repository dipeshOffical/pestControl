
import emailjs from 'emailjs-com';
import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        to_name: 'Business Owner', // Fixed value for receiver's name
        fullName: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        propertyType: '',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};

        // Validation for each field
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
        if (!formData.serviceType) errors.serviceType = "Service Type is required.";
        if (!formData.propertyType) errors.propertyType = "Property Type is required.";
        if (!formData.preferredDate) errors.preferredDate = "Preferred Date is required.";
        if (!formData.preferredTime) errors.preferredTime = "Preferred Time is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            emailjs.send(
                'service_oun9m7h',
            'template_hwwnokj',
            formData,
            'VwYyLtrGzBqnT0e1b',
            )
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                    setFormData({
                        to_name: 'Business Owner',
                        fullName: '',
                        email: '',
                        phone: '',
                        address: '',
                        serviceType: '',
                        propertyType: '',
                        preferredDate: '',
                        preferredTime: '',
                        additionalInfo: ''
                    });
                    setFormErrors({});
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text);
                })
                .finally(() => setIsSubmitting(false));
        }
    };

    return (
        <div className="max-w-5xl bg-[#F3F5FD] mx-auto my-12 py-12 px-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Fill The Form For Booking The Service
            </h2>
            <form className="bg-[#F3F5FD] md:grid grid-cols-2 gap-6">
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-700">
                        Service Type
                    </label>
                    <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Service Type</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {formErrors.serviceType && <p className="text-red-500 text-xs">{formErrors.serviceType}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="propertyType" className="block mb-2 text-sm font-medium text-gray-700">
                        Property Type
                    </label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Property Type</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {formErrors.propertyType && <p className="text-red-500 text-xs">{formErrors.propertyType}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="preferredDate" className="block mb-2 text-sm font-medium text-gray-700">
                        Preferred Date
                    </label>
                    <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formErrors.preferredDate && <p className="text-red-500 text-xs">{formErrors.preferredDate}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="preferredTime" className="block mb-2 text-sm font-medium text-gray-700">
                        Preferred Time
                    </label>
                    <input
                        type="time"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formErrors.preferredTime && <p className="text-red-500 text-xs">{formErrors.preferredTime}</p>}
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
                    {formErrors.additionalInfo && <p className="text-red-500 text-xs">{formErrors.additionalInfo}</p>}
                </div>


            </form>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>

        </div>
    );
};

export default BookingForm;





// import emailjs from 'emailjs-com';
// import { useState } from 'react';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         serviceType: '',
//         propertyType: '',
//         preferredDate: '',
//         preferredTime: '',
//         additionalInfo: '',
//         address: '',
//     });

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.send(
//             'service_oun9m7h',
//             'template_hwwnokj',
//             formData,
//             'VwYyLtrGzBqnT0e1b',

//         )
//             .then((result) => {
//                 console.log('Email sent successfully!', result.text);
//                 // Reset the form after successful submission
//                 setFormData({
//                     fullName: '',
//                     email: '',
//                     phone: '',
//                     serviceType: '',
//                     propertyType: '',
//                     preferredDate: '',
//                     preferredTime: '',
//                     additionalInfo: '',
//                     address: '',
//                 });
//             }, (error) => {
//                 console.error('Error sending email:', error.text);
//             });
//     };
//     return (
//         <div className="max-w-5xl bg-[#F3F5FD] mx-auto my-12 py-12 px-12">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//                 Fill The Form For Booking The Service
//             </h2>
//             <form className="bg-[#F3F5FD]  md:grid grid-cols-2 gap-6">
//                 <div className="mb-6">
//                     <label
//                         htmlFor="fullName"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Full Name
//                     </label>
//                     <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter your full name"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="email"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label
//                         htmlFor="address"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Address
//                     </label>
//                     <input
//                         type="address"
//                         id="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter your address"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="phone"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Phone Number
//                     </label>
//                     <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter your phone number"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="serviceType"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Service Type
//                     </label>
//                     <select
//                         id="serviceType"
//                         name="serviceType"
//                         value={formData.serviceType}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     >
//                         <option value="">Select Service Type</option>
//                         <option value="option1">Option 1</option>
//                         <option value="option2">Option 2</option>
//                         <option value="option3">Option 3</option>
//                     </select>
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="propertyType"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Property Type
//                     </label>
//                     <select
//                         id="propertyType"
//                         name="propertyType"
//                         value={formData.propertyType}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     >
//                         <option value="">Select Property Type</option>
//                         <option value="option1">Option 1</option>
//                         <option value="option2">Option 2</option>
//                         <option value="option3">Option 3</option>
//                     </select>
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="preferredDate"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Preferred Date
//                     </label>
//                     <input
//                         type="date"
//                         id="preferredDate"
//                         name="preferredDate"
//                         value={formData.preferredDate}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="preferredTime"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Preferred Time
//                     </label>
//                     <input
//                         type="time"
//                         id="preferredTime"
//                         name="preferredTime"
//                         value={formData.preferredTime}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label
//                         htmlFor="additionalInfo"
//                         className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                         Additional Information
//                     </label>
//                     <textarea
//                         id="additionalInfo"
//                         name="additionalInfo"
//                         value={formData.additionalInfo}
//                         onChange={handleInputChange}
//                         rows={3}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter any additional information"
//                     />
//                 </div>


//             </form>
//             <div className="flex justify-center">
//                 <button
//                     type="submit"
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default BookingForm;