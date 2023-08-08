const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector('nav');

// 페이지 로드시 실행 
window.onload = function () {
    wrapper.style.opacity = 1;
    // nav에 'show' 클래스를 추가 animation
    nav.classList.add('show');
  }