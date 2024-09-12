let hello = "Maciej";

console.log("Hello " + hello)

let doColorBtn = document.getElementById("doColorBtn");

doColorBtn.addEventListener("click", () => {
    let setColor = document.getElementById("setColor").value;

    console.log("Sätter färgen till " + setColor)

    document.body.style.backgroundColor = setColor;

}

)