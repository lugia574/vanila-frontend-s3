/**
 * 로그인 탭 전환 함수
 * @param {string} tabType - 전환할 탭 유형 ('personal' 또는 'company')
 */
function switchTab(tabType) {
  // 모든 탭과 폼 요소 가져오기
  const personalTab = document.querySelector(".personal-tab");
  const companyTab = document.querySelector(".company-tab");
  const personalLogin = document.querySelector(".personal-login");
  const companyLogin = document.querySelector(".company-login");

  // 활성화된 탭 스타일 초기화
  personalTab.classList.remove("active");
  companyTab.classList.remove("active");

  // 모든 폼 숨기기
  personalLogin.style.display = "none";
  companyLogin.style.display = "none";

  // 선택한 탭에 따라 요소 표시하기
  if (tabType === "personal") {
    personalTab.classList.add("active");
    personalLogin.style.display = "block";
  } else {
    companyTab.classList.add("active");
    companyLogin.style.display = "block";
  }
}

// 페이지 로드 시 기본적으로 기업회원 탭이 활성화되도록 설정
document.addEventListener("DOMContentLoaded", function () {
  // 초기 로드 시 기업회원 탭 활성화
  switchTab("company");
});

document.addEventListener("DOMContentLoaded", function () {
  switchTab("company");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    alert("이미 로그인 되어 있습니다.");
    window.location.href = "/pages/main/main.html";
    return;
  }

  // 기업회원 로그인 처리
  const companyLoginForm = document.querySelector(".company-login");
  companyLoginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("companyId").value;
    const pw = document.getElementById("companyPw").value;
    const dummyId = "company";
    const dummyPw = "1234";

    if (id === dummyId && pw === dummyPw) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "company");
      alert("기업회원 로그인 성공!");
      window.location.href = "/pages/main/main.html";
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  });

  // 회원가입 버튼
  document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("go-to-signup-btn");
    if (signUpBtn) {
      signUpBtn.addEventListener("click", function () {
        window.location.href = "/pages/sign-up/sign-up.html";
      });
    }
  });

  // 간편 로그인 처리
  const socialButtons = [
    { selector: ".naver-login", provider: "naver" },
    { selector: ".kakao-login", provider: "kakao" },
    { selector: ".google-login", provider: "google" },
  ];

  socialButtons.forEach(({ selector, provider }) => {
    const button = document.querySelector(selector);
    button.addEventListener("click", function () {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "personal");
      localStorage.setItem("loginProvider", provider);
      alert(`개인회원 로그인 성공!`);
      window.location.href = "/pages/main/main.html";
    });
  });
});
