let pointing = 0;
let image_arr = [];

function initImageControl(image_url_arr) {
    image_arr = image_url_arr;
}

function previousImage() {
    if (pointing - 1 < 0) {
        return;
    }

    pointing -= 1;
    let image_node = document.getElementById("image-display");
    image_node.src = image_arr[pointing];
}

function nextImage() {
    if (pointing + 1 >= image_arr.length) {
        return;
    }

    pointing += 1;
    let image_node = document.getElementById("image-display");
    image_node.src = image_arr[pointing];
}