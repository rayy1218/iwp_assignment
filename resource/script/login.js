//status: 0(non-user), 1(user), 2(admin)

function setLoginStatus(status_type) {
    window.sessionStorage.setItem("status", status_type.toString());
}

function setUsername(username) {
    window.sessionStorage.setItem("username", username);
}

function getLoginStatus() {
    return parseInt(window.sessionStorage.getItem("status"));
}

function getUsername() {
    return window.sessionStorage.getItem("username");
}

function getLoginStatusString(login_status) {
    switch (parseInt(login_status)) {
        case 0:
            return "Non-user";

        case 1:
            return "User";

        case 2:
            return "admin";
    }
}

function initLogin() {
    let status = getLoginStatus();
    if (status == null) {
        setLoginStatus("0");
    }

    let username = getUsername();
    if (username == null) {
        setUsername("null");
    }

    setItemDisplay();

    let user_tab = document.getElementById("debug-user-tab");
    user_tab.innerHTML = `Status: ${getLoginStatusString(getLoginStatus())} Username: ${getUsername()}`;
}

function setItemDisplay() {
    let user_item = document.getElementsByClassName("user"),
        non_user_item = document.getElementsByClassName("non-user");

    if (getLoginStatus() === 1 || getLoginStatus() === 2) {
        for (let i = 0; i < user_item.length; i += 1) {
            user_item[i].style.display = "block";
        }

        for (let i = 0; i < non_user_item.length; i += 1) {
            non_user_item[i].style.display = "none";
        }
    }
    else if (getLoginStatus() === 0) {
        for (let i = 0; i < user_item.length; i += 1) {
            user_item[i].style.display = "none";
        }

        for (let i = 0; i < non_user_item.length; i += 1) {
            non_user_item[i].style.display = "block";
        }
    }
}

function doRegister() {
    //may do a password strength check here
    let username = document.getElementById("uname").value;

    if (username === "admin") {
        //may do a error message output here

        return;
    }

    doLogin();
}

function doLogin() {
    let username = document.getElementById("uname").value;

    if (username === "admin") {
        setLoginStatus(2);
    }
    else {
        setLoginStatus(1);
    }

    setUsername(username);
}

function doLogout() {
    setLoginStatus(0);
    setUsername("null");
}
