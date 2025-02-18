import React from "react";

const ServiceOverview = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    როგორ მუშაობს ჩვენი სერვისი
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            1. ტურისტების მონაცემთა ბაზის მოწოდება
                        </h3>
                        <p className="text-gray-700">
                            თქვენ გაგვიზიარებთ ტურისტების მონაცემთა ბაზას, რომელიც აუცილებელია ვაუჩერებისა და ინვოისების შესაქმნელად.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            2. დოკუმენტების გენერაცია
                        </h3>
                        <p className="text-gray-700">
                            ჩვენი პროგრამა ავტომატურად ქმნის ვაუჩერებსა და ინვოისებს ზუსტი და დროული მონაცემებით.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            3. სწრაფი და ეფექტური პროცესი
                        </h3>
                        <p className="text-gray-700">
                            დაზოგეთ დრო და რესურსები ჩვენი სერვისით, რომელიც გამარტივებს დოკუმენტების შექმნის პროცესს.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            4. სრული დაცვა და გამჭვირვალობა
                        </h3>
                        <p className="text-gray-700">
                            ჩვენ უზრუნველვყოფთ, რომ ყველა დოკუმენტი იყოს დაცული და მზად შემოსავლების სამსახურის შემოსვლისთვის.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            5. გრძელვადიანი პარტნიორობა
                        </h3>
                        <p className="text-gray-700">
                            ჩვენთან თანამშრომლობა ნიშნავს მუდმივ მხარდაჭერას თქვენი დოკუმენტაციის მართვაში.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
