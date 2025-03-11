const bnrSwiper = new Swiper('.bnr_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 5000,
    slidesPerView:4,
    spaceBetween:30,
})
const snsSwiper = new Swiper('.sns_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 7000,
    slidesPerView:4,
    spaceBetween:30,
})

const detailSwiper = new Swiper('.detail_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 7000,
    slidesPerView:4,
    spaceBetween:30,
})
/* other design 팝업 */
const img_popup_bg = document.querySelector('.img_popup_bg')
const bnrImg = document.querySelectorAll('.bnr_swiper img')
const snsImg = document.querySelectorAll('.sns_swiper img')
const detailImg = document.querySelectorAll('.detail_swiper img')

img_popup_bg.style.display = 'none';
for(let i of bnrImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        console.log(i.src)
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.width = '900px';
        img_popup_bg.children[0].style.marginTop = '250px';
    })
}
for(let i of snsImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        console.log(i.src)
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.width = '700px';
        img_popup_bg.children[0].style.marginTop = '150px';
    })
}
for(let i of detailImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        console.log(i.src)
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.width = '450px';
        img_popup_bg.children[0].style.marginTop = '65px';
    })
}
img_popup_bg.addEventListener('click',()=>{
    img_popup_bg.style.display = 'none'
})

/* 프로필 사진 애니메이션 - 스크롤 적용 */
const personImg = document.querySelector('.about .person_img')
window.addEventListener('scroll',()=>{
    if ( window.scrollY >= 300) {
        personImg.style.animation = 'profile_animation 1s forwards';
    }
})