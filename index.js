// 변수 선언 시 타입 지정 
var tsString = 'kim';
var tsNumber = 123;
var tsBoolean = true;
var tsNull = null;
var tsUndefined = undefined;
var tsArrayString = ['1', '2', '3'];
var tsArrayInt = [1, 2, 3];
// ? 연산자는 optional 변수로 있을 수 도 있고 없을 수 도 있을때 사용.
var tsObject = { name: 'park', age: 28 };
// 복합적인 타입 지정
var tsComp = 123;
var customedType = null;
// 함수 만들때 타입지정
// 파라미터 옆의 return 타입도 지정 가능
function fun1(x) {
    return x * 2;
}
fun1(1);
fun1('1'); // error
var junsoo1 = [111, true];
var junsoo2 = ['111', 111]; // error
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
