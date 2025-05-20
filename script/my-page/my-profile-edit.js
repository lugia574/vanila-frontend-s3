const userProfile = {
  name: "김공모",
  email: "contest@example.com",
  location: "서울특별시",
  company: "오픈AI",
  profileImage: "/public/images/profile/profile.png",
};

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const locationInput = document.getElementById("location");
  const companyInput = document.getElementById("company");
  const profileImg = document.getElementById("profilePreview");

  // 초기값 세팅
  nameInput.value = userProfile.name;
  emailInput.value = userProfile.email;
  locationInput.value = userProfile.location;
  companyInput.value = userProfile.company;
  profileImg.src = userProfile.profileImage;

  // 이미지 미리보기
  const fileInput = document.getElementById("profileImage");
  fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 폼 제출
  const form = document.getElementById("profileEditForm");
  form.addEventListener("submit", e => {
    e.preventDefault();

    // 여기에 서버 전송 로직 또는 로컬 저장 로직 추가
    alert("프로필이 수정되었습니다.");

    // 마이페이지로 이동
    window.location.href = "/pages/my-page/my-page.html";
  });
});
