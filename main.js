// // - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// // - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// // - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
// // - 숫자의 값과 위치가 모두 일치하면 S
// // - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// // - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// // - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

// // - 구현은 아래와 같은 순서로 진행해보세요.
// //     1. 랜덤 숫자 만들기
// //     2. 한자리 숫자에 대해 볼, 스크라이크 판단 하는 부분 구현하기
// //     3. 볼, 스트라이크를 표현하는 부분 구현하기
// //     4. 게임 종료하는 부분 구현하기


// let computerNum1 = 0;
// let computerNum2 = 0;
// let computerNum3 = 0;
// let playButton = document.getElementById("play-button")
// let userInput = document.getElementById("user-input") // 사용자의 입력을 받아온다.
// let resultDisplay = document.getElementById('resultDisplay');
// let form = document.getElementById('form');


// // 1. 랜덤 숫자 만들기
// let computerArray = [];
// function pickRandomNum() {

//     // 서로 다른 세 개의 숫자를 선택할 때까지의 반복
//     do {
//         var randomNumber = Math.floor(Math.random()*10);
//         if (!computerArray.includes(randomNumber)) {
//             computerArray.push(randomNumber);
//         }
//     } while (computerArray.length < 3);

//     console.log(computerArray);
// }
// pickRandomNum();    // 함수 실행


// // play() X. 왜냐하면 클릭시에만 함수 실행하도록 구현하려고 하기 때문이다.
// // play()를 매개변수로 넣으면 함수가 바로 실행됨.
// playButton.addEventListener("click", play)


// // 유저가 입력한 input을 배열에 담기
// let userArray = [];
// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // 폼 제출 기본 동작 방지

//     let userInput = 



// // 2. 한자리 숫자에 대해 볼, 스크라이크 판단 하는 부분 구현하기
// function play() {
//     console.log("게임 시작")

//     let userValue = userInput.value
//     console.log(userValue)

//     // 컴퓨터가 생성한 랜덤한 3개의 숫자를 문자열로 변환 후 1개의 숫자로 나란히 합치기 
//     var computerNumber = "" + computerNum1 + computerNum2 + computerNum3
//     console.log("computerNumber : ", computerNumber)

//     //볼, 스트라이크 갯수
//     let count_S = 0;
//     let count_B = 0;
    
//     for(let i = 0; i < userValue.length; i++) {
//         let isMatched = false;  //두 숫자가 일치하는지 여부를 저장한다.
//         for(let j = 0; j < computerNumber.length; j++) {

//             if(i === j && userValue[i] === computerNumber[j]) {
//                 console.log("userValue와 computerNumber의 값과 위치가 일치하면 스트라이크(S)");

//                 count_S++;
//                 isMatched = true;
//                 // console.log("count_S : ", count_S);
//                 break; // 내부 루프를 탈출하고 외부 루프의 다음 반복으로 이동
            
//             } else if(userValue[i] === computerNumber[j]) {
//                 console.log("userValue와 computerNumber의 값은 일치하지만 위치가 다르면 볼(B)");

//                 count_B++;
//                 isMatched = true;
//                 // console.log("count_B : ", count_B);
//                 // break; // 내부 루프를 탈출하고 외부 루프의 다음 반복으로 이동
//             } 
//             // 현재 자리에 대한 모든 비교가 끝났는지 확인하여 다음 자리로 넘어갈지 결정
//             // if (!isMatched) {
//             //     break; // 일치하는 숫자를 찾지 못했으므로 외부 루프를 종료하고 결과를 출력
        
//             }
//         }
//     }
//     console.log("스트라이크(S) 개수:", count_S);
//     console.log("볼(B) 개수:", count_B);
    
//     // 현재 자리에 대한 모든 비교가 끝났는지 확인하여 다음 자리로 넘어갈지 결정
//     // if (!isMatched) {
//     //     break; // 일치하는 숫자를 찾지 못했으므로 외부 루프를 종료하고 결과를 출력
//     // }

            
//             // if( i==j && userValue[i] == computerNumber[j]) {
//             //     console.log("userValue와 computerNumber의 값과 자리가 일치하면 스트라이크(S)")

//             //     count_S++;
//             //     console.log("count_S : ", count_S);
                
//             //     return 'S';

//             // } else if( userValue[i] == computerNumber[j] ) {
//             //     console.log("userValue와 computerNumber의 값은 일치하지만 위치가 다르면 볼(B)")

//             //     count_B++;
//             //     console.log("count_B : ", count_B);

//             //     return 'B';
//             // } 

//     // }

//     console.log("count_S : ", count_S);
//     console.log("count_B : ", count_B);

//     // return { strikes: count_S, balls: count_B };

    


//     // 결과를 html 요소에 출력한다.
//     // resultDisplay.textContent = result;

// // }