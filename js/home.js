const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector('nav');
const container = document.querySelector('div.container');
// 페이지 로드시 실행 
window.onload = function () {
    wrapper.style.opacity = 1;
    // 요소에 'show' 클래스를 추가 animation
    nav.classList.add('show');
    container.classList.add('show');
  }