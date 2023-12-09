window.onload = () => {
    for (let i = 0; i < 30; ++i) {
        var img = document.createElement("img");
        img.src = "nginx.png?var=" + i;
        img.className = "slika"
        var src = document.getElementById("insertImages");
        src.appendChild(img);
    }
}