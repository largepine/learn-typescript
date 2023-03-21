// // div 태그를 조작하기 위해 
// const div = document.querySelector('div');
// // 이렇게 하면 'div' is possibly 'null'. 에러
// div.innerText;

// // null을 없애기 위해 이렇게 해줄 수 있지만
// if (div) {
//   div.innerText
// }

// null이 아니고 정확히 HTMLDivElement 타입이다 라고 지정하면 에러 없이 사용 가능
const div = document.querySelector('div') as HTMLDivElement;
div.innerText;

interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

const introduce = (): Developer | Person => {
  return { name: 'tony', age: 33, skill: 'ts'};
}

const tony = introduce();
console.log(tony.skill)

if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
}