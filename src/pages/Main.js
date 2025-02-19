import React, { useState, useRef } from 'react';
// import aboutImg from '../Assets/about.jpg';
import aboutUsImg from '../Assets/aboutus.jpg';
// import contactImg from '../Assets/contact.jpg';
import brainHouseLogo from '../Assets/logo-accservice.png';
import ServiceOverview from './ServiceOverview';
import ContactForm from '../components/ContactForm';
import PriceManagement from '../components/PriceManagement';
// import WhyWorkOurService from './WhyWorkOurService';
import { Link } from 'react-router-dom';

function Main() {
    // Add state for tracking current slide
    const [currentSlide,
        // setCurrentSlide
    ] = useState(0);
    const serviceOverviewRef = useRef(null);

    // Updated array with imported images
    const images = [aboutUsImg,];

    // Navigation functions
    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % images.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // };

    const scrollToServices = () => {
        if (serviceOverviewRef.current) {
            serviceOverviewRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col">
            <div className="w-full h-[calc(100vh-theme(spacing.16))]">
                {/* Carousel container */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Image container */}
                    <div className="relative w-full h-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover blur-md"
                                />
                            </div>
                        ))}

                        {/* Overlay text container */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[rgb(45,40,98)]">
                                {currentSlide === 0 ? "რატომ ჩვენ?" : "მართვის ბარათი"}
                            </h2>
                            <p className="text-lg md:text-xl mb-8 text-[rgb(253,224,71)]">
                                {currentSlide === 0 ? "" : "ჩვენ ვასწავლით ონლაინ უმარტივესი მეთოდებით"}
                            </p>
                            <button
                                onClick={() => {
                                    if (currentSlide === 0) {
                                        scrollToServices();
                                    } else {
                                        const paths = ['/theory-course', '/about-us', '/login'];
                                        window.location.href = paths[currentSlide];
                                    }
                                }}
                                className="bg-[rgb(45,40,98)] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
                            >
                                <span>
                                    {currentSlide === 0 ? "გაიგეთ მეტი" : "hai"}
                                </span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section ref={serviceOverviewRef} className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">aservice...</h2>
                    <div className="space-y-2 md:space-y-3">
                        <p className="text-base md:text-lg">კომუნიკაცია ადვილია!</p>
                        <p className="text-base md:text-lg">დოკუმენტების დამზადება შესაძლებელია ნებისმიერი ქვეყნიდან, ქალაქიდან ან რეგიონიდან!</p>
                        <p className="text-base md:text-lg">დოკუმენტები ყოველთვის ხელმისაწვდომია!</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={brainHouseLogo}
                        alt="acc service Logo"
                        className="max-w-[200px] md:max-w-md"
                    />
                </div>
            </section>
            <div className='flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-6'>
                {/* Title */}
                <h1 className='text-lg font-semibold text-gray-800 text-center md:text-left'>
                    რატომ გჭირდება ჩვენი სერვისი
                </h1>

                {/* Button */}
                <Link
                    to={'/why'}
                    className="animate-bounce bg-[rgb(45,40,98)] text-white px-6 py-3 rounded-full shadow-md hover:bg-opacity-90 hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                    გაიგეთ მეტი
                </Link>
            </div>


            <ServiceOverview />
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <ContactForm />
                <PriceManagement />
            </div>
        </div>
    );
}

export default Main;