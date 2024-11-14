class Social extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="social">
        <img src="img/vk.svg" alt="vk" />
        <img src="img/telegram.svg" alt="telegram" />
        <img src="img/odnoklassniki.svg" alt="odnoklassniki" />
      </div>
    `;
  }
}

customElements.define('social-component', Social);
