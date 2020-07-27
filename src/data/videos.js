const apiUrl = process.env.REACT_APP_SERVER_KEY + "/static/"

const videosList = [
    {
        title: "For Loops in Depth",
        genre: "Theory",
        description: "Step by step walk-through of the for loop's lifecycle.",
        video: apiUrl+"ForLoop.mp4",
        thumbnail: apiUrl+"forloops.jpg",
        times: [
            {time: "1:37", mean: "Cycling through an array with a for loop"},
            {time: "7:06", mean: "Key parts of a for loop"}
        ]
    },
    {
        title: "Document Object Model",
        genre: "Instruction",
        description: "Manipulating html elements with JavaScript using the DOM",
        video: apiUrl+"DOM-w.mp4",
        thumbnail: apiUrl+"DOM.jpg",
        times: [
            
        ]
    }
];

export default videosList;