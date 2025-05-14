document.querySelectorAll('.select-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const box = btn.closest('.box');
    const arrow = btn.querySelector('.btn-arrow');

    arrow.classList.toggle('rotate');
    box.classList.toggle('open');
  });
});
