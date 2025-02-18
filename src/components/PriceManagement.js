import { useState } from 'react';

function PriceManagement() {
    const basePrice = 499; // 500 GEL for 100 tourists
    const baseTourists = 100;
    const [tourists, setTourists] = useState(baseTourists);

    // Calculate the price based on number of tourists
    const calculatePrice = (tourists) => {
        let price = basePrice * (tourists / baseTourists); // Calculate based on 100 tourists base
        if (tourists > baseTourists) {
            const extraTourists = tourists - baseTourists;
            price += price * (0.1 * Math.floor(extraTourists / 20)); // 10% increase for each additional 20 tourists
        }
        return price.toFixed(2);
    };

    return (
        <div className="py-16 bg-gray-200  px-16">
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
                შექმნილი დოკუმენტი  <span className="text-green-600">{(tourists * 2)} </span>
            </div>
            <div className="text-lg font-semibold">
                სრული ფასი <span className="text-green-600">{calculatePrice(tourists)} GEL</span>
            </div>
        </div>
    );
}

export default PriceManagement;
