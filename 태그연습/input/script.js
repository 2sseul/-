//복합대입연산자
let idVeri = pwVeri = pwChkVeri = false;


//id 정규성 검사

let idAlert = document.querySelector('.id-alert');
let id = document.getElementById('id');

id.addEventListener('focusout', function(){
    if(id.value.length >= 8 && /^[A-Za-z0-9][A-Za-z0-9]*$/.test(id.value)){
        idAlert.innerHTML = `<span class="txt-green">사용할 수 있는 아이디입니다.</span>`;
        idVeri = true;
    }else{
        idAlert.innerHTML = `<span class="txt-red">아이디는 8글자 이상 영어와 숫자의 조합만 가능합니다.</span>`;
        idVeri = false;
    }
})

//비밀번호 정규성 검사
let pwdAlert = document.querySelector('.pwd-alert');
let pwd = document.getElementById('password');

pwd.addEventListener('focusout', function(){
    if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwd.value)){
        pwdAlert.innerHTML = `<span class="txt-green">사용할 수 있는 비밀번호입니다.</span>`;
        pwVeri = true;
    }else{
        pwdAlert.innerHTML = `<span class="txt-red">비밀번호는 8글자 이상의 영어, 숫자, 특수문자(@$!%*#?&)의 조합만 가능합니다.</span>`;
        pwVeri = false;
    }
})

let pwdCheckAlert = document.querySelector('.pwd-check-alert');
let pwdCheck = document.getElementById('password-check');

pwdCheck.addEventListener('focusout', function(){
    if(pwd.value == pwdCheck.value){
        pwdCheckAlert.innerHTML = `<span class="txt-green">비밀번호가 일치합니다.</span>`;
        pwChkVeri = true;
    }else{
        pwdCheckAlert.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다.</span>`;
        pwChkVeri = false;
    }
})


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

let checkboxs = document.querySelectorAll('input[type="checkbox"][name="hobby"]');
checkboxs.forEach((item)=>{
    item.addEventListener('change', () => {
        let checkCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;
        console.log(checkCount);
        if(checkCount > 5){
            alert("5개까지 체크할 수 있습니다!");
            item.checked = false;
        }
    })
})

let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join-form');
submitBtn.addEventListener('click', (e)=>{
    if(idVeri && pwdVeri && pwChkVeri){
        joinForm.submit();
    }else{
        //기본 속성 제거 (제출할 수 없게 해줌)
        e.preventDefault();
        alert("제출할 수 없습니다. 확인해주세요.");
    }
})
