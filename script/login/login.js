/**
 * 로그인 탭 전환 함수
 * @param {string} tabType - 전환할 탭 유형 ('personal' 또는 'company')
 */
function switchTab(tabType) {
  // 모든 탭과 폼 요소 가져오기
  const personalTab = document.querySelector('.personal-tab');
  const companyTab = document.querySelector('.company-tab');
  const personalLogin = document.querySelector('.personal-login');
  const companyLogin = document.querySelector('.company-login');

  // 활성화된 탭 스타일 초기화
  personalTab.classList.remove('active');
  companyTab.classList.remove('active');

  // 모든 폼 숨기기
  personalLogin.style.display = 'none';
  companyLogin.style.display = 'none';

  // 선택한 탭에 따라 요소 표시하기
  if (tabType === 'personal') {
    personalTab.classList.add('active');
    personalLogin.style.display = 'block';
  } else {
    companyTab.classList.add('active');
    companyLogin.style.display = 'block';
  }
}

// 페이지 로드 시 기본적으로 기업회원 탭이 활성화되도록 설정
document.addEventListener('DOMContentLoaded', function () {
  // 초기 로드 시 기업회원 탭 활성화
  switchTab('company');
});
