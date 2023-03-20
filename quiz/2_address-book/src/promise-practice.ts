// Promise가 없는 경우 타입을 string[]으로만 지정
// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// fetchItems();

// return값에 Promise가 들어가니 return 타입을 Promise와 generic 조합으로 지정
// function fetchItems(): Promise<string[]> {
//   let items = ['a', 'b', 'c'];
//   return new Promise(function(resolve) {
//     resolve(items);
//   });
// }
// fetchItems();

// 화살표 함수로 만들어봄
const fetchItems = (): Promise<string[]> => {
  let items = ['a', 'b', 'c'];
  return new Promise(resolve => {
    resolve(items);
  });
}
fetchItems();
