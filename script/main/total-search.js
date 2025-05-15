const getCheckedValues = name => {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
};

const form = document.querySelector('.total-search-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const categoryValues = getCheckedValues('category');
  const ageValues = getCheckedValues('age');
  const prizeValues = getCheckedValues('prize');
  const searchValue = form.querySelector('input[type="text"]').value;

  // 오브젝트에 박기
  const checkedObject = {};
  checkedObject['category'] = categoryValues;
  checkedObject['age'] = ageValues;
  checkedObject['prize'] = prizeValues;
  checkedObject['searchVale'] = searchValue;

  // local에 박기
  // window.localStorage.setItem('searchFilters', JSON.stringify(checkedObject));

  // GET 으로 쏘기
  const params = new URLSearchParams();
  categoryValues.forEach(val => params.append('category', val));
  ageValues.forEach(val => params.append('age', val));
  prizeValues.forEach(val => params.append('prize', val));

  if (searchValue) {
    params.append('query', searchValue);
  }
  // 최종 URL로 이동
  window.location.href = `/pages/contest/contest.html?${params.toString()}`;
});

document.querySelectorAll('.select-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const box = btn.closest('.box');
    const arrow = btn.querySelector('.btn-arrow');

    arrow.classList.toggle('rotate');
    box.classList.toggle('open');
  });
});
