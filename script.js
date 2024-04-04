let api = "https://meme-api.com/gimme";
let main = document.querySelector(".main");
let btn = document.querySelector("button");

const memeApi = async () => {
    btn.addEventListener("click", async () => {
        let response = await fetch(api);
        let data = await response.json();
        let meme = data.url;
        let title=data.title;
        let author=data.author;
        displayMeme(meme,title,author);
    });
}

memeApi();
const displayMeme = (meme, title,author) => {
    // Remove any existing meme image and title
    let existingImg = document.querySelector(".main img");
    let existingTitle = document.querySelector(".main h2");
    let existingAuthor=document.querySelector("h4");
    if (existingImg) {
        existingImg.remove();
    }
    if (existingTitle) {
        existingTitle.remove();
    }
    if (existingAuthor) {
        existingAuthor.remove();
    }
    // Create and display the new meme image
    let newImg = document.createElement("img");
    newImg.src = meme;
    newImg.classList.add("memeClass");
    main.appendChild(newImg);

    // Create and display the new meme title
    let newTitle = document.createElement("h2");
    newTitle.textContent = title;
    main.appendChild(newTitle);

    //create and display new author

    let newAuthor=document.createElement("h4");
    newAuthor.textContent=author;
    main.appendChild(newAuthor);
}

