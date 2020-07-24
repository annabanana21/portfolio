const apiUrl = process.env.REACT_APP_SERVER_KEY + "/static/"

const videosList = [
    {
        title: "For Loops in Depth",
        genre: "Theory",
        description: "Step by step walk-through of the for loop's lifecycle.",
        video: apiUrl+"ForLoop.mp4",
        thumbnail: apiUrl+"forloops.jpg"
    },
    {
        title: "Document Object Model",
        genre: "Instruction",
        description: "Manipulating html elements with JavaScript using the DOM",
        video: apiUrl+"DOM-window.mp4",
        thumbnail: apiUrl+"DOM.jpg"
    }
];

export default videosList;