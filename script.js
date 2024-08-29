function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const burgerMenu = document.getElementById("burgerMenu");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        burgerMenu.style.display = "block"; // Show burger menu
    } else {
        sidebar.style.width = "250px";
        burgerMenu.style.display = "none"; // Hide burger menu
    }
}