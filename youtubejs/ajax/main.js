var servResponse = document.getElementById('response')

document.forms.ourForm.onsubmite = function (e) {
    e.preventDefault();

    var userInput = document.forms.ourForm.ourForm__inp.value;
    userInput = encodeURIComponent(userInput)

    var xhr = new XMLHttpRequest();

    //xhr.open('GET', 'form.php=' + userInput)
    xhr.open('POST', 'form.php');

    var formData = new FormData(document.forms.ourForm)
    //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200) {
            servResponse.textContent = xhr.responseText;
        }
    }

    xhr.send(formData)
};