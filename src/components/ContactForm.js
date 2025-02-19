import React, { useState, useEffect } from "react";
// import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the email using EmailJS
        window.emailjs
            .send(
                "service_vwf504h", // Replace with your EmailJS service ID
                "template_8pn6qji", // Replace with your EmailJS template ID
                formData,
                "iM9g2J4x_uoPANV_j" // Replace with your EmailJS user ID
            )
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                alert("Email sent successfully!");
            })
            .catch((error) => {
                console.error("Failed to send email. Please try again.", error);
                alert("Failed to send email. Please try again.");
            });
    };

    useEffect(() => {
        window.emailjs.init("iM9g2J4x_uoPANV_j"); // Initialize EmailJS with your user ID
    }, []);

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    გამოგვიგზავნეთ ინფორმაცია
                </h2>
                <form
                    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="companyName">
                            კომპანიის სახელი
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            ელ.ფოსტა
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                            ტელეფონი
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                            დამატებითი ინფორმაცია
                        </label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            გაგზავნა
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
