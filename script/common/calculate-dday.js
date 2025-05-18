export const calculateDDay = targetDay => {
  const today = new Date();
  const targetDate = new Date(targetDay);
  // 밀리초 단위 차이 계산
  const diffTime = targetDate - today;

  // 밀리초를 일수로 변환
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
