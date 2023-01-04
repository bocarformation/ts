const section = document.querySelector("section") as HTMLElement
const input = document.querySelector("input") as HTMLInputElement
const btnClear = document.createElement("button") as HTMLButtonElement
btnClear.value = "C"
btnClear.innerText = "C"
section.append(btnClear)


const btnCalcul: number[] = [0,1,2,3,4,5,6,7,8,9];
let numbers: [number | string | any] = [0];
let ope: string[] = [];
let memory: [number | string] = [0];

interface Operator{
    add: string,
    sous: string,
    mul: string,
    div: string,
    equal: string
}

const operators: Operator = {add:"+", sous:"-", mul: "*", div: "/", equal: "="}

btnCalcul.map((chiffre: number) => {
    let btnDOM: string | number | HTMLButtonElement = document.createElement("button") as HTMLButtonElement
   btnDOM.addEventListener("click", (e: Event) => handleClick(e))
    btnDOM.value = chiffre.toString()
    btnDOM.append(chiffre.toString())
    section.append(btnDOM)

})

for (let [key, value] of Object.entries(operators)){
    let btnDOM: string | number | HTMLButtonElement = document.createElement("button") as HTMLButtonElement
    btnDOM.addEventListener("click", (e: Event) => handleClickOpe(e))
    btnDOM.value = key;
    btnDOM.append(value)
    section.append(btnDOM)
    console.log(value);
    

}

const handleClick = (e: Event) =>{
    
    const target = e.target as HTMLInputElement

    numbers.push(parseInt(target.value))
    
    input.value = numbers.join("")
    // console.log(numbers.join(""));
    

}
let opeUsed: string[] = [];

const handleClickOpe = (e: Event) => {

    const target = e.target as HTMLInputElement
   
    ope.push(target.value)
    opeUsed.push(target.value)

 
    switch(ope[0] === "add" || ope[0] ==="sous" || ope[0] === "mul" || ope[0] === "div"){
        case true:
        
            // console.log(opeUsed);
            
            ope = [];
            memory = [...numbers]
            input.value = ""
             numbers = [null]; 
            //  console.log(opeUsed);
             console.log("Memory log:"+memory.join(""));
             console.log("Numbers log:"+numbers.join(""));
          break;
        
        default:  
        if(target.value === "equal"){
        
            if(ope[0] === "equal"){
                if(opeUsed.includes("add")){
                           const result = parseInt(memory.join("")) + parseInt(numbers.join(""))
                console.log("Debug total :" + result);
                
                input.value = result.toString()
             
                }else if(opeUsed.includes("sous")){
                    const result = parseInt(memory.join("")) - parseInt(numbers.join(""))
                    console.log("Debug total :" + result);
                    
                    input.value = result.toString()
                 
                }else if(opeUsed.includes("mul")){
                    const result = parseInt(memory.join("")) * parseInt(numbers.join(""))
                    console.log("Debug total :" + result);
                    
                    input.value = result.toString()
                 
                }else if(opeUsed.includes("div")){
                    const result = parseInt(memory.join("")) / parseInt(numbers.join(""))
                    console.log("Debug total :" + result);
                    
                    input.value = result.toString()
                 
                }
  
            }
             
          }
          return 

    }
    
}

btnClear.addEventListener("click", () => clear())
const clear = () =>{
    input.value = ""
    numbers= [0];
    memory = [0];
    opeUsed =[];
    ope = []

}