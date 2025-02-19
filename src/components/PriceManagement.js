import React from "react";
import { useState } from 'react';

function PriceManagement() {
    const baseTourists = 50;
    const [tourists, setTourists] = useState(baseTourists);

    // Calculate the price based on number of tourists
    const calculatePrice = (tourists) => {
        let price = 0;

        if (tourists <= 50) {
            price = 250; // 50 tourists = 250 GEL
        } else if (tourists <= 100) {
            // Between 50 and 100, price increases 5 GEL per tourist
            price = 250 + (tourists - 50) * 5;
        } else if (tourists <= 150) {
            // Between 100 and 150, price increases 2 GEL per tourist
            price = 500 + (tourists - 100) * 2;
        } else if (tourists <= 200) {
            // Between 150 and 200, price increases 1 GEL per tourist
            price = 600 + (tourists - 150) * 1;
        } else if (tourists <= 250) {
            // Between 200 and 250, price increases 1 GEL per tourist
            price = 650 + (tourists - 200) * 1;
        } else if (tourists <= 300) {
            // Between 250 and 300, price increases 1 GEL per tourist
            price = 700 + (tourists - 250) * 1;
        } else {
            // If more than 300 tourists, continue to increase by 1 GEL per tourist
            price = 750 + (tourists - 300) * 1;
        }

        return price.toFixed(2); // Return price with 2 decimal places
    };

    // Function to format time from minutes to days, hours, and minutes
    // const formatTime = (minutes) => {
    //     const days = Math.floor(minutes / 1440); // 1 day = 1440 minutes
    //     let hours = Math.floor((minutes % 1440) / 60); // Calculate hours
    //     const mins = minutes % 60; // Remaining minutes

    //     // Convert hours beyond 8 into additional days
    //     const additionalDays = Math.floor(hours / 8);
    //     const remainingHours = hours % 8; // Remaining hours after converting to days

    //     const totalDays = days + additionalDays; // Total days including additional days

    //     let result = [];
    //     if (totalDays > 0) result.push(`${totalDays} დღე`);
    //     if (remainingHours > 0) result.push(`${remainingHours} საათი`);
    //     if (mins > 0) result.push(`${mins} წუთი`);

    //     return result.join(' და ').replace(/და$/, '').trim();
    // };

    return (
        <div className="py-16 bg-gray-200 px-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">ფასების პოლიტიკა</h2>
            <div className="mb-4">
                <label htmlFor="tourists" className="block text-sm font-medium text-gray-700">ტურისტების რაოდენობა</label>
                <input
                    type="number"
                    id="tourists"
                    value={tourists}
                    onChange={(e) => setTourists(Number(e.target.value))}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="text-lg font-semibold">
                შექმნილი დოკუმენტი <span className="text-green-600">{(tourists * 3)} </span>
            </div>
            <div className="text-lg font-semibold">
                სრული ფასი <span className="text-green-600">{calculatePrice(tourists)} GEL</span>
            </div>
            {/* <div className="text-lg font-semibold">
                დაზოგილი დრო <span className="text-green-600">{formatTime(tourists * 10)}</span>
            </div> */}
        </div>
    );
}

export default PriceManagement;
