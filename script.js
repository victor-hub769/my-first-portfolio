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

    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");

    box1.addEventListener("click", function() {
        box1.style.backgroundColor = "red";
    });

    box2.addEventListener("mouseover", function() {
        box2.style.transform = "scale(1.1)";
    });

    box3.addEventListener("mouseout", function() {
        box3.style.border = "2px solid blue";
    });
});
