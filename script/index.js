/* 맨 위 공지사항 닫기 활성화 */
const headerNotice = document.querySelector('.hd_top')
const noticeClose = document.querySelector('.hd_top #close_btn')
noticeClose.addEventListener('click',()=>{
    headerNotice.style.display = 'none';
})
/* scroll에 따른 nav 배경색 변환 */
const navBar = document.querySelector('header .hd_navbar')
window.addEventListener('scroll',()=>{
    if (window.scrollY > 800) {
        navBar.classList.add('active')
    } else {navBar.classList.remove('active')}
})
/* nav에 hover 시 배경색 변환 */
navBar.addEventListener('mouseover',()=>{
    navBar.style.cssText='background-color: #fff; box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px; transition: all 0.8s;'
})
navBar.addEventListener('mouseout',()=>{
    navBar.style.cssText='background-color: none; box-shadow: none; transition: all 0.6s;'
})
/* nav 메뉴에 hover 시 메뉴선 활성화 */
const navMenu = document.querySelectorAll('header nav .path li');
console.log(navMenu)
navMenu.forEach((menu)=>{
    menu.addEventListener('mouseover',()=>{
        menu.classList.add('active')
    })
    menu.addEventListener('mouseout',()=>{
        menu.classList.remove('active')
    })
})
/* (메인 배너) 제품 더보기 버튼 오버 시, 슬라이드 정지 */
const bnrMoreBtn = document.querySelectorAll('.main_bnr_wrap .main_bnr #bnr_more')
bnrMoreBtn.forEach((btn) => {
    btn.addEventListener('mouseover',()=>{
        mainHeaderSwiper.autoplay.stop();
    })
    btn.addEventListener('mouseout',()=>{
        mainHeaderSwiper.autoplay.start();
    }) 
})
/* 콜렉션 상품 카테고리 활성화 */
const lineCategory = document.querySelectorAll('.main_wrap .line_style_category li')
lineCategory.forEach((list) => {
    list.addEventListener('mouseover', ()=>{
        list.classList.add('hover');
    })
    list.addEventListener('mouseleave', ()=>{
        list.classList.remove('hover');
    })
})