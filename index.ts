
 // 변수 선언 시 타입 지정 
 let tsString:string = 'kim';
 let tsNumber:number = 123;
 let tsBoolean:boolean = true;
 let tsNull:null = null;
 let tsUndefined:undefined = undefined;
 let tsArrayString:String[] = ['1','2','3'];
 let tsArrayInt:Number[] = [1,2,3];

 // ? 연산자는 optional 변수로 있을 수 도 있고 없을 수 도 있을때 사용.
 let tsObject:{name?: String, age: Number} = {name:'park', age: 28};

 // 복합적인 타입 지정
 let tsComp:string | number = 123;

 // 커스텀 타입 지정
 type CustomedType = String | null; 
 let customedType :CustomedType = null;

// 함수 만들때 타입지정
// 파라미터 옆의 return 타입도 지정 가능
function fun1(x: number) :number {
    return x * 2;
}
fun1(1);
fun1('1'); // error

// 튜플 타입 0번째 인수는 number, 1번째 인수는 boolean
type Menber = [number, boolean];
let junsoo1: Menber = [111, true];
let junsoo2: Menber = ['111', 111]; // error

//객체내에 너무 많은 프로퍼티를 선언해야할 경우 퉁치는 방법
type Menber2 = {
    [key: string] : string,
}


class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}


