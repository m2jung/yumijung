const text = "Hello, I'm frontend developer"; // 타이핑효과 들어갈 문구 
const typingSpeed = 50; // 0.8초
const typingElement = document.getElementById("typing-text"); 
const container = document.getElementsByClassName("container");
const startContainer = document.querySelector(".start-container");
const wrapper = document.querySelector(".wrapper"); // **getElementByClass 로는 반응을 안해서 querySelect(더 자세하게 요소선택)
const pageMove = document.getElementsByClassName("page-move");
let currentIndex = 0;

const typeNextCharacter = () => {
  typingElement.textContent = text.slice(0, currentIndex + 1); // text 하나씩 쪼개기
  currentIndex++; // index 세기

  if (currentIndex < text.length) {
    setTimeout(typeNextCharacter, typingSpeed);
  }else {
    // 타이핑이 완료된 후 start-container 요소 보이기
    startContainer.style.opacity = 1;
  }
}

// 클릭시 페이지 이동하면서 전환 animation 후 페이지 이동
// ** 클릭 작동이 한 번에 안되는 경우가 있음
const onClickBtn = () => {
    wrapper.style.opacity = 0;
    setTimeout("location.href = 'pages/home.html'", 1000);
}

typeNextCharacter();
