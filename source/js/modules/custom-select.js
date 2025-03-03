document.querySelectorAll('.custom-select').forEach((selectWrapper) => {
  const select = selectWrapper.querySelector('.custom-select__select');
  const selectList = selectWrapper.querySelector('.custom-select__select-list');

  const onEscapeKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeSelect();
    }
  };

  const onOutsideClick = (evt) => {
    if (!selectWrapper.contains(evt.target)) {
      closeSelect();
    }
  };

  select.addEventListener('click', () => {
    if (selectList.classList.contains('custom-select__select-list--active')) {
      closeSelect();
    } else {
      openSelect();
    }
  });

  function openSelect() {
    selectList.classList.add('custom-select__select-list--active');

    document.addEventListener('keydown', onEscapeKeydown);
    document.addEventListener('click', onOutsideClick);
    selectList.addEventListener('click', onOptionClick);
  }

  function onOptionClick(evt) {
    const value = evt.target.textContent;
    select.value = value;
    closeSelect();
  }

  function closeSelect() {
    selectList.classList.remove('custom-select__select-list--active');

    document.removeEventListener('keydown', onEscapeKeydown);
    document.removeEventListener('click', onOutsideClick);
    selectList.removeEventListener('click', onOptionClick);
  }
});
