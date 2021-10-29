function addComment() {
    let comment_text = document.getElementById("user-comment-input").value;

    let error_message_node = document.getElementById("error-message");
    if (comment_text.length === 0) {
        error_message_node.innerText = "Please enter your comment";
        return;
    }
    else {
        error_message_node.innerText = "";
    }

    let comment_text_node = createCommentNode();
    comment_text_node.innerText = comment_text;
    document.getElementById("user-comment-input").value = "";
}

function createCommentNode() {
    let new_comment_node = document.createElement("div"),
        comment_profile_img = document.createElement("img"),
        comment_content = document.createElement("div"),
        username = document.createElement("p"),
        comment_text_node = document.createElement("p");

    comment_profile_img.className = "profile-picture";
    comment_profile_img.src = "../../resource/img/user-profile-image.png";
    new_comment_node.appendChild(comment_profile_img);

    comment_content.className = "comment-content";
    new_comment_node.appendChild(comment_content);

    username.className = "username";
    username.innerText = window.sessionStorage.getItem("username");
    if (username.innerText.length === 0) {
        username.innerText = "null";
    }
    comment_content.appendChild(username);

    comment_text_node.className = "comment-text";
    comment_content.appendChild(comment_text_node);

    new_comment_node.className = "comment";

    let comment_list = document.getElementById("comment-list");
    comment_list.appendChild(new_comment_node);

    return comment_text_node;
}