document.addEventListener("DOMContentLoaded", () => {

    function start()
    {
        let button = document.querySelector("#my-button");
        button.addEventListener("click", toggle);
    };

    function toggle()
    {
        let color = document.querySelector("button");
        let backColor = color.style.backgroundColor;
        color.style.backgroundColor = backColor === "crimson" ? "white" : "crimson";
    };

    start();




});