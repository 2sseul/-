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

let country = document.querySelector('.country');
let arr = ['대한민국', '미국', '일본', '중국', '브라질', '러시아'];
for(let i=0; i<arr.length; i++){
    let countrys = `<option value="${arr[i]}">${arr[i]}</option>`;
    country.insertAdjacentHTML('beforeend', countrys);
}

let phone = document.querySelector('.phone');
let num = ['010', '011', '012', '016'];
for(let i=0; i<num.length; i++){
    let phones = `<option value="${num[i]}">${num[i]}</option>`;
    phone.insertAdjacentHTML('beforeend', phones);
}

let id = document.querySelector('.id');
let idCheck = document.querySelector('id-check');
