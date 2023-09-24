// Left Button and Right Button For Banner

const productContainer = [...document.querySelectorAll('.banner_container')];
const rightBtn = [...document.querySelectorAll('.right')];
const leftBtn = [...document.querySelectorAll('.left')];

productContainer.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Left Button and Right Button For Brand List

const productContainer2 = [...document.querySelectorAll('.brand_list')];
const rightBtn2 = [...document.querySelectorAll('.right1')];
const leftBtn2 = [...document.querySelectorAll('.left1')];

productContainer2.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    leftBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const toggle_Button = document.getElementsByClassName('toggle-button')[0]

const navlinks = document.getElementsByClassName('navlinks')[0]

toggle_Button.addEventListener('click', () => 
{
    navlinks.classList.toggle('active')
})