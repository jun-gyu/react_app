/*
JSX 자바스크립트 확장 문법.
React element를 생성 한다.
JSX 중괄호 안에는 모든 javaScript 표현식을 넣을 수 있다.

JSX도 표현식입니다
컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 
JavaScript 객체로 인식됩니다.
즉, JSX를 if 구문 및 for loop 안에 사용하고, 
변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있습니다.
*/
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Rovert ",
  lastName: "Downey Jr.",
};
function App() {
  return (
    <div>
      <h1>{formatName(user)}</h1>
    </div>
  );
}

export default App;
