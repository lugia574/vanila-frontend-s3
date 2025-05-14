class CommunityList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(){
    return ['communityField', 'communityType', 'day', 'communityTitle', 'communitySummary', 'communityWriter', 'communityComments', 'communityScraps'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const communityField = this.getAttribute('communityField') || '없음';
    const communityType = this.getAttribute('communityType') || '없음';
    const day = this.getAttribute('day') || '0';
    const communityTitle = this.getAttribute('communityTitle') || '없음';
    const communitySummary = this.getAttribute('communitySummary') || '없음';
    const communityWriter = this.getAttribute('communityWriter') || '없음';
    const communityComments = this.getAttribute('communityComments') || '0';
    const communityScraps = this.getAttribute('communityScraps') || '0';

    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ''; // 기존 내용 제거
    // 

    try {
      const commRes = await fetch('../../css/common.css');
      const commCss = await commRes.text();

      const CommunityListRes = await fetch('../../css/postList.css', { cache: 'no-store' }); // 확장자 누락 주의
      const CommunityListCss = await CommunityListRes.text();

      const style = document.createElement('style');
      style.textContent = `${commCss}\n${CommunityListCss}`;
      console.log('CommunityListCss 내용:', CommunityListCss);

      const communityList = document.createElement('content-wrap');
      communityList.innerHTML = `
        <div class="content-wrap">
          <div class="content-header">
              <div class="left-group">
                  <div class="title">${communityTitle}</div>
                  <div class="field">${communityField}</div>
              </div>
              <div class="right-group">
                  <div class="type">${communityType}</div>
                  <div class="d-day">D-${day}</div>  
              </div>
          </div>

          <div class="content-summary">
              <P>${communitySummary}</P>
          </div>

          <div class="content-footer">
              <div class="left-group">
                  <div class="writer">${communityWriter}</div>
              </div>

              <div class="right-group">
                  <div class="comment">
                      <i></i>
                      <span>${communityComments}</span>
                  </div>
                  
                  <div class="scrap">
                      <i></i>
                      <span>${communityScraps}</span>
                  </div>
              </div>
          </div>
        </div>
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(communityList);
    } catch (error) {
      console.error('communityList 로딩 실패:', error);
    }
  }
  
}

customElements.define('community-list', CommunityList);
