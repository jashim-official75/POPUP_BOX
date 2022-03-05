document.querySelector("#showPop").onclick = () =>
{
    document.querySelector(".cookies_box").classList.add("active");
}
document.querySelector("#close_btn").onclick = () =>
{
    document.querySelector(".cookies_box").classList.remove("active");
}