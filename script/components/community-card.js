class CommunityCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadCommunityCard();
  }

  async loadCommunityCard() {
    try {
      const commRes = await fetch('../../css/common.css');
      const commCss = await commRes.text();

      const CommunityCardRes = await fetch('../../css/postCardList.css', { cache: 'no-store' }); // 확장자 누락 주의
      const CommunityCardCss = await CommunityCardRes.text();

      const style = document.createElement('style');
      style.textContent = `${commCss}\n${CommunityCardCss}`;
      console.log('postCardCss 내용:', CommunityCardCss);

      const communityCard = document.createElement('section'); // div로 수정
      communityCard.innerHTML = `
        <section class="content-section">    
            <div class="content-list">
                <div class="content-wrap">
                    <div class="content-header">
                        <div class="field">IT/학술/논문</div>
                        <div class="type">공모전</div>
                        <div class="d-day">D-7</div> 
                    </div>

                    <div class="content-title">
                        <div class="title">AITHON 2025년 공모전 팀원...</div>
                    </div>

                    <div class="content-summary">
                        <p>총 5명 모집합니다. 자세한 내용은 아래 내용 참고 부탁드립니다...</p>
                    </div>
        
                    <div class="content-footer">
                        <div class="left-group">
                            <div class="writer">작성자</div>
                        </div>
        
                        <div class="right-group">
                            <div class="comment">
                                <!-- 말풍선 아이콘 -->
                                <i></i>
                                <span>78</span>
                            </div>
                            
                            <div class="scrap">
                                <!-- 스크랩 아이콘 -->
                                <i></i>
                                <span>78</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(communityCard);
    } catch (error) {
      console.error('communityCard 로딩 실패:', error);
    }
  }
}

customElements.define('community-card', CommunityCard);
