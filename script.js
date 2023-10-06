function getButtonText(event) 
{
    const inpText = event.currentTarget.innerText;
    document.getElementById("screen").value += inpText;
}

function clearScreen()
{
    document.getElementById("screen").value = "";

}

function solve(){
    var str = document.getElementById("screen").value;
    var add = str.split("+");
    var minus = str.split("-")
    var div = str.split("/")
    var mul = str.split("X")
    var eval = 0;
    if(add.length > 1)
    {
        let a = parseInt(add[0]);
        let b = parseInt(add[1]);
        eval = a + b;

    }
    if(minus.length > 1)
    {
        let a = parseInt(minus[0]);
        let b = parseInt(minus[1]);
        eval = a - b;

    }
    if(div.length > 1)
    {
        let a = parseInt(div[0]);
        let b = parseInt(div[1]);
        eval = a / b;

    }
    if(mul.length > 1)
    {
        let a = parseInt(mul[0]);
        let b = parseInt(mul[1]);
        eval = a * b;
    }
  
    document.getElementById("screen").value = eval;
}

