const days = [
    {
        name: "Day 1",
        description: "Design an effect product card",
    },

    {
        name: "Day 2",
        description: "Design a profile card using js and animation effect",
    },

    {
        name: "Day 3",
        description: "Snack Game with js",
    },

    {
        name: "Day 4",
        description: "Design a 9 dots menu",
    },

    {
        name: "Day 5",
        description: "Create an effect for the navigation bar",
    },

    {
        name: "Day 6",
        description: "A simple user name search website with API calls",
    },

    {
        name: "Day 7",
        description: "Create a modal popup with js",
    },

    {
        name: "Day 8",
        description: "Create a toast message with js",
    },

    {
        name: "Day 9",
        description: "Design container products and a slideshow",
    },

    {
        name: "Day 10",
        description: "Create a mouse hover effect",
    },

    {
        name: "Day 11",
        description: "Design a expandable search box",
    },

    {
        name: "Day 12",
        description: "Create a search tags with js",
    },

    {
        name: "Day 13",
        description: "Detect Pressed Key using js",
    },

    {
        name: "Day 14",
        description: "Design a switch button with the light on and off effect",
    },

    {
        name: "Day 15",
        description: "Create a clock with js",
    },

    {
        name: "Day 16",
        description: "Design an effect rating",
    },

    {
        name: "Day 17",
        description: "Design a weather application with API calls",
    },

    {
        name: "Day 18",
        description: "Design a progress bar",
    },

    {
        name: "Day 19",
        description: "Tabs UI with js",
    },

    {
        name: "Day 20",
        description: "Todo App",
    },

    {
        name: "Day 21",
        description: "Show menu when right click",
    },

    {
        name: "Day 22",
        description: "Upload pictures and show",
    },

    {
        name: "Day 23",
        description: "Upload file and show progress bar list",
    },

    {
        name: "Day 24",
        description: "Create a memory card game",
    },

    {
        name: "Day 25",
        description: "Create a modal and link copy",
    },

    {
        name: "Day 26",
        description: "Design an effect for the navigation bar",
    },

    {
        name: "Day 27",
        description: "Create a slide show",
    },

    {
        name: "Day 28",
        description: "Catch drag and drop event",
    },

    {
        name: "Day 29",
        description: "Drag and drop sortable list",
    },

    {
        name: "Day 30",
        description: "Random Password Generator",
    },

    {
        name: "Day 31",
        description: "The effect appears when scroll website",
    },

    {
        name: "Day 32",
        description: "Improve todo list app",
    },

    {
        name: "Day 33",
        description: "Design a page error",
    },

    {
        name: "Day 34",
        description: "Hide header on scroll down, show on scroll up",
    },

    {
        name: "Day 35",
        description: "Chess game with js",
    },

    {
        name: "Day 36",
        description: "Xiangqi game with js",
    },

    {
        name: "Day 37",
        description: "Chess game with JQuery and Jquery UI.",
    },

    {
        name: "Day 38",
        description: "Vue js",
    },

    {
        name: "Day 39",
        description: "Music Player with js",
    },

    {
        name: "Day 40",
        description: "Validation form",
    },
];
const tableBody = document.querySelector(".table-body");

days.forEach((day, index) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>
            <a href="./${day.name}">${day.name}</a>
        </td>
        <td>${day.description}</td>
    `;
    tableBody.appendChild(tableRow);
});
