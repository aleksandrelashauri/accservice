import React, { useState, useRef } from 'react';
// import aboutImg from '../Assets/about.jpg';
import aboutUsImg from '../Assets/aboutus.jpg';
// import contactImg from '../Assets/contact.jpg';
import brainHouseLogo from '../Assets/logo-accservice.png';
import ServiceOverview from './ServiceOverview';
import ContactForm from '../components/ContactForm';
import PriceManagement from '../components/PriceManagement';

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
        <div>
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
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[rgb(45,40,98)]">
                                {currentSlide === 0 ? "რატომ ჩვენ?" : "მართვის ბარათი"}
                            </h2>
                            <p className="text-xl md:text-2xl mb-8 text-[rgb(253,224,71)]">
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
                                className="bg-[rgb(45,40,98)] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
                            >
                                <span>
                                    {currentSlide === 0 ? "გაიგეთ მეტი" : "hai"}
                                </span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation arrows - updated styling */}
                    {/* <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-50 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75 z-20 text-xl md:text-2xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='blue' class="transform scale-150">
                            <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75 z-20 text-xl md:text-2xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='blue' class="transform scale-150">
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>


                    </button> */}
                </div>
            </div>
            <section ref={serviceOverviewRef} className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">aservice...</h2>
                    <div className="space-y-3 md:space-y-4">
                        <p className="text-base md:text-lg">კომუნიკაცია ადვილია!</p>
                        <p className="text-base md:text-lg">დოკუმენტების დამზადება შესაძლებელია ნებისმიერი ქვეყნიდან, ქალაქიდან ან სოფლიდან!</p>
                        <p className="text-base md:text-lg">დოკუმენტები ყოველთვის ხელმისაწვდომია!</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={brainHouseLogo}
                        alt="acc service  Logo"
                        className="max-w-[250px] md:max-w-md"
                    />
                </div>
            </section>
            <ServiceOverview />
            <div className='flex  align-center justify-center'>
                <ContactForm />
                <PriceManagement />
            </div>
        </div>
    );
}

export default Main;