window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);

    let button2 = document.querySelector("#btn2");
  
    // Function for calculating BMI
    button2.addEventListener("click", con);
}

function calculateBMI(){
    document.querySelector('.result').style.display = "block";
    let height = parseInt(document
        .querySelector("#height").value);
        
    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");

    let bmi = (weight / ((height * height) 
                        / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML =
        `You Are Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
            `You Are A Normal Weight: <span>${bmi}</span>`;

    else result.innerHTML =
        `You Are Over Weight : <span>${bmi}</span>`;
}

function con(){
    document.querySelector('.result2').style.display = "block";
    let height2 = parseInt(document
        .querySelector("#height2").value);
        
    let weight2 = parseInt(document
        .querySelector("#weight2").value);

    let result2 = document.querySelector("#result2");

    let cm = Math.round(height2 * 2.54);
    let lbs = Math.round(weight2 * 0.453592);

    result2.innerHTML=
        `You are ${cm} cms and ${lbs} kgs`;
    
}
