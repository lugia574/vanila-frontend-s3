// 마이페이지 관련 JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // 사용자 정보 (실제로는 서버에서 가져올 데이터)
  const userProfile = {
    name: '김공모',
    email: 'contest@example.com',
    location: '서울특별시',
    profileImage: '../../assets/images/profile-default.png', // 기본 프로필 이미지 경로
  };

  // 북마크한 공모전 데이터 (실제로는 서버에서 가져올 데이터)
  const bookmarkedContests = [
    {
      id: 1,
      title: '[국민체육진흥공단] 스포츠산업 창업 아이디어 공모전',
      field: '스포츠/음악',
      type: '공모전',
      dDay: 'D-7',
      summary: '국민체육진흥공단에서 스포츠산업 창업 아이디어를 모집합니다...',
      organizer: '국민체육진흥공단',
      isBookmarked: true,
    },
    {
      id: 2,
      title: '제7회 서울교육 데이터 분석·활용 아이디어 공모전',
      field: 'IT/학술/논문',
      type: '공모전',
      dDay: 'D-14',
      summary: '서울특별시교육청에서 서울교육 데이터 분석·활용 아이디어 발굴을 통해...',
      organizer: '서울특별시교육청',
      isBookmarked: true,
    },
  ];

  // 공모전 신청 현황 목록 로드
  function loadApplications() {
    const applicationList = document.querySelector('.application-section .content-list');
    if (!applicationList) return;

    applicationList.innerHTML = ''; // 기존 목록 초기화

    applications.forEach(app => {
      const listItem = document.createElement('li');
      listItem.className = 'content-wrap';
      listItem.innerHTML = `
        <div class="content-header">
          <div class="left-group">
            <div class="title">${app.title}</div>
            <div class="field">${app.field}</div>
          </div>
          <div class="right-group">
            <div class="type">${app.type}</div>
            <div class="status ${app.statusClass}">${app.status}</div>
          </div>
        </div>
        <div class="content-summary">
          <p>${app.summary}</p>
        </div>
        <div class="content-footer">
          <div class="left-group">
            <div class="date">신청일: ${app.applyDate}</div>
          </div>
          <div class="right-group">
            <button class="detail-btn" data-id="${app.id}">상세보기</button>
          </div>
        </div>
      `;
      applicationList.appendChild(listItem);

      // 상세보기 버튼에 이벤트 리스너 추가
      const detailBtn = listItem.querySelector('.detail-btn');
      detailBtn.addEventListener('click', function () {
        const applicationId = parseInt(this.getAttribute('data-id'));
        showApplicationDetail(applicationId);
      });
    });
  }

  // 공모전 신청 상세 정보 표시
  function showApplicationDetail(applicationId) {
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      // 여기서는 간단한 알림으로 표시, 실제로는 모달이나 새 페이지로 이동할 수 있음
      alert(`
        공모전: ${application.title}
        분야: ${application.field}
        상태: ${application.status}
        신청일: ${application.applyDate}
      `);

      // TODO: 모달 창 또는 상세 페이지로 이동하는 로직 추가
      console.log('공모전 상세 정보:', application);
    }
  }

  // 내가 쓴 글 목록 로드
  function loadMyPosts() {
    const myPostsList = document.querySelector('.my-posts-section .content-list');
    if (!myPostsList) return;

    myPostsList.innerHTML = ''; // 기존 목록 초기화

    myPosts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.className = 'content-wrap';
      listItem.innerHTML = `
        <div class="content-header">
          <div class="left-group">
            <div class="title">${post.title}</div>
            <div class="field">${post.field}</div>
          </div>
          <div class="right-group">
            <div class="type">${post.type}</div>
            ${post.dDay ? `<div class="d-day">${post.dDay}</div>` : ''}
          </div>
        </div>
        <div class="content-summary">
          <p>${post.summary}</p>
        </div>
        <div class="content-footer">
          <div class="left-group">
            <div class="date">작성일: ${post.date}</div>
          </div>
          <div class="right-group">
            <div class="comment">
              <i class="comment-icon"></i>
              <span>${post.commentCount}</span>
            </div>
            <div class="scrap">
              <i class="scrap-icon"></i>
              <span>${post.scrapCount}</span>
            </div>
          </div>
        </div>
      `;
      myPostsList.appendChild(listItem);

      // 제목 클릭 시 상세 페이지로 이동 이벤트 추가
      const titleElement = listItem.querySelector('.title');
      titleElement.style.cursor = 'pointer';
      titleElement.addEventListener('click', function () {
        viewPostDetail(post.id);
      });
    });
  }

  // 글 상세 보기
  function viewPostDetail(postId) {
    const post = myPosts.find(item => item.id === postId);
    if (post) {
      // 실제로는 페이지 이동 또는 모달 표시를 구현할 수 있음
      console.log('게시글 상세 보기:', post);
      // 예시: 게시글 상세 페이지로 이동
      // window.location.href = `/post/${postId}`;
      alert(`게시글 "${post.title}" 상세 페이지로 이동합니다.`);
    }
  }

  // 프로필 수정 버튼 이벤트
  function setupProfileEditButton() {
    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
      editBtn.addEventListener('click', function () {
        // 프로필 수정 페이지로 이동하거나 모달 표시
        alert('프로필 수정 페이지로 이동합니다.');
        // 실제로는 아래와 같이 구현할 수 있음
        // window.location.href = '/profile/edit';
        // 또는 모달 창 표시
        // showProfileEditModal();
      });
    }
  }

  // 전체보기 버튼 이벤트 설정
  function setupViewAllButtons() {
    const viewAllButtons = document.querySelectorAll('.view-all a');
    viewAllButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionTitle = this.closest('.section-top').querySelector('h2 a').textContent;

        // 각 섹션별 전체보기 페이지로 이동
        switch (sectionTitle) {
          case '북마크한 공모전':
            alert('북마크한 공모전 전체 목록 페이지로 이동합니다.');
            // window.location.href = '/bookmarks';
            break;
          case '공모전 신청 현황':
            alert('공모전 신청 현황 전체 목록 페이지로 이동합니다.');
            // window.location.href = '/applications';
            break;
          case '내가 쓴 글':
            alert('내가 쓴 글 전체 목록 페이지로 이동합니다.');
            // window.location.href = '/my-posts';
            break;
        }
      });
    });
  }

  // 날짜 포맷 함수 (YYYY-MM-DD 형식으로 변환)
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // D-day 계산 함수
  function calculateDDay(deadlineString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 오늘 날짜의 00:00:00으로 설정

    const deadline = new Date(deadlineString);
    deadline.setHours(0, 0, 0, 0);

    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return `D-${diffDays}`;
    } else if (diffDays === 0) {
      return 'D-Day';
    } else {
      return `D+${Math.abs(diffDays)}`;
    }
  }

  // 데이터 갱신 함수 (예: 서버에서 최신 데이터를 가져와 UI 업데이트)
  function refreshData() {
    // 실제로는 서버 API 호출을 통해 최신 데이터를 가져옴
    console.log('데이터 갱신 중...');

    // 모의 데이터를 갱신한 후 UI 업데이트
    loadUserProfile();
    loadBookmarkedContests();
    loadApplications();
    loadMyPosts();

    console.log('데이터 갱신 완료');
  }

  // 초기화 함수
  function init() {
    loadUserProfile();
    loadBookmarkedContests();
    loadApplications();
    loadMyPosts();
    setupProfileEditButton();
    setupViewAllButtons();

    // 5분마다 데이터 갱신 (실제 서비스에서는 필요에 따라 조정)
    // setInterval(refreshData, 5 * 60 * 1000);
  }

  // 페이지 초기화
  init();
});
const applications = [
  {
    id: 101,
    title: '제 6회 부울경 ICT 아이디어 경진대회',
    field: 'IT/학술/논문',
    type: '공모전',
    status: '신청완료',
    statusClass: 'application',
    summary: 'ICT에 관심을 가지고 있는 전국의 개인 또는 팀으로 공모 상세 별 조건 상이...',
    applyDate: '2025-05-01',
  },
  {
    id: 102,
    title: '로컬 특화 체험 관광 컨텐츠 공모전',
    field: '아이디어/기획',
    type: '공모전',
    status: '진행중',
    statusClass: 'progress',
    summary: '최우수 체험관광상품 시상금 총 3,000만원 지급, 활동비 지원, ...',
    applyDate: '2025-05-10',
  },
];

