const inputA = document.querySelector("#input-a");
const inputB = document.querySelector("#input-b");
const inputC = document.querySelector("#input-c");
const solveBtn= document.querySelector("#solve-btn");

const outputA1 = document.querySelector(".output-a1");
const outputB1 = document.querySelector(".output-b1");
const outputA2 = document.querySelector(".output-a2");
const outputB2 = document.querySelector(".output-b2");
const outputC = document.querySelector("#output-c");
const answerParagraph = document.querySelector("#answer-paragraph");

solveBtn.addEventListener("click", solve);

function solve(){
    if(inputA.value==="" || inputB.value==="" || inputC.value==="" ){
        alert("You must fill all fields!");
    }else{
        let mult4AC= 4 * Number(inputA.value) * Number(inputC.value);
        let mult2A= 2 * Number(inputA.value);
        let bSquare= Number(inputB.value) * Number(inputB.value);
        let squareRoot = Math.sqrt(bSquare - mult4AC);
        let topSolutionX1= -Number(inputB.value) + squareRoot;
        let topSolutionX2= -Number(inputB.value) - squareRoot;
        let finalX1= topSolutionX1/mult2A;
        let finalX2= topSolutionX2/mult2A;

        let roundedX1= finalX1.toFixed(2);
        let roundedX2= finalX2.toFixed(2);

        answerParagraph.innerHTML= `
            <p>
                Solution: X1 = ${roundedX1} and X2 = ${roundedX2}
            </p>
        `
// Console logs below to test every stage and ensure correctness
        // console.log(mult4AC);
        // console.log(mult2A);
        // console.log(bSquare);
        // console.log(squareRoot);
        // console.log(topSolutionX1);
        // console.log(topSolutionX2);
        // console.log(finalX1);
        // console.log(finalX2);
        // console.log(roundedX1);
        // console.log(roundedX2);

        if(isNaN(mult4AC)){
            alert("Please input only numbers");
        }
    }
}

inputA.addEventListener("input", function (e){
    outputA1.textContent= e.target.value;
});
inputA.addEventListener("input", function (e){
    outputA2.textContent= e.target.value;
});
inputB.addEventListener("input", function (e){
    outputB1.textContent= e.target.value;
});
inputB.addEventListener("input", function (e){
    outputB2.innerHTML= `${e.target.value} <sup>2</sup>`;
});
inputC.addEventListener("input", function (e){
    outputC.textContent= e.target.value;
});

