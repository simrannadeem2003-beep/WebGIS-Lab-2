function showPopup(type) {

    let title = "";
    let text = "";

    if (type === "email") {
        title = "EMAIL ADDRESS";
        text = "simrannadeem23@gmail.com";
    }

    else if (type === "phone") {
        title = "PHONE NUMBER";
        text = "Nil";
    }

    else if (type === "more") {
        title = "MORE INFORMATION";
        text = "BS Remote Sensing & GIS | 5th Semester";
    }

    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupText").innerText = text;

    document.getElementById("popup").style.display = "flex";
}


/* ---------- CLOSE POPUP ---------- */

function closePopup() {

    document.getElementById("popup").style.display = "none";

}


/* ---------- CLOSE WHEN CLICKING OUTSIDE ---------- */

window.onclick = function(event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

};