// 내가 쓴 글 데이터 (실제로는 서버에서 가져올 데이터)
const myPosts = [
  {
    id: 201,
    title: 'AITHON 2025년 공모전 팀원 모집',
    field: 'IT/학술/논문',
    type: '공모전',
    dDay: 'D-7',
    summary: '총 5명 모집합니다. 자세한 내용은 아래 내용 참고 부탁드립니다...',
    date: '2025-05-08',
    commentCount: 12,
    scrapCount: 8,
  },
  {
    id: 202,
    title: 'IT 개발자를 위한 공모전 추천 목록 공유',
    field: 'IT/학술/논문',
    type: '일반',
    summary: '요즘 IT 개발자들이 참여하기 좋은 공모전 목록을 공유합니다...',
    date: '2025-05-05',
    commentCount: 24,
    scrapCount: 16,
  },
];

// 사용자 프로필 정보 로드
function loadUserProfile() {
  document.querySelector('.user-name').textContent = userProfile.name;
  document.querySelector('.user-email').textContent = userProfile.email;
  document.querySelector('.user-location').textContent = userProfile.location;

  const profileImg = document.querySelector('.profile-img img');
  if (profileImg) {
    profileImg.src = userProfile.profileImage;
    profileImg.alt = `${userProfile.name}의 프로필 이미지`;
  }
}

