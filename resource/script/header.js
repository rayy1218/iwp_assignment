function initHeader() {
    initCollapseHeader();

    doHideElementOnRole("admin-function", 0);
    doHideElementOnRole("admin-function", 1);
    doHideElementOnRole("user-admin-function", 0);
    doHideElementOnRole("non-user-function", 1);
    doHideElementOnRole("non-user-function", 2);
}

function initCollapseHeader() {
    let tab_node = document.getElementsByClassName("tab");
    for (let i = 0; i < tab_node.length; i += 1) {
        tab_node[i].addEventListener("mouseenter", function () {
            toggleCollapse(this);
        });
        tab_node[i].addEventListener("mouseleave", function () {
            toggleCollapse(this);
        });
    }
}

function toggleCollapse(element) {
    let menu_content = element.getElementsByClassName("collapse-menu-content");
    for (let i = 0; i < menu_content.length; i += 1) {
        if (menu_content[i].style.maxHeight) {
            menu_content[i].style.maxHeight = null;
        }
        else {
            menu_content[i].style.maxHeight = menu_content[i].scrollHeight + "px";
        }
    }
}