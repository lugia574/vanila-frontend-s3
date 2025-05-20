// 크롤링 사이트 기준 페이지
const PAGE_SIZE = 5;

export const dataSources = [
  { name: "korea", path: "/public/data/korea-policy-data.json", data: [], cursor: 0 },
  { name: "seoul", path: "/public/data/seoul-policy-data.json", data: [], cursor: 0 },
  { name: "region", path: "/public/data/region-policy-data.json", data: [], cursor: 0 },
  { name: "seoul-gu", path: "/public/data/seoul-gu-policy-data.json", data: [], cursor: 0 },
];

// policy-json 데이터 로드 및 최신순 정렬
export const loadAllData = async () => {
  await Promise.all(
    dataSources.map(async source => {
      try {
        const res = await fetch(source.path);
        if (!res.ok) throw new Error(`Fetch failed: ${source.name}`);
        const json = await res.json();
        source.data = json.reverse().map(item => ({
          ...item,
          source: source.name,
        }));
      } catch (error) {
        console.error(`[Error] ${source.name} 데이터 로드 실패`, error);
        source.data = [];
      }
    })
  );
};

// 5개마다 게시글 정보 가져오기
export const getNextBatch = () => {
  const result = [];

  dataSources.forEach(source => {
    const nextItems = source.data.slice(source.cursor, source.cursor + PAGE_SIZE);
    source.cursor += PAGE_SIZE;
    result.push(...nextItems);
  });

  return result;
};

// 데이터 끝까지 무한 반복
export const hasMoreData = () => {
  return dataSources.some(source => source.cursor < source.data.length);
};

// 전체 데이터 return
export const getAllData = () => {
  return dataSources.flatMap(source => source.data); // 병합된 데이터
};
