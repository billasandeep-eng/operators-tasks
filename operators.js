
function addition() {

    let a = Number(document.getElementById("add1").value);
    let b = Number(document.getElementById("add2").value);

    let result = a + b;

    document.getElementById("addResult").innerHTML =
        "Result = " + result;
}


function subtraction() {

    let a = Number(document.getElementById("sub1").value);
    let b = Number(document.getElementById("sub2").value);

    let result = a - b;

    document.getElementById("subResult").innerHTML =
        "Result = " + result;
}


function multiplication() {

    let a = Number(document.getElementById("mul1").value);
    let b = Number(document.getElementById("mul2").value);

    let result = a * b;

    document.getElementById("mulResult").innerHTML =
        "Result = " + result;
}


function division() {

    let a = Number(document.getElementById("div1").value);
    let b = Number(document.getElementById("div2").value);

    let result = a / b;

    document.getElementById("divResult").innerHTML =
        "Result = " + result;
}


function percentage() {

    let value = Number(document.getElementById("per1").value);
    let total = Number(document.getElementById("per2").value);

    let result = (value / total) * 100;

    document.getElementById("perResult").innerHTML =
        "Percentage = " + result + "%";
}
