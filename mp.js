// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");
// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");

// const symbols = '`~!@#$%^&*()_+=-{[}]|":;<,>.?/';

// let password = "";
// let passwordLength = 10;
// let checkCount =0;
// handleSlider();

// //set password lenght
// function handleSlider(){
//     inputSlider.value = passwordLength;
//     lengthDisplay.innerText = passwordLength;
// }

// function setIndicator(color) {
//     indicator.style.backgroundcolor = color;
// }

// function getRndInteger(min,max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function generateRandomNumber() {
//     return getRndInteger(0,9);
// }

// function generateLowercase() {
//     return String.fromCharCode(getRndInteger(97,123)); 
// }

// function generateUppercase() {
//     return String.fromCharCode(getRndInteger(65,91)); 
// }

// function generateSymbol() {
//     const randNum = getRndInteger(0 , symbols.length);
//     return symbols.charAt(randNum);
// }

// function calcStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;
//     if(uppercaseCheck.checked) hasUpper = true;
//     if(lowercaseCheck.checked) hasLower = true;
//     if(numbersCheck.checked) hasNum = true;
//     if(symbolsCheck.checked) hasSym = true;

//     if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength>=8)
//     {
//         setIndicator("#0f0");
//     }
//     else if((hasLower || hasUpper) &&(hasNum||hasSym)&&passwordLength>=6)
//     {
//         setIndicator("#ff0");
//     }
//     else
//     {
//         setIndicator("#f00");
//     }
// }

// async function copyContent() {
//     try
//     {
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copyMsg.innerText = "Copied";
//     }
//     catch(e)
//     {
//         copyMsg.innerText = "Failed";
//     }

//     //to make copy wala span visible
//     copyMsg.classList.add("active");

//     setTimeout( () => {
//         copyMsg.classList.remove("active");
//     } , 2000);
// }

// function sufflePassword(array)
// {
//     for(let i =array.length -1;i>0;i--)
//     {
//         const j = Math.floor(Math.random() *(i+1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     let str = "";
//     array.forEach( (el) => (str+=el));
//     return str;
// }

// function handleCheckBoxChange()
// {
//     checkCount = 0;
//     allCheckBox.forEach( (checkbox) => {
//         if(checkbox.checked)
//             checkCount++;
//     });

//     if(passwordLength <checkCount)
//     {
//         passwordLength = checkCount ;
//         handleSlider();
//     }
// }

// allCheckBox.forEach( (checkbox) => {
//     checkbox.addEventListener( 'change' , handleCheckBoxChange);
// })

// inputSlider.addEventListener('input' , (e) => {
//     passwordLength = e.target.value;
//     handleSlider();
// })

// copyBtn.addEventListener('click' , () => {
//     if(passwordDisplay.value)
//         copyContent();
// })

// generateBtn.addEventListener('click' , () => {
//     if(checkCount==0)
//         return;
//     if(passwordLength <checkCount)
//     {
//         passwordLength = checkCount;
//         handleSlider();
//     }

//     password = "";

//     // if(uppercaseCheck.checked)
//     // {
//     //     password += generateUppercase();
//     // }
//     // if(lowercaseCheck.checked)
//     // {
//     //     password += generateLowercase();
//     // }
//     // if(numbersCheck.checked)
//     // {
//     //     password += generateRandomNumber();
//     // }
//     // if(symbolsCheck.checked)
//     // {
//     //     password += generateSymbol();
//     // }

//     let funArr = [];

//     if(uppercaseCheck.checked)
//         funArr.push(generateUppercase);
    
//     if(lowercaseCheck.checked)
//         funArr.push(generateLowercase);
//     if(numbersCheck.checked)
//         funArr.push(generateRandomNumber);
//     if(symbolsCheck.checked)
//         funArr.push(generateSymbol);

//     for(let i =0; i<funArr.length ;i++)
//     {
//         password += funArr[i]();
//     }
//     for(let i =0; i<passwordLength-funArr.length ;i++)
//     {
//         let randIndex = getRndInteger(0 ,funArr.length);
//         password += funArr[randIndex]();
//     }

//     password = sufflePassword(Array.from(password));

//     passwordDisplay.value = password;
//     calcStrength();

// })


const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatebutton"); // Fixed class name
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '`~!@#$%^&*()_+=-{[}]|":;<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

// Set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundColor = color; // Fixed spelling of backgroundColor
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 9);
}

function generateLowercase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUppercase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSym = symbolsCheck.checked;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0"); // Strong
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0"); // Medium
    } else {
        setIndicator("#f00"); // Weak
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swapping
    }
    return array.join("");
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) copyContent();
});

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
        copyMsg.style.display = "inline"; // Show the message
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
        copyMsg.style.display = "none"; // Hide the message after 2 seconds
    }, 2000);
}


generateBtn.addEventListener('click', () => {
    if (checkCount == 0) return;
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    password = "";
    let funArr = [];

    if (uppercaseCheck.checked) funArr.push(generateUppercase);
    if (lowercaseCheck.checked) funArr.push(generateLowercase);
    if (numbersCheck.checked) funArr.push(generateRandomNumber);
    if (symbolsCheck.checked) funArr.push(generateSymbol);

    // Ensure at least one character from each selected type
    funArr.forEach((func) => {
        password += func();
    });

    // Fill the rest of the password length
    for (let i = 0; i < passwordLength - funArr.length; i++) {
        let randIndex = getRndInteger(0, funArr.length);
        password += funArr[randIndex]();
    }

    password = shufflePassword(Array.from(password));

    passwordDisplay.value = password;
    calcStrength();
});
