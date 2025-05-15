document.addEventListener("DOMContentLoaded", function () {
  // 비밀번호 일치 여부 확인
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmMessage = document.querySelector(".password-confirm-message");

  // 비밀번호 입력 필드에 이벤트 리스너 추가
  confirmPassword.addEventListener("input", validatePassword);
  password.addEventListener("input", function () {
    if (confirmPassword.value.length > 0) {
      validatePassword();
    }
  });

  // 비밀번호 유효성 검사 함수
  function validatePassword() {
    if (password.value === confirmPassword.value) {
      confirmMessage.textContent = "비밀번호가 일치합니다.";
      confirmMessage.classList.add("match");
      confirmMessage.classList.remove("not-match");
    } else {
      confirmMessage.textContent = "비밀번호가 일치하지 않습니다.";
      confirmMessage.classList.add("not-match");
      confirmMessage.classList.remove("match");
    }
  }

  // 이메일 중복 확인 버튼
  const emailCheckBtn = document.getElementById("emailCheckBtn");
  emailCheckBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("유효한 이메일 형식이 아닙니다.");
      return;
    }

    // TODO: 서버에 이메일 중복 확인 요청
    // 현재는 예시로 항상 사용 가능하다고 알림
    alert("사용 가능한 이메일입니다.");
  });

  // 기업명 중복 확인 버튼
  const companyCheckBtn = document.getElementById("companyCheckBtn");
  companyCheckBtn.addEventListener("click", function () {
    const companyName = document.getElementById("companyName").value;
    if (!companyName) {
      alert("기업명을 입력해주세요.");
      return;
    }

    // TODO: 서버에 기업명 중복 확인 요청
    // 현재는 예시로 항상 사용 가능하다고 알림
    alert("사용 가능한 기업명입니다.");
  });

  // 폼 제출 이벤트 핸들러
  const signUpForm = document.getElementById("signUpForm");
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 동작 방지

    // 비밀번호 일치 확인
    if (password.value !== confirmPassword.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 이용약관 동의 확인
    const agreeTerms = document.getElementById("agreeTerms");
    if (!agreeTerms.checked) {
      alert("이용약관에 동의해주세요.");
      return;
    }

    // TODO: 서버에 회원가입 요청
    console.log("회원가입 요청 전송", {
      email: document.getElementById("email").value,
      companyName: document.getElementById("companyName").value,
      password: password.value,
    });

    // 회원가입 성공 메시지
    alert("회원가입이 완료되었습니다. 관리자 인증 후 이용 가능합니다.");
    // 로그인 페이지로 이동 (예시)
    // window.location.href = 'login.html';
  });
});
