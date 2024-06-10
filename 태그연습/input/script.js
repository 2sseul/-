//id 정규성 검사

let idCheckAlert = document.querySelector('.id-alert');
let idCheckOk = document.querySelector('.id-ok');
    
function getId() {
    let id = document.getElementById('id').value;
    if(id.length == 0){
        idCheckAlert.classList.remove('id-alert-view');
        idCheckAlert.classList.add('id-alert');
        idCheckOk.classList.remove('id-ok-view');
        idCheckOk.classList.add('id-ok');        
    }else{
        if(id.length >= 4 && id.length <= 12 && /^[A-Za-z0-9][A-Za-z0-9]*$/.test(id)){
            idCheckAlert.classList.remove('id-alert-view');
            idCheckAlert.classList.add('id-alert');
            idCheckOk.classList.add('id-ok-view');
            idCheckOk.classList.remove('id-ok');
        }else{
            idCheckOk.classList.remove('id-ok-view');
            idCheckOk.classList.add('id-ok');
            idCheckAlert.classList.add('id-alert-view');
            idCheckAlert.classList.remove('id-alert');
        }
    }
}

//비밀번호 정규성 검사
let pwdCheckAlert = document.querySelector('.pwd-alert');
let pwdCheckOk = document.querySelector('.pwd-ok');

function getPwd(){
    let pwd = document.getElementById('password').value;
    if(pwd.length == 0){
        pwdCheckAlert.classList.remove('pwd-alert-view');
        pwdCheckAlert.classList.add('pwd-alert');
        pwdCheckOk.classList.remove('pwd-ok-view');
        pwdCheckOk.classList.add('pwd-ok');
    }else{
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwd)){
            pwdCheckAlert.classList.remove('pwd-alert-view');
            pwdCheckAlert.classList.add('pwd-alert');
            pwdCheckOk.classList.add('pwd-ok-view');
            pwdCheckOk.classList.remove('pwd-ok');
        }else{
            pwdCheckOk.classList.remove('pwd-ok-view');
            pwdCheckOk.classList.add('pwd-ok');
            pwdCheckAlert.classList.add('pwd-alert-view');
            pwdCheckAlert.classList.remove('pwd-alert');
        }
    }
}

//한국 표준시
let kst = new Date();
console.log(kst);
let getYear = kst.getFullYear();
console.log(getYear);
let getMonth = kst.getMonth();
console.log(getMonth);
let getDate = kst.getDate();
console.log(getDate);

let year = document.querySelector('.year'); 
for(let i=1920; i<=2024; i++){
    // let years = document.createElement('option');
    // years.innerText = i;
    // year.appendChild(years);

    let years = `<option value="${i}">${i}</option>`;
    year.insertAdjacentHTML('beforeend', years);
}

let month = document.querySelector('.month');
for(let i=1; i<=12; i++){
    // let months = document.createElement('option');
    // months.innerText = i;
    // month.appendChild(months);

    //jQuery
    $('.month').append('<option value="'+i+'">'+i+'</option>');
}

let day = document.querySelector('.day');
for(let i=1; i<=31; i++){
    let days = document.createElement('option');
    days.innerText = i;
    day.appendChild(days);
}

//국적
let country = document.querySelector('.country');
let arr = ['대한민국', '미국', '일본', '중국', '브라질', '러시아'];
for(let i=0; i<arr.length; i++){
    let countrys = `<option value="${arr[i]}">${arr[i]}</option>`;
    country.insertAdjacentHTML('beforeend', countrys);
}

//전화번호
let phone = document.querySelector('.phone');
let num = ['010', '011', '012', '016'];
for(let i=0; i<num.length; i++){
    let phones = `<option value="${num[i]}">${num[i]}</option>`;
    phone.insertAdjacentHTML('beforeend', phones);
}

//전화번호 정규성 검사
function getPhone(){
    let phone1 = document.getElementById('phone1').value;
    let phone2 = document.getElementById('phone2').vlaue;

}