import React from "react";
import Logo from '../Assets/minilogo-accservice.png';

function Footer() {
    return (
        <footer className="text-white p-8 mt-4 bg-[#2d2862] rounded-none ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-around gap-8">
                    <div>
                        <a className="text-xl flex justify-center sm:justify-start gap-2 text-white no-underline pb-1" href="/">
                            <img src={Logo} alt="company ogo" width="40" height="40" />
                            <h5 className="font-bold my-auto">aservice</h5></a>
                        <ul>
                            <div><a className="mt-2 text-yellow-500 hover:text-yellow-600 duration-100"
                                title="წესები, პირობები და მონაცემთა დაცვა" href="/policy">წესები, პირობები და მონაცემთა დაცვა</a>
                            </div>
                            {/* <div><a href="/buy-course"><p className="mt-3 text-yellow-500  hover:text-yellow-600 duration-150">თეორიის კურსის შეძენა</p></a></div> */}
                            <div><a href="/about"><p className="mt-3 text-yellow-500  hover:text-yellow-600 duration-150">ჩვენ შესახებ</p></a></div>
                            {/* <div><a href="/theory-info"><p className="mt-3 text-yellow-500  hover:text-yellow-600 duration-150">თეორიული კურსი</p></a></div> */}
                        </ul>
                    </div>
                    <div className='flex flex-col min-w-60 text-white gap-2'>
                        <p className="text-2xl font-bold text-center sm:text-left pl-1 border-b-2 border-orange-500">კონტაქტი</p>
                        <div className="flex text-yellow-400 w-full items-center gap-2 mt-2 justify-center sm:justify-start"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 19a6.995 6.995 0 0 1 10-6.32V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"></path></svg>brainhouseedu@gmail.com</div>
                        <div className="flex text-yellow-400 w-full items-center gap-2 mt-2 justify-center sm:justify-start"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"></path></svg>+995 599 79 57 67</div>
                        <div className='flex text-blue-500 items-center w-full  mt-1 justify-center sm:justify-start'>  <a href="https://www.facebook.com/Brain.House.Geo" target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-3 ">
                            {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M400 32H48A48 
                                48 0 0 0 0 80v352a48 48 0
                                0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 
                                93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81
                                 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48
                                  48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                            </svg> */}
                        </a>
                        </div>
                    </div>
                </div>
                <div className="flex text-gray-400 w-full justify-center gap-2 mt-12 font-mono">© 2024 ყველა უფლება დაცულია</div>
            </div>
            <div className="flex items-center">
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                </svg> */}
            </div>

        </footer>
    );
}

export default Footer;

