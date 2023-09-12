
function Hitung1(){
    let pertama = document.getElementById("InputField").value;
        let kedua = document.getElementById("InputField").value;
        let hasil = parseInt(pertama) * parseInt(kedua);
        let inputElement = document.getElementById('InputField');
        inputElement.value = ("Hasilnya adalah :", hasil)

        
}

function Reset(){ 
    let inputElement = document.getElementById('InputField');
    inputElement.value = ""
}

function Hitung2(){
    let pertama = document.getElementById("InputField2").value;
        let hasil = parseInt(4) * parseInt(pertama);
        let inputElement = document.getElementById('InputField2');
        inputElement.value = ("Hasilnya adalah :", hasil)

}
function Reset2(){ 
    let inputElement = document.getElementById('InputField2');
    inputElement.value = ""
}
