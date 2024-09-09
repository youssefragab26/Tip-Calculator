let open = document.getElementById("open");
let close = document.getElementById("close");
let div = document.querySelector('.container')

close.onclick = function () {
    div.classList.add('hide');
    close.classList.add('hide');
    open.classList.remove('hide');
}
open.onclick = function () {
    div.classList.remove('hide');
    close.classList.remove('hide');
    open.classList.add('hide');
}