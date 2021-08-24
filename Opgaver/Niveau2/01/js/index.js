document.addEventListener("DOMContentLoaded", () => {

const buttonContainer = document.querySelector("#buttons");
const ButtonHighlightColor = "yellow";

function buttonHighlight(event)
{
    if(event.target.tagName === "BUTTON")
    {
        let highlightElement = document.querySelector(".highlight");

        if(highlightElement)
        {
            highlightElement.style.backgroundColor = "";
            highlightElement.classList.remove("highlight");
        };

        event.target.classList.add("highlight");
        event.target.style.backgroundColor = ButtonHighlightColor;
    };
};

buttonContainer.addEventListener("click", event => buttonHighlight(event));

});