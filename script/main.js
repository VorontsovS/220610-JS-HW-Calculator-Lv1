document.onclick = (el) => {
    elClick = el.target.id;
    if (elClick >=0 && elClick <=9) {
        document.querySelector(".tablo").innerHTML = elClick;
    }
};