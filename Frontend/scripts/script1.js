function f1() {
    str1 = document.getElementById("text1").value;
    str2 = document.getElementById("text2").value;
    str3 = document.getElementById("text3").value;
    // alert(theo);

    data = {
        "theme": str1,
        "des": str2,
        "color": str3
    }
    //console.log(data);

    //str=JSON.stringify(data);
    const URL = 'http://localhost:8000/landing'
    fetch(URL, {
        method: 'post',
        body: data
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}






