const accordionWrapper = document.querySelector('.faq__accordion-wrapper');
const accordionItems = document.querySelectorAll('.faq__accordion-item');

function accordionItemHandler() {
  accordionItems.forEach((item) => {
    setHeight(item);

    item.addEventListener('click', () => {
      const currentButton = item.querySelector('.faq__accordion-button');
      accordionWrapper.style.height = null;

      if(currentButton.hasAttribute('disabled')) {
        return;
      }

      if (!currentButton.classList.contains('faq__accordion-button--active')) {
        currentButton.setAttribute('aria-label', 'Закрыть вкладку.');
      } else {
        currentButton.setAttribute('aria-label', 'Открыть вкладку.');
      }

      currentButton.classList.toggle('faq__accordion-button--active');
      item.classList.toggle('faq__accordion-item--active');
      setHeight(item);
    });
  });
}

function setHeight(item) {
  const itemContent = item.querySelector('div:has(p)');

  if (item.classList.contains('faq__accordion-item--active')) {
    itemContent.style.maxHeight = `${itemContent.scrollHeight}px`;
  } else {
    itemContent.style.maxHeight = 0;
  }
}

accordionItemHandler();

