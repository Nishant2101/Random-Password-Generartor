const upper_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_characters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()-_.=+[<{]}|>:',?/`";
document.querySelector(".btn").addEventListener("click", generateString);

function generateString() {
    var slider_value = document.querySelector(
        ".r-slider__cloud_moving"
    ).innerHTML;
    document.querySelector("#generated-password").innerHTML = "";
    var result = "";
    var lower = "";
    var num = "";
    var special_characters = "";
    for (let i = 0; i < slider_value; i++) {
        result += upper_characters.charAt(Math.ceil(Math.random() * upper_characters.length));
        num += numbers.charAt(Math.ceil(Math.random() * numbers.length));
        special_characters += special.charAt(Math.ceil(Math.random() * special.length));
        lower += lower_characters.charAt(Math.ceil(Math.random() * lower_characters.length));
    }
    var check = document.querySelectorAll(".upper");
    var checkedVal = "";
    for (let i = 0; i < check.length; i++) {
        var checks = document.querySelectorAll(".upper")[i];

        if (checks.checked) {
            checkedVal += checks.value;
        }
    }
    console.log(checkedVal);
    switch (checkedVal) {
        case "u":
            var password = result;
            // const shuffledPasswordU = shuffleString(password);
            document.querySelector("#generated-password").innerHTML =
                password;
            document.querySelector(".error").style.display = "none";

            break;
        case "l":
            var password = lower;
            // const shuffledPasswordL = shuffleString(password);
            document.querySelector("#generated-password").innerHTML = password;
            console.log("Lower Case");
            break;
        case "n":
            var password = num;
            // const shuffledPasswordN = shuffleString(password);
            document.querySelector("#generated-password").innerHTML = password;
            
            console.log("Number");
            break;
        case "s":
            var password = special_characters;
            // const shuffledPasswordN = shuffleString(password);
            document.querySelector("#generated-password").innerHTML = password;
            console.log("Number");
            break;
        case "ul":
            var password = result + lower;
            const shuffledPasswordUl = shuffleString(password);
            var new_password = shuffledPasswordUl.slice(0, slider_value);

            document.querySelector("#generated-password").innerHTML = new_password;
            // console.log(result + num);
            break;
        case "un":
            var password = result + num;
            const shuffledPasswordUn = shuffleString(password);
            var new_password = shuffledPasswordUn.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("un Character");
            break;
        case "us":
            var password = result + special_characters;
            const shuffledPasswordUs = shuffleString(password);
            var new_password = shuffledPasswordUs.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("us Character");
            break;
        case "ln":
            var password = lower + num;
            const shuffledPasswordLn = shuffleString(password);
            var new_password = shuffledPasswordLn.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("ln Character");
            break;
        case "ls":
            var password = lower + special_characters;
            const shuffledPasswordLs = shuffleString(password);
            var new_password = shuffledPasswordLs.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("ls Character");
            break;
        case "ns":
            var password = num + special_characters;
            const shuffledPasswordNs = shuffleString(password);
            var new_password = shuffledPasswordNs.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("ns Character");
            break;
        case "uln":
            var password = result + lower + num;
            const shuffledPasswordUln = shuffleString(password);
            var new_password = shuffledPasswordUln.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            // console.log("uln Character");
            break;
        case "uls":
            var password = result + lower + special_characters;
            const shuffledPasswordUls = shuffleString(password);
            var new_password = shuffledPasswordUls.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            break;
        case "uns":
            var password = result + special_characters + num;
            const shuffledPasswordUns = shuffleString(password);
            var new_password = shuffledPasswordUns.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("uns Character");
            break;
        case "lns":
            var password = special_characters + lower + num;
            const shuffledPasswordLns = shuffleString(password);
            var new_password = shuffledPasswordLns.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            console.log("lns Character");
            break;
        case "ulns":
            var password = result + num + lower + special_characters;
            var shuffledPasswordUlns = shuffleString(password);
            var new_password = shuffledPasswordUlns.slice(0, slider_value);
            document.querySelector("#generated-password").innerHTML = new_password;
            document.querySelector(".error").style.display = "none";


            break;
        default:
            document.querySelector(".error").style.display = "block";
            break;
    }

}
document.querySelector(".copy-font").addEventListener("click", copyText);
function copyText() {

    var text = document.getElementById("generated-password");
    text.select();
    navigator.clipboard.writeText(text.value);
    if (text.value == "") {
        document.querySelector(".error2").style.display = "block";
    } else {
        alert("Text Copied To Clipboard");
    }

}

function shuffleString(str) {
    const array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        var c = array[i];
        array[i] = array[j];
        array[j] = c;
    }
    return array.join("");
}
