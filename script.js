document.addEventListener("DOMContentLoaded", function() {
    const grandparent = document.querySelector(".grandparent");
    const parent = document.querySelector(".parent");
    const child = document.querySelector(".child");

    grandparent.addEventListener("click", function() {
        grandparent.textContent = "Clicked grandparent";
    });

    parent.addEventListener("click", function() {
        parent.textContent = "Clicked parent";
    });

    child.addEventListener("click", function() {
        child.textContent = "Clicked child";
    });
});
