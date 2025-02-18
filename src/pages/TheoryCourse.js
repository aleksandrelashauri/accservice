import React, { useState, useEffect } from 'react';

function TheoryCourse() {
    const [assets, setAssets] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [imageFiles, setImageFiles] = useState([]);

    const [selectedAnswers, setSelectedAnswers] = useState({}); // Store user-selected answers
    const [correctAnswers, setCorrectAnswers] = useState({}); // Store correct answers for images

    // Sample structure for correct answers
    const answersData = {
        "image1.jpg": 2, // Image 1 has correct answer as 2
        "image2.jpg": 3, // Image 2 has correct answer as 3
        "image3.jpg": 1, // Image 3 has correct answer as 1
        "image4.jpg": 4, // Image 4 has correct answer as 1
    };

    // Fetch the assets from the GitHub repository
    useEffect(() => {
        fetchGitHubAssets();
    }, []);

    const fetchGitHubAssets = () => {
        fetch('https://api.github.com/repos/imgeorge1/tickets/contents/assets')
            .then(response => response.json())
            .then(data => {
                const folders = data.filter(asset => asset.type === 'dir');
                setAssets(folders);
            })
            .catch(error => console.error('Error fetching assets:', error));
    };

    const fetchFolderContents = (folderPath) => {
        fetch(`https://api.github.com/repos/imgeorge1/tickets/contents/${folderPath}`)
            .then(response => response.json())
            .then(data => {
                const images = data.filter(file => file.name.match(/\.(jpg|jpeg|png)$/));
                setImageFiles(images);
                // Populate correct answers based on the structure
                const answers = {};
                images.forEach(image => {
                    answers[image.name] = answersData[image.name] || 1; // Default to 1 if no answer is provided
                });
                setCorrectAnswers(answers);
            })
            .catch(error => console.error('Error fetching folder contents:', error));
    };

    const fetchImage = async (imagePath) => {
        const imageUrl = `https://raw.githubusercontent.com/imgeorge1/tickets/master/${imagePath}`;
        setImageUrl(imageUrl);
    };

    // Handle answer selection
    const handleAnswerSelect = (imageName, answer) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [imageName]: answer, // Store selected answer for this image
        }));
    };

    // Determine button color (green for correct, red for wrong, default for not selected)
    const getButtonColor = (imageName, answer) => {
        const correctAnswer = correctAnswers[imageName];
        const selectedAnswer = selectedAnswers[imageName];

        if (selectedAnswer === answer) {
            return selectedAnswer === correctAnswer ? 'bg-green-500' : 'bg-red-500'; // Green if correct, Red if wrong
        }
        return correctAnswer === answer ? 'bg-green-500' : 'bg-gray-200'; // Correct answer should always be green
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Theory Course</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Category Column */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="space-y-4">
                        {assets.map((asset) => (
                            <button
                                key={asset.path}
                                className="w-full text-left p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => {
                                    setSelectedTopic(asset.path);
                                    fetchFolderContents(asset.path);
                                }}
                            >
                                {asset.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Image and Answer Column */}
                <div>
                    {selectedTopic && imageFiles.length > 0 ? (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">Select an Image:</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                                {imageFiles.map((image) => (
                                    <div key={image.path} className="text-center">
                                        <img
                                            src={`https://raw.githubusercontent.com/imgeorge1/tickets/master/${image.path}`}
                                            alt={image.name}
                                            className="w-full h-auto object-cover rounded-lg shadow-md"
                                        />

                                        {/* Answer buttons */}
                                        <div className="mt-4 space-x-2">
                                            {[1, 2, 3].map((answer) => (
                                                <button
                                                    key={answer}
                                                    className={`px-4 py-2 text-white font-bold rounded ${getButtonColor(image.name, answer)}`}
                                                    onClick={() => handleAnswerSelect(image.name, answer)}
                                                >
                                                    {answer}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center text-lg text-gray-500">
                            <p>Select a category to view images</p>
                        </div>
                    )}
                </div>
            </div>

            {imageUrl && (
                <div className="mt-8">
                    <img
                        src={imageUrl}
                        alt="Fetched Image"
                        className="w-full h-auto object-cover rounded-lg shadow-xl"
                    />
                </div>
            )}
        </div>
    );
}

export default TheoryCourse;
