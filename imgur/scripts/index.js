// Fetch main data

const getData = async () => {
    try {
        let fetched = await fetch(
            "https://api.unsplash.com/photos/?client_id=OhvuwOiZ4Oo-JLYknTjGZwcskETxYsUlH_9s_I6x8c4&per_page=30"
        );
        let data = await fetched.json();
        // console.log("data:", data);
        addData(data);
    } catch (err) {
        console.log("err:", err);
    }
};

getData();

// Append data

const parent = document.getElementById("images");

function addData(data) {
    document.querySelector("#images").innerHTML = "";

    data.map((e) => {
        const card = document.createElement("div");
        card.id = "card";

        const image = document.createElement("img");
        image.id = "cardImage";
        image.src = e.urls.thumb;

        const textDiv = document.createElement("div");
        textDiv.id = "textDiv";

        const tagline = document.createElement("p");
        tagline.textContent = e.user.name;
        tagline.id = "tagline";

        const lastDiv = document.createElement("div");
        lastDiv.id = "flexThisDiv";

        const upvoteDiv = document.createElement("div");
        upvoteDiv.id = "divLast";
        const arrow = document.createElement("img");
        arrow.src = "https://freesvg.org/img/1544644548.png";
        arrow.id = "arrow";

        const upvoteNum = document.createElement("p");
        upvoteNum.textContent = e.user.total_likes;

        const commentDiv = document.createElement("div");
        commentDiv.id = "divLast";
        const comments = document.createElement("img");
        comments.src = "https://freesvg.org/img/ftcomment.png";
        comments.id = "arrow";

        const commentsNum = document.createElement("p");
        commentsNum.textContent = getRandomNumber(20, 120);

        const viewsDiv = document.createElement("div");
        viewsDiv.id = "divLast";
        const views = document.createElement("img");
        views.src =
            "https://icon-library.com/images/views-icon/views-icon-10.jpg";
        views.id = "views";

        const viewsNum = document.createElement("p");
        viewsNum.textContent = getRandomNumber(1, 11) + "k";

        upvoteDiv.append(arrow, upvoteNum);
        commentDiv.append(comments, commentsNum);
        viewsDiv.append(views, viewsNum);
        lastDiv.append(upvoteDiv, commentDiv, viewsDiv);
        textDiv.append(tagline, lastDiv);
        card.append(image, textDiv);
        parent.append(card);
    });
}

// Get random number

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

// Add debouncing to search

let deb;

document.querySelector(".navSearch").addEventListener("input", () => {
    if (deb) {
        clearTimeout(deb);
    }

    deb = setTimeout(() => {
        searchData();
    }, 1000);
});

const searchData = async () => {
    let query = document.querySelector(".navSearch").value;
    // console.log("query:", query);

    try {
        let fetched = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=OhvuwOiZ4Oo-JLYknTjGZwcskETxYsUlH_9s_I6x8c4`
        );
        let data = await fetched.json();
        // console.log("data:", data);
        addData(data.results);
    } catch (err) {
        console.log("err:", err);
    }
};
