// todo: wenn auch den submit - Button geklickt wird, sollen
//die Formulardaten ausgelesen werden

//todo: gespeichert werden

let submitBtn = document.querySelector("#submitBtn")

function onSubmitBtnClick(event) {
    //vermeiden von Standart verhalten des Browser
    //in dem Fall: Seite wird NICHT neu geladen 
    event.preventDefault();

    let firstnamw = document.querySelector("#firstname")
    let lastname = document.querySelector("#lastname")

    console.log(firstname.value, lastname.value)

}

function onSubmitGetFormData(event) {
    event.preventDefault()
    const formElement = document.querySelector("#nameForm")
    const formData = new FormData(formElement)


    /* Kurzform
    for (const [key, value] of formData) {
        console.log(key, value)

    }
        */

    const formDataObj = {

    }


    //Langform
    for (const entry of formData.entries()) {
        const key = entry[0];
        const value = entry[1]
        console.log(key, value)
        formDataObj[key] = value
    }
    console.log(formDataObj)
    localStorage.setItem(
        localStorage.length, 
        JSON.stringify(formDataObj))
}




//onSuubmitBtnClick
submitBtn.addEventListener("click", onSubmitGetFormData)

//andere variante: 
//document.getElementById("submitBtn")