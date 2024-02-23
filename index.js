function rg() {

    document.getElementById("result").innerHTML = " ";

    let res = '';
    let S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let len = S.length;
    let counter = 0;
    while (counter < 6) {
        let ind = Math.random() * len;
        res += S.charAt(ind);
        counter += 1;
    }
    
    document.getElementById("Captcha").innerHTML = res;
}

function checker()
{
    let Captcha = document.getElementById("Captcha").innerHTML;
    let input = document.getElementById("input").value;

    console.log(Captcha);

    if(Captcha === input)
    {
        document.getElementById("result").innerHTML = "Captcha is Matched";
    }
    else{
        document.getElementById("result").innerHTML = "Captcha is Not Matched";
    }
}