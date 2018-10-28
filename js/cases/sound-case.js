var contents = [
    "bombClickSound",
    "airhornClickSound",
    "rainbowClickSound"
];

function getResult() {
    return contents[Math.floor(Math.random() * contents.length + 1)];
}
