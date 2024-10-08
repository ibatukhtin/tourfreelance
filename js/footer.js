class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer">
        <div class="container">
          <div class="footer__content">
            <div class="footer__logo-wrapper">
              <div class="logo">
                <div class="tour">Tour</div>
                <div class="freelance">Freelance.ru</div>
              </div>
              <div>powered by</div>
              <a href="https://www.centerbooking.ru" target="_blank">CenterBooking.ru</a>
            </div>
            <div class="contacts">
              <h2>Контакты</h2>
              
              <div class="contacts__grid">
                <div class="contacts__grid-item">
                 <b>Новосибирск:</b>
                  <p>+7 (999) 999-99-99</p>
                </div>
                <div class="contacts__grid-item">
                  <b>Екатеринбург:</b>
                  <p>+7 (999) 999-99-99</p>
                </div>
                <div class="contacts__grid-item">
                  <b>Челябинск:</b>
                  <p>+7 (999) 999-99-99</p>
                </div>
                <div class="contacts__grid-item">
                  <b>Санкт-Петербург:</b>
                  <p>+7 (999) 999-99-99</p>
                </div>
                <div class="contacts__grid-item">
                  <b>E-mail:</b>
                  <p>tourfreelance@mail.ru</p>
                </div>
                <div class="contacts__grid-item">
                  <b></b>
                  <a href="" target="_blank" style="width: fit-content">Публичная оферта</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
