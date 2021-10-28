let posts = [
    {
        title: "",
        thumbnail: "",
        desc: ""
    }
];

function initPost() {
    getPostStorage();
}

function addPost(title, thumbnail_address, desc) {
    let post = {title: title, thumbnail: thumbnail_address, desc: desc};

    posts.push(post);
}

function deletePost(index) {
    posts.splice(index, 1);
}

function setPostStorage() {
    window.localStorage.setItem("posts", JSON.stringify(posts));
}

function getPostStorage() {
    posts = JSON.parse(window.localStorage.getItem("posts") || "[]");
}