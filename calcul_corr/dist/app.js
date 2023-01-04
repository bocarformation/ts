"use strict";
const section = document.querySelector("section");
const input = document.querySelector("input");
const btnClear = document.createElement("button");
btnClear.value = "C";
btnClear.innerText = "C";
section.append(btnClear);
const btnCalcul = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers = [0];
let ope = [];
let memory = [0];
const operators = { add: "+", sous: "-", mul: "*", div: "/", equal: "=" };
btnCalcul.map((chiffre) => {
    let btnDOM = document.createElement("button");
    btnDOM.addEventListener("click", (e) => handleClick(e));
    btnDOM.value = chiffre.toString();
    btnDOM.append(chiffre.toString());
    section.append(btnDOM);
});
for (let [key, value] of Object.entries(operators)) {
    let btnDOM = document.createElement("button");
    btnDOM.addEventListener("click", (e) => handleClickOpe(e));
    btnDOM.value = key;
    btnDOM.append(value);
    section.append(btnDOM);
    console.log(value);
}
const handleClick = (e) => {
    const target = e.target;
    numbers.push(parseInt(target.value));
    input.value = numbers.join("");
    // console.log(numbers.join(""));
};
let opeUsed = [];
const handleClickOpe = (e) => {
    const target = e.target;
    ope.push(target.value);
    opeUsed.push(target.value);
    switch (ope[0] === "add" || ope[0] === "sous" || ope[0] === "mul" || ope[0] === "div") {
        case true:
            // console.log(opeUsed);
            ope = [];
            memory = [...numbers];
            input.value = "";
            numbers = [null];
            //  console.log(opeUsed);
            console.log("Memory log:" + memory.join(""));
            console.log("Numbers log:" + numbers.join(""));
            break;
        default:
            if (target.value === "equal") {
                if (ope[0] === "equal") {
                    if (opeUsed.includes("add")) {
                        const result = parseInt(memory.join("")) + parseInt(numbers.join(""));
                        console.log("Debug total :" + result);
                        input.value = result.toString();
                    }
                    else if (opeUsed.includes("sous")) {
                        const result = parseInt(memory.join("")) - parseInt(numbers.join(""));
                        console.log("Debug total :" + result);
                        input.value = result.toString();
                    }
                    else if (opeUsed.includes("mul")) {
                        const result = parseInt(memory.join("")) * parseInt(numbers.join(""));
                        console.log("Debug total :" + result);
                        input.value = result.toString();
                    }
                    else if (opeUsed.includes("div")) {
                        const result = parseInt(memory.join("")) / parseInt(numbers.join(""));
                        console.log("Debug total :" + result);
                        input.value = result.toString();
                    }
                }
            }
            return;
    }
};
btnClear.addEventListener("click", () => clear());
const clear = () => {
    input.value = "";
    numbers = [0];
    memory = [0];
    opeUsed = [];
    ope = [];
};
