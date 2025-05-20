class TopBtn extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    try {
      const [commRes, cardRes] = await Promise.all([
        fetch("../../css/common.css"),
        fetch("../../css/top-btn.css"),
      ]);

      const commCss = await commRes.text();
      const cardCss = await cardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss} \n ${cardCss}`;

      const btn = document.createElement("button");
      btn.className = "top-btn";
      this.shadow.appendChild(style);
      this.shadow.appendChild(btn);

      // 위로가기
      btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });

      document.addEventListener("scroll", () => {
        const sPos = document.documentElement.scrollTop;
        sPos > 200 ? btn.classList.remove("hidden") : btn.classList.add("hidden");
      });
    } catch (error) {
      console.error("top-btn 로딩 실패:", error);
    }
  }
}

customElements.define("top-btn", TopBtn);
