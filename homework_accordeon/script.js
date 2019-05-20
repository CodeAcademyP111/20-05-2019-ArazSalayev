

var accord = document.getElementsByClassName("accordion");

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (this.children[1].classList.contains("fa-plus")) {
            this.children[1].classList.replace("fa-plus", "fa-minus");

        } else {
            this.children[1].classList.replace("fa-minus", "fa-plus");
        }
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    })
}