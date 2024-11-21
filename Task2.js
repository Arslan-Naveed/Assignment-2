function changeText() {
    let text1 = "Demo text, often referred to as placeholder text, is a block of text that is used to fill a space on a website, document, or template where the actual content will eventually be placed. The most common example of demo text is Lorem ipsum.";
    let paragraph = document.getElementsByClassName('demoText')[0];

    if (paragraph.textContent === text1) {
        paragraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sint necessitatibus enim! Alias quia at officia praesentium quisquam, optio harum et obcaecati deleniti placeat cupiditate, ad id dolorem quae beatae!";
    } else {
        paragraph.textContent = text1;
    }
}

function changeColor() {
    let color1 = "rgb(255, 255, 255)"; 
    let color2 = "rgb(168, 199, 250)"; 
    let card = document.getElementsByClassName("cardWrapper")[0];
    let currentColor = window.getComputedStyle(card).backgroundColor;

    if (currentColor === color1) {
        card.style.backgroundColor = color2;
    } else {
        card.style.backgroundColor = color1;
    }
}
