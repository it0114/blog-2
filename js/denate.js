var mask = document.getElementById("mask");
var img = document.getElementsByClassName("pay_img")[0];
var imgs = img.children;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        mask.style.display = "block";
        this.style.transform = "scale(1.5)";
        this.style.transition = "all 0.5s";
        mask.onclick = function () {
            for (var j = 0; j < imgs.length; j++) {
                mask.style.display = "none";
                imgs[j].style.transform = "";
            }
        };
        if (this.style.transform === "scale(1.5)") {
            this.onclick = function () {
                for (var j = 0; j < imgs.length; j++) {
                    mask.style.display = "none";
                    imgs[j].style.transform = "";
                }
            }
        }

    };
}













