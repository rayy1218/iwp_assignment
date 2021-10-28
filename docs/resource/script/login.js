function initLogin() {
    let login_panel_node = document.getElementById("login_panel");
    login_panel_node.innerHTML =
        "<p>User status: <span id=\"user_status\"></span></p><br/>" +
        "<input type=\"button\" value=\"login as user\" id=\"login_user_btn\" onclick=\"setLoginStatus(1)\">" +
        "<input type=\"button\" value=\"login as admin\" id=\"login_admin_btn\" onclick=\"setLoginStatus(2)\">" +
        "<input type=\"button\" value=\"logout\" id=\"logout_btn\" onclick=\"setLoginStatus(0)\">" +
        "<br/> <br/>"

    let status = window.sessionStorage.getItem("status");
    let status_node = document.getElementById("user_status");

    if (status === null) {
        setLoginStatus("0");
        return;
    }

    switch (status) {
        case "0":
            status_node.innerText = status + "Non User";
            break;

        case "1":
            status_node.innerText = status + "User";
            break;

        case "2":
            status_node.innerText = status + "Admin";
            break;
    }
}

function setLoginStatus(status_type) {
    window.sessionStorage.setItem("status", status_type.toString());
    location.reload();
}