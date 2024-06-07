let year = document.querySelector('.year'); 
for(let i=1920; i<=2024; i++){
    // let years = document.createElement('option');
    // years.innerText = i+'년';
    // year.appendChild(years);

    let years = `<option value="${i}">${i}년</option>`;
    year.insertAdjacentHTML('beforeend', years);
}

let month = document.querySelector('.month');
for(let i=1; i<=12; i++){
    // let months = document.createElement('option');
    // months.innerText = i+'월';
    // month.appendChild(months);

    //jQuery
    $('.month').append('<option value="'+i+'">'+i+'월</option>');
}

let day = document.querySelector('.day');
for(let i=1; i<=31; i++){
    let days = document.createElement('option');
    days.innerText = i+'일';
    day.appendChild(days);
}