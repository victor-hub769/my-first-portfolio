document.addEventListener("DOMContentLoaded", function() {
    const grandparent = document.querySelector(".grandparent");
    const parent = document.querySelector(".parent");
    const child = document.querySelector(".child");

    grandparent.addEventListener("click", function(e) {
        console.log("Clicked grandparent", e);
    });

    parent.addEventListener("click", function(e) {
        console.log("Clicked parent", e);
    });

    child.addEventListener("click", function(e) {
        console.log("Clicked child", e);
    });
});
