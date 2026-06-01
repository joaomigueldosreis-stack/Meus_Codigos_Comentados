document.body.style.backgroundColor = "red";

document.body.onclick = function() {
    const bg = document.body.style.backgroundColor;
    bg === "red" && (document.body.style.backgroundColor = "blue");
    bg === "blue" && (document.body.style.backgroundColor = "green");
    bg === "green" && (document.body.style.backgroundColor = "yellow");
    bg === "yellow" && (document.body.style.backgroundColor = "purple");
    bg === "purple" && (document.body.style.backgroundColor = "pink");
    bg === "pink" && (document.body.style.backgroundColor = "red");
};