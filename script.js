const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach((item,index) => {
    item.addEventListener("click", ()=> {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
    });
});
