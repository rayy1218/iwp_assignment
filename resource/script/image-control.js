/*
* This script is use to create a frame of image display for numbers of image without spamming <img> tag
* To use this
* 1. Declare an array of image source and call initImageControl() function with the array as argument onload at body
* 2. Set event listener for previousImage() and nextImage() for example <button onclick="nextImage()">
*/

let pointing = 0;
let image_arr = [];

function initImageControl(image_url_arr) {
    image_arr = image_url_arr;
    let image_node = document.getElementById("image-display");
    image_node.src = image_arr[0];
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