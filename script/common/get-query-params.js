export const getQueryParams = () => {
  const params = new URLSearchParams(location.search);
  const queryObj = {};

  for (const [key, value] of params.entries()) {
    if (queryObj[key]) {
      // 이미 값이 있다면 배열로 저장
      if (Array.isArray(queryObj[key])) {
        queryObj[key].push(value);
      } else {
        queryObj[key] = [queryObj[key], value];
      }
    } else {
      queryObj[key] = value;
    }
  }

  return queryObj;
};
