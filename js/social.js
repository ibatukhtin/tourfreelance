class Social extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="social">
        <a href="">
          <img src="img/vk.svg" alt="vk" />
        </a>
        <a href="">
          <img src="img/telegram.svg" alt="telegram" />
        </a>
        <a href="">
          <img src="img/odnoklassniki.svg" alt="odnoklassniki" />
        </a>
      </div>
    `;
  }
}

customElements.define('social-component', Social);