// 북마크 상태 변경 함수
function toggleBookmark(contestId, bookmarkIcon) {
  const contest = bookmarkedContests.find(item => item.id === contestId);
  if (contest) {
    contest.isBookmarked = !contest.isBookmarked;

    if (contest.isBookmarked) {
      bookmarkIcon.classList.add('scrap-active');
    } else {
      bookmarkIcon.classList.remove('scrap-active');
      // 북마크 취소 시 UI에서 항목 제거 (선택사항)
      // 여기선 간단한 예시로 애니메이션 후 요소를 숨김
      const listItem = bookmarkIcon.closest('.content-wrap');
      listItem.style.transition = 'opacity 0.5s';
      listItem.style.opacity = '0';

      setTimeout(() => {
        listItem.style.display = 'none';
      }, 500);
    }
  }
}

// 북마크한 공모전 목록 로드
function loadBookmarkedContests() {
  const bookmarkList = document.querySelector('.bookmark-section .content-list');
  if (!bookmarkList) return;

  bookmarkList.innerHTML = ''; // 기존 목록 초기화

  bookmarkedContests.forEach(contest => {
    const listItem = document.createElement('li');
    listItem.className = 'content-wrap';
    listItem.innerHTML = `
        <div class="content-header">
          <div class="left-group">
            <div class="title">${contest.title}</div>
            <div class="field">${contest.field}</div>
          </div>
          <div class="right-group">
            <div class="type">${contest.type}</div>
            <div class="d-day">${contest.dDay}</div>
          </div>
        </div>
        <div class="content-summary">
          <p>${contest.summary}</p>
        </div>
        <div class="content-footer">
          <div class="left-group">
            <div class="organizer">${contest.organizer}</div>
          </div>
          <div class="right-group">
            <div class="bookmark">
              <i class="bookmark-icon ${contest.isBookmarked ? 'scrap-active' : ''}" data-id="${
      contest.id
    }"></i>
            </div>
          </div>
        </div>
      `;
    bookmarkList.appendChild(listItem);

    // 북마크 아이콘에 이벤트 리스너 추가
    const bookmarkIcon = listItem.querySelector('.bookmark-icon');
    bookmarkIcon.addEventListener('click', function () {
      toggleBookmark(parseInt(this.getAttribute('data-id')), this);
    });
  });
}

// 공모전
