const accordions = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');
const arrows = document.querySelectorAll('.arrow');

active = (item, index) => {
  contents.forEach((content, i) => {
    if (i !== index) {
      content.style.height = 0;
    }
  })
  item.style.height = `${item.scrollHeight}px`;
  arrows.forEach((arrow, i) => {
    arrow.style.transform = 'rotate(-135deg)';
    if (i !== index) {
      arrow.style.transform = 'rotate(45deg)';
    }

  })
}

accordions.forEach(
  (accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i))
  });